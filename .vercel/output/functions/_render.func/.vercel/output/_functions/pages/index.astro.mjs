/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute, b as createAstro } from '../chunks/astro/server_D2dAgb7s.mjs';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_dxT51Zov.mjs';
import { a as $$Topic, $ as $$Team } from '../chunks/Team_DmmrRrng.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <div class="text-left space-y-3"> <h1 class="text-5xl font-medium leading-none md:text-6xl">Expert IT Care <br> Personalized Just for You</h1> <p class="mt-6 mb-8  text-xl font-normal leading-7 sm:mb-12">
We provide personalized, subscription-based IT services designed to meet the unique needs of SMEs, home offices, and home users.<wbr>
Our approach ensures that your technology grows with you, through consistent support, reliable solutions, and seamless integration.
</p> <a class="px-9 py-5 bg-zinc-900 hover:bg-white text-white hover:text-black border rounded-2xl justify-items-center md:justify-items-start gap-2.5 inline-flex" rel="noopener noreferrer" href="https://github.com/manulthanura/Positivus" target="_blank"> <h2 class="text-center text-xl font-normal leading-7">Book a consultation</h2> </a> </div> </div> <div class="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <img src="/Hero.png" width="100%" alt="Hero"> </div> </div> <div class="flex-row items-center"> <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6"> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/01.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/02.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/03.svg" class="h-9 w-auto m-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/04.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/05.svg" class="h-8 w-auto m-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/06.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height=""> </div> </div> </div> ` })}`;
}, "/Users/ismk/Documents/Work/isonmynetwork/src/components/Hero.astro", void 0);

const servicesData = [
	{
		id: 1,
		name1: "Small and Medium Enterprises",
		description: "Scalable server setups & virtualization Docker & VPN configuration Data backup and recovery solutions",
		background: "h-[310px] p-12 bg-zinc-100 rounded-[45px] shadow-card border border-black justify-between items-center flex text-black",
		arrow: "./services/ag.svg",
		link: "./",
		image: "./services/01.svg"
	},
	{
		id: 2,
		name1: "Home Offices",
		description: "Scalable server setups & virtualization Docker & VPN configuration Data backup and recovery solutions",
		background: "h-[310px] p-12 bg-lime rounded-[45px] shadow-card border border-black justify-between items-center flex text-black",
		arrow: "./services/ag.svg",
		link: "./",
		image: "./services/02.svg"
	},
	{
		id: 3,
		name1: "Home Users",
		description: "Scalable server setups & virtualization Docker & VPN configuration Data backup and recovery solutions",
		background: "h-[310px] p-12 bg-black rounded-[45px] shadow-card border border-black justify-between items-center flex text-white",
		arrow: "./services/aw.svg",
		link: "./",
		image: "./services/03.svg"
	}
];

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row" id="services"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Our Services", "description": "At isonmynet.work, we believe IT solutions should be personalized, long-term, and adaptable. Through a subscription model, our 6-month minimum contracts guarantee continuous support as your needs evolve, ensuring you\u2019re never without expert guidance." })}</div> <div class="flex-row items-center py-5"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4"> <!-- card start--> ${servicesData.map(({ background, name1, description, arrow, link, image }) => renderTemplate`<div${addAttribute(background, "class")}> <div class="flex-col justify-center items-start gap-[93px] inline-flex"> <div class="flex-col justify-start items-start flex"> <div class="px-[7px] bg-lime-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class=" text-3xl font-medium">${name1}</div> </div> <div class="px-[7px] bg-lime-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class="text-3sm font-medium">${description}</div> </div> </div> <a class="justify-start items-center gap-[15px] inline-flex"${addAttribute(link, "href")}> <div class="w-[41px] h-[41px] relative"> <img class="w-[41px] h-[41px] left-0 top-0 absolute"${addAttribute(arrow, "src")}> </div> <div class="text-xl font-normal leading-7">Learn more</div> </a> </div> <div class="w-[210px] h-[170px] pt-0.5 pb-[1.95px] justify-center items-center flex"> <img class="hidden md:block"${addAttribute(image, "src")}> </div> </div>`)} <!-- card end--> </div> </div> <div class="flex-row items-center my-6 p-14 bg-zinc-100 rounded-[45px]"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="justify-start items-center gap-[275px] flex"> <div class="flex-col justify-start items-start gap-[26px] inline-flex text-black"> <div class="text-3xl font-medium">Let’s make things happen</div> <div class="text-lg font-normal">Contact us today to learn more about how our IT services can help you and your business grow</div> <a href="/" class="px-[35px] py-5 bg-zinc-900 hover:bg-white text-white hover:text-black border rounded-[14px] justify-start items-start gap-2.5 inline-flex"> <div class="text-center text-xl font-normal leading-7">Get your free proposal</div> </a> </div> </div> <div class="hidden md:grid justify-items-center -m-20"> <img src="/services/Illustration.svg" width="50%" alt="cat"> </div> </div> </div> ` })}`;
}, "/Users/ismk/Documents/Work/isonmynetwork/src/components/Services.astro", void 0);

const $$SwiperSlider = createComponent(($$result, $$props, $$slots) => {
  const slides = [
    { index: 1, name: "John Johnson", description: "Marketing dierector at XYZ" },
    { index: 2, name: "Ana Banana", description: "Marketing dierector at XYZ" },
    {
      index: 3,
      name: "Camilo Corintio",
      description: "Marketing dierector at XYZ"
    },
    { index: 4, name: "Karla Kaz", description: "Marketing dierector at XYZ" },
    { index: 5, name: "Johanna Jana", description: "Marketing dierector at XYZ" }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="ProjectSlider" class="swiper mt-10"${addAttribute({
    "--swiper-pagination-color": "#B9FF66",
    "--swiper-pagination-bullet-inactive-color": "#fff",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "19px",
    "--swiper-pagination-bullet-horizontal-gap": "10px"
  }, "style")} data-astro-cid-g42mys5r> <div class="swiper-wrapper mt-[84px] mb-[124px]" data-cursor="swipe" data-astro-cid-g42mys5r> ${slides.map((slide) => renderTemplate`<div class="swiper-slide text-white flex flex-col" role="group"${addAttribute(`${slide.index} / ${slides.length}`, "aria-label")} data-astro-cid-g42mys5r> <div class="flex flex-col justify-center items-center py-[48px] px-6 sm:px-[52px]" data-astro-cid-g42mys5r> <p class="bubble" data-astro-cid-g42mys5r>
"We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
</p> </div> <div class="w-full px-10 sm:px-20 " data-astro-cid-g42mys5r> <div class="text-lime text-base md:text-xl font-medium" data-astro-cid-g42mys5r>${slide.name}</div> <div data-astro-cid-g42mys5r>${slide.description}</div> </div> </div>`)} </div> <div class="flex justify-around lg:justify-center mb-[68px] lg:gap-[189px]" data-astro-cid-g42mys5r> <div class="swiper-button-prev w-7 h-7 sm:w-10 sm:h-10" data-astro-cid-g42mys5r> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-astro-cid-g42mys5r><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-g42mys5r></path></svg> </div> <div class="swiper-pagination" data-astro-cid-g42mys5r></div> <div class="swiper-button-next w-7 h-7 sm:w-10 sm:h-10 rotate-180" data-astro-cid-g42mys5r> <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 448 512" data-astro-cid-g42mys5r><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-g42mys5r></path></svg> </div> </div> </div>  `;
}, "/Users/ismk/Documents/Work/isonmynetwork/src/components/SwiperSlider.astro", void 0);

const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Testimonials", "description": "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" })} </div> <div class="rounded-[45px] bg-black mb-[150px] text-white"> ${renderComponent($$result2, "SwiperSlider", $$SwiperSlider, {})} </div> ` })}`;
}, "/Users/ismk/Documents/Work/isonmynetwork/src/components/Testimonial.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Contact", "description": "Connect with Us: Let's Discuss Your Digital Marketing Needs" })} </div> <div class="relative flex flex-col items-center md:flex-row my-6 bg-zinc-100 rounded-[45px]"> <div class="row items-center py-12 px-4 md:px-20 md:w-8/12 md:py-10"> <form action="#" class="space-y-8 md:w-full"> <div class="flex"> <div class="flex items-center me-4"> <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-lime bg-black border-black focus:ring-lime"> <label for="inline-radio" class="ms-2 text-base font-medium text-black">Say Hi</label> </div> <div class="flex items-center me-4 mx-8 md:mx-20"> <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-lime bg-black border-black focus:ring-lime"> <label for="inline-2-radio" class="ms-2 text-base font-medium text-black">Get a Quote</label> </div> </div> <div> <label for="email" class="block mb-2 text-base font-medium text-black">Name</label> <input type="email" id="email" class="shadow-sm bg-white border text-black text-base rounded-lg focus:ring-black focus:border-black block w-full p-2.5" placeholder="Name" required> </div> <div> <label for="subject" class="block mb-2 text-base font-medium text-black">Email</label> <input type="text" id="subject" class="block p-3 w-full text-base text-black bg-white rounded-lg border shadow-sm focus:ring-black focus:border-black" placeholder="Email" required> </div> <div class="sm:col-span-2"> <label for="message" class="block mb-2 text-base font-medium text-black dark:text-gray-400">Message</label> <textarea id="message" rows="6" class="block p-2.5 w-full text-base text-black bg-white rounded-lg shadow-sm border focus:ring-black focus:border-black" placeholder="Message"></textarea> </div> <button type="submit" class="w-full py-5 bg-zinc-900 rounded-[14px] justify-center gap-2.5 inline-flex"> <div class="text-center text-white text-xl font-normal leading-7">Send Message</div> </button> </form> </div> <div class="hidden md:grid md:justify-items-end md:w-4/12 md:py-2"> <img src="./clients/contact.svg" alt="c" width="80%"> </div> </div> ` })}`;
}, "/Users/ismk/Documents/Work/isonmynetwork/src/components/Contact.astro", void 0);

const $$Case = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row" id="projects"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Case Studies", "description": "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" })} </div> <div class="w-full p-12 bg-zinc-900 rounded-[45px] justify-start items-start gap-16 inline-flex text-white"> <div class="grid grid-cols-1 md:grid-cols-3 gap-2 divide-x-0 md:divide-x divide-y md:divide-y-0"> <div class="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2"> <div class="w-full text-lg font-normal">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</div> <div class="justify-start items-center gap-[15px] inline-flex"> <div class="text-lime text-xl font-normal leading-7">Learn more</div> <img src="/services/agc.svg" alt="arrow"> </div> </div> <div class="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2"> <div class="w-full text-lg font-normal">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</div> <div class="justify-start items-center gap-[15px] inline-flex"> <div class="text-lime text-xl font-normal leading-7">Learn more</div> <img src="/services/agc.svg" alt="arrow"> </div> </div> <div class="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2"> <div class="w-full text-lg font-normal">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</div> <div class="justify-start items-center gap-[15px] inline-flex"> <div class="text-lime text-xl font-normal leading-7">Learn more</div> <img src="/services/agc.svg" alt="arrow"> </div> </div> </div> <!-- <div class="w-[186px] h-[0px] origin-top-left rotate-90 border border-white"></div> --> <!-- <div class="w-[186px] h-[0px] origin-top-left rotate-90 border border-white"></div> --> </div> ` })}`;
}, "/Users/ismk/Documents/Work/isonmynetwork/src/components/Case.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<!-- POSITIVUS Official Astro theme -->${renderComponent($$result, "Layout", $$Layout, { "title": "IsOnMyNet.Work" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Case", $$Case, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ` })}`;
}, "/Users/ismk/Documents/Work/isonmynetwork/src/pages/index.astro", void 0);

const $$file = "/Users/ismk/Documents/Work/isonmynetwork/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
