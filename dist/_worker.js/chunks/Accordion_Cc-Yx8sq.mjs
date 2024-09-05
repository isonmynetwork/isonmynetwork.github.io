globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_47V-Ssam.mjs';

const $$Astro$1 = createAstro("https://isonmynet.work");
const $$Topic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Topic;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid place-items-center gap-5 mb-10 md:flex"> <h2 class="text-4xl sm:text-5xl px-1.5 font-medium bg-lime rounded-md"> ${title} </h2> <p class="text-xl font-normal text-center md:text-start lg:w-2/3"> ${description} </p> </div>`;
}, "/Users/ismk/Documents/Work/isonmynetwork/src/components/Topic.astro", void 0);

const team = [
	{
		title: "CEO and Founder",
		name: "John Smith",
		description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
		profile: "/team/c1.png",
		link: "/"
	},
	{
		title: "Director of Operations",
		name: "Jane Doe",
		description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
		profile: "/team/c2.png",
		link: "/"
	},
	{
		title: "Senior SEO Specialist",
		name: "Michael Brown",
		description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
		profile: "/team/c3.png",
		link: "/"
	}
];
const process = [
	{
		index: 1,
		label: "Consultation",
		content: "We begin by understanding your unique IT needs, business objectives, and infrastructure requirements. This ensures we provide personalized solutions tailored to your environment."
	},
	{
		index: 2,
		label: "Assessment & Planning",
		content: "Next, we assess your current IT infrastructure, identify areas for improvement, and create a comprehensive plan to implement effective solutions for your business."
	},
	{
		index: 3,
		label: "Implementation",
		content: "Our team implements the customized IT solutions, such as server setups, network security, or media server configurations, ensuring minimal disruption to your operations."
	},
	{
		index: 4,
		label: "Optimization",
		content: "Once implemented, we optimize the systems for performance, security, and scalability, ensuring everything operates efficiently."
	},
	{
		index: 5,
		label: "Monitoring & Reporting",
		content: "We provide ongoing monitoring of your IT infrastructure and deliver regular reports to keep you informed of performance, updates, and any potential issues."
	},
	{
		index: 6,
		label: "Continuous Improvement",
		content: "As your business evolves, we continuously refine and improve your IT solutions, adapting to your changing needs and industry advancements."
	}
];
const teamData = {
	team: team,
	process: process
};

const $$Astro = createAstro("https://isonmynet.work");
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Accordion;
  const { index, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="accordion__item" class="accordion__item group h-[160px] bg-zinc-100 overflow-hidden w-full transition-all duration-500 mb-[30px] rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]"> <button class="accordion__toggle w-full h-[160px] flex items-center justify-between p-[60px] cursor-pointer"${addAttribute(`${title} accordion__item menu button`, "id")} aria-expanded="false"${addAttribute(`${title} accordion__item menu content`, "aria-controls")}> <div class="flex items-center gap-[25px]"> <span class="hidden sm:block sm:text-6xl">0${index}</span> ${title} </div> <div class="bg-white w-[58px] h-[58px] flex justify-center items-center rounded-full border border-dark"> <div class="accordion__icon h-10 w-10 transition-transform duration-300 flex justify-center items-center relative" aria-hidden="true"></div> </div> </button> <div${addAttribute(`${title} accordion__item menu content`, "id")}${addAttribute(`${title} accordion__item menu button `, "aria-labelledby")} class="accordion__content px-[60px]"> <div class="w-full h-[2px] bg-black"></div> <p class="prose mb-4 mt-1 max-w-full pt-5 pb-[60px] transition-[height]"> ${description} </p> </div> </div> `;
}, "/Users/ismk/Documents/Work/isonmynetwork/src/components/Accordion.astro", void 0);

export { $$Topic as $, $$Accordion as a, teamData as t };
