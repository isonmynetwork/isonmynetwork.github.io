import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_pkTuGmSk.mjs';
import { c as createComponent, i as renderUniqueStylesheet, j as renderScriptElement, k as createHeadAndContent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_D2dAgb7s.mjs';
import { u as unflatten } from './parse_D_DrAez1.mjs';

// src/modern.ts
var to_string = (obj) => Object.prototype.toString.call(obj);
var is_typed_array = (value) => ArrayBuffer.isView(value) && !(value instanceof DataView);
var is_date = (obj) => to_string(obj) === "[object Date]";
var is_regexp = (obj) => to_string(obj) === "[object RegExp]";
var is_error = (obj) => to_string(obj) === "[object Error]";
var is_boolean = (obj) => to_string(obj) === "[object Boolean]";
var is_number = (obj) => to_string(obj) === "[object Number]";
var is_string = (obj) => to_string(obj) === "[object String]";
var is_array = Array.isArray;
var gopd = Object.getOwnPropertyDescriptor;
var is_property_enumerable = Object.prototype.propertyIsEnumerable;
var get_own_property_symbols = Object.getOwnPropertySymbols;
var has_own_property = Object.prototype.hasOwnProperty;
var object_keys = Object.keys;
function own_enumerable_keys(obj) {
  const res = object_keys(obj);
  const symbols = get_own_property_symbols(obj);
  for (let i = 0; i < symbols.length; i++) {
    if (is_property_enumerable.call(obj, symbols[i])) {
      res.push(symbols[i]);
    }
  }
  return res;
}
function is_writable(object, key) {
  return !gopd(object, key)?.writable;
}
function copy(src, options) {
  if (typeof src === "object" && src !== null) {
    let dst;
    if (is_array(src)) {
      dst = [];
    } else if (is_date(src)) {
      dst = new Date(src.getTime ? src.getTime() : src);
    } else if (is_regexp(src)) {
      dst = new RegExp(src);
    } else if (is_error(src)) {
      dst = { message: src.message };
    } else if (is_boolean(src) || is_number(src) || is_string(src)) {
      dst = Object(src);
    } else if (is_typed_array(src)) {
      return src.slice();
    } else {
      dst = Object.create(Object.getPrototypeOf(src));
    }
    const iterator_function = options.includeSymbols ? own_enumerable_keys : object_keys;
    for (const key of iterator_function(src)) {
      dst[key] = src[key];
    }
    return dst;
  }
  return src;
}
var empty_null = {
  includeSymbols: false,
  immutable: false
};
function walk(root, cb, options = empty_null) {
  const path = [];
  const parents = [];
  let alive = true;
  const iterator_function = options.includeSymbols ? own_enumerable_keys : object_keys;
  const immutable = !!options.immutable;
  return function walker(node_) {
    const node = immutable ? copy(node_, options) : node_;
    const modifiers = {};
    let keep_going = true;
    const state = {
      node,
      node_,
      path: [].concat(path),
      parent: parents[parents.length - 1],
      parents,
      key: path[path.length - 1],
      isRoot: path.length === 0,
      level: path.length,
      circular: void 0,
      isLeaf: false,
      notLeaf: true,
      notRoot: true,
      isFirst: false,
      isLast: false,
      update: function(x, stopHere = false) {
        if (!state.isRoot) {
          state.parent.node[state.key] = x;
        }
        state.node = x;
        if (stopHere) {
          keep_going = false;
        }
      },
      delete: function(stopHere) {
        delete state.parent.node[state.key];
        if (stopHere) {
          keep_going = false;
        }
      },
      remove: function(stopHere) {
        if (is_array(state.parent.node)) {
          state.parent.node.splice(state.key, 1);
        } else {
          delete state.parent.node[state.key];
        }
        if (stopHere) {
          keep_going = false;
        }
      },
      keys: null,
      before: function(f) {
        modifiers.before = f;
      },
      after: function(f) {
        modifiers.after = f;
      },
      pre: function(f) {
        modifiers.pre = f;
      },
      post: function(f) {
        modifiers.post = f;
      },
      stop: function() {
        alive = false;
      },
      block: function() {
        keep_going = false;
      }
    };
    if (!alive) {
      return state;
    }
    function update_state() {
      if (typeof state.node === "object" && state.node !== null) {
        if (!state.keys || state.node_ !== state.node) {
          state.keys = iterator_function(state.node);
        }
        state.isLeaf = state.keys.length === 0;
        for (let i = 0; i < parents.length; i++) {
          if (parents[i].node_ === node_) {
            state.circular = parents[i];
            break;
          }
        }
      } else {
        state.isLeaf = true;
        state.keys = null;
      }
      state.notLeaf = !state.isLeaf;
      state.notRoot = !state.isRoot;
    }
    update_state();
    const ret = cb(state, state.node);
    if (ret !== void 0 && state.update) {
      state.update(ret);
    }
    if (modifiers.before) {
      modifiers.before(state, state.node);
    }
    if (!keep_going) {
      return state;
    }
    if (typeof state.node === "object" && state.node !== null && !state.circular) {
      parents.push(state);
      update_state();
      for (const [index, key] of Object.entries(state.keys ?? [])) {
        path.push(key);
        if (modifiers.pre) {
          modifiers.pre(state, state.node[key], key);
        }
        const child = walker(state.node[key]);
        if (immutable && has_own_property.call(state.node, key) && !is_writable(state.node, key)) {
          state.node[key] = child.node;
        }
        child.isLast = state.keys?.length ? +index === state.keys.length - 1 : false;
        child.isFirst = +index === 0;
        if (modifiers.post) {
          modifiers.post(state, child);
        }
        path.pop();
      }
      parents.pop();
    }
    if (modifiers.after) {
      modifiers.after(state, state.node);
    }
    return state;
  }(root).node;
}
var Traverse = class {
  #value;
  #options;
  constructor(obj, options = empty_null) {
    this.#value = obj;
    this.#options = options;
  }
  /**
   * Get the element at the array `path`.
   */
  get(paths) {
    let node = this.#value;
    for (let i = 0; node && i < paths.length; i++) {
      const key = paths[i];
      if (!has_own_property.call(node, key) || !this.#options.includeSymbols && typeof key === "symbol") {
        return void 0;
      }
      node = node[key];
    }
    return node;
  }
  /**
   * Return whether the element at the array `path` exists.
   */
  has(paths) {
    let node = this.#value;
    for (let i = 0; node && i < paths.length; i++) {
      const key = paths[i];
      if (!has_own_property.call(node, key) || !this.#options.includeSymbols && typeof key === "symbol") {
        return false;
      }
      node = node[key];
    }
    return true;
  }
  /**
   * Set the element at the array `path` to `value`.
   */
  set(path, value) {
    let node = this.#value;
    let i = 0;
    for (i = 0; i < path.length - 1; i++) {
      const key = path[i];
      if (!has_own_property.call(node, key)) {
        node[key] = {};
      }
      node = node[key];
    }
    node[path[i]] = value;
    return value;
  }
  /**
   * Execute `fn` for each node in the object and return a new object with the results of the walk. To update nodes in the result use `this.update(value)`.
   */
  map(cb) {
    return walk(this.#value, cb, {
      immutable: true,
      includeSymbols: !!this.#options.includeSymbols
    });
  }
  /**
   * Execute `fn` for each node in the object but unlike `.map()`, when `this.update()` is called it updates the object in-place.
   */
  forEach(cb) {
    this.#value = walk(this.#value, cb, this.#options);
    return this.#value;
  }
  /**
   * For each node in the object, perform a [left-fold](http://en.wikipedia.org/wiki/Fold_(higher-order_function)) with the return value of `fn(acc, node)`.
   *
   * If `init` isn't specified, `init` is set to the root object for the first step and the root element is skipped.
   */
  reduce(cb, init) {
    const skip = arguments.length === 1;
    let acc = skip ? this.#value : init;
    this.forEach((ctx, x) => {
      if (!ctx.isRoot || !skip) {
        acc = cb(ctx, acc, x);
      }
    });
    return acc;
  }
  /**
   * Return an `Array` of every possible non-cyclic path in the object.
   * Paths are `Array`s of string keys.
   */
  paths() {
    const acc = [];
    this.forEach((ctx) => {
      acc.push(ctx.path);
    });
    return acc;
  }
  /**
   * Return an `Array` of every node in the object.
   */
  nodes() {
    const acc = [];
    this.forEach((ctx) => {
      acc.push(ctx.node);
    });
    return acc;
  }
  /**
   * Create a deep clone of the object.
   */
  clone() {
    const parents = [];
    const nodes = [];
    const options = this.#options;
    if (is_typed_array(this.#value)) {
      return this.#value.slice();
    }
    return function clone(src) {
      for (let i = 0; i < parents.length; i++) {
        if (parents[i] === src) {
          return nodes[i];
        }
      }
      if (typeof src === "object" && src !== null) {
        const dst = copy(src, options);
        parents.push(src);
        nodes.push(dst);
        const iteratorFunction = options.includeSymbols ? own_enumerable_keys : object_keys;
        for (const key of iteratorFunction(src)) {
          dst[key] = clone(src[key]);
        }
        parents.pop();
        nodes.pop();
        return dst;
      }
      return src;
    }(this.#value);
  }
};

/*
How it works:
`this.#head` is an instance of `Node` which keeps track of its current value and nests another instance of `Node` that keeps the value that comes after it. When a value is provided to `.enqueue()`, the code needs to iterate through `this.#head`, going deeper and deeper to find the last value. However, iterating through every single item is slow. This problem is solved by saving a reference to the last value as `this.#tail` so that it can reference it to add a new value.
*/

class Node {
	value;
	next;

	constructor(value) {
		this.value = value;
	}
}

class Queue {
	#head;
	#tail;
	#size;

	constructor() {
		this.clear();
	}

	enqueue(value) {
		const node = new Node(value);

		if (this.#head) {
			this.#tail.next = node;
			this.#tail = node;
		} else {
			this.#head = node;
			this.#tail = node;
		}

		this.#size++;
	}

	dequeue() {
		const current = this.#head;
		if (!current) {
			return;
		}

		this.#head = this.#head.next;
		this.#size--;
		return current.value;
	}

	peek() {
		if (!this.#head) {
			return;
		}

		return this.#head.value;

		// TODO: Node.js 18.
		// return this.#head?.value;
	}

	clear() {
		this.#head = undefined;
		this.#tail = undefined;
		this.#size = 0;
	}

	get size() {
		return this.#size;
	}

	* [Symbol.iterator]() {
		let current = this.#head;

		while (current) {
			yield current.value;
			current = current.next;
		}
	}
}

function pLimit(concurrency) {
	validateConcurrency(concurrency);

	const queue = new Queue();
	let activeCount = 0;

	const resumeNext = () => {
		if (activeCount < concurrency && queue.size > 0) {
			queue.dequeue()();
			// Since `pendingCount` has been decreased by one, increase `activeCount` by one.
			activeCount++;
		}
	};

	const next = () => {
		activeCount--;

		resumeNext();
	};

	const run = async (function_, resolve, arguments_) => {
		const result = (async () => function_(...arguments_))();

		resolve(result);

		try {
			await result;
		} catch {}

		next();
	};

	const enqueue = (function_, resolve, arguments_) => {
		// Queue `internalResolve` instead of the `run` function
		// to preserve asynchronous context.
		new Promise(internalResolve => {
			queue.enqueue(internalResolve);
		}).then(
			run.bind(undefined, function_, resolve, arguments_),
		);

		(async () => {
			// This function needs to wait until the next microtask before comparing
			// `activeCount` to `concurrency`, because `activeCount` is updated asynchronously
			// after the `internalResolve` function is dequeued and called. The comparison in the if-statement
			// needs to happen asynchronously as well to get an up-to-date value for `activeCount`.
			await Promise.resolve();

			if (activeCount < concurrency) {
				resumeNext();
			}
		})();
	};

	const generator = (function_, ...arguments_) => new Promise(resolve => {
		enqueue(function_, resolve, arguments_);
	});

	Object.defineProperties(generator, {
		activeCount: {
			get: () => activeCount,
		},
		pendingCount: {
			get: () => queue.size,
		},
		clearQueue: {
			value() {
				queue.clear();
			},
		},
		concurrency: {
			get: () => concurrency,

			set(newConcurrency) {
				validateConcurrency(newConcurrency);
				concurrency = newConcurrency;

				queueMicrotask(() => {
					// eslint-disable-next-line no-unmodified-loop-condition
					while (activeCount < concurrency && queue.size > 0) {
						resumeNext();
					}
				});
			},
		},
	});

	return generator;
}

function validateConcurrency(concurrency) {
	if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
		throw new TypeError('Expected `concurrency` to be a number from 1 and up');
	}
}

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc) || imageSrc.startsWith("/")) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": true, "MODE": "production", "PROD": false, "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, {})?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(`The collection ${JSON.stringify(collection)} does not exist.`);
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/How to quickly deploy a static website.md": () => import('./How to quickly deploy a static website_Cc7d_Q7k.mjs'),"/src/content/blog/cannon-excellence.md": () => import('./cannon-excellence_iCpnba06.mjs'),"/src/content/blog/cutting-edge-tablets.md": () => import('./cutting-edge-tablets_B-catImq.mjs'),"/src/content/blog/elevate-your-mobile-experience.md": () => import('./elevate-your-mobile-experience_CS1VB8uk.mjs'),"/src/content/blog/guardian-of-the-digital-realm.md": () => import('./guardian-of-the-digital-realm_CRKEDcVm.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"how-to-quickly-deploy-a-static-website":"/src/content/blog/How to quickly deploy a static website.md","capturing-lifes-moments-with-canon-excellence":"/src/content/blog/cannon-excellence.md","elevate-your-mobile-experience-with-samsung":"/src/content/blog/elevate-your-mobile-experience.md","unleash-creativity-with-these-cutting-edge-tablets":"/src/content/blog/cutting-edge-tablets.md","guardian-of-the-digital-realm-web-security":"/src/content/blog/guardian-of-the-digital-realm.md"}}};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/How to quickly deploy a static website.md": () => import('./How to quickly deploy a static website_D2mTAzho.mjs'),"/src/content/blog/cannon-excellence.md": () => import('./cannon-excellence_g6wmiVo-.mjs'),"/src/content/blog/cutting-edge-tablets.md": () => import('./cutting-edge-tablets_CbgjWnRl.mjs'),"/src/content/blog/elevate-your-mobile-experience.md": () => import('./elevate-your-mobile-experience_C7WTHgN6.mjs'),"/src/content/blog/guardian-of-the-digital-realm.md": () => import('./guardian-of-the-digital-realm_CfxqvW07.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
});

export { getEntry as a, getCollection as g };
