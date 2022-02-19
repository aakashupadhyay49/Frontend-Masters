class Courses {
	constructor(
		courseName,
		author,
		authorJob,
		desc,
		authorImg,
		webpImg,
		previewImages
	) {
		this.courseName = courseName;
		this.author = author;
		this.authorJob = authorJob;
		this.authorImg = authorImg;
		this.desc = desc;
		this.webpImg = webpImg;
		this.previewImages = previewImages;
	}
}

const courses = [
	{
		...new Courses(
			"Web Audio Synthesis & Visualization",
			"Matt DesLauriers",
			"Freelancer",
			`Learn to create sounds using nothing but code! Synthesize and visualize audio, and add fun effects with JavaScript. Use these skills to build audio into games, web applications, or even art projects in the browser.`,
			"https://static.frontendmasters.com/assets/teachers/deslauriers/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-12-07-web-audio/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-12-07-web-audio/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Web UX Design for High Converting Websites",
			"Paul Boag",
			"Bogaworld",
			`Can a website that encourages users to act be created without dark patterns? Well, it turns out, yes, it can! Learn to make websites more engaging through good design, fascinating content, and solid UX in this course by Paul Boag.`,
			"https://static.frontendmasters.com/assets/teachers/boag/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-11-23-ux-design-principles/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-11-23-ux-design-principles/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Dynamic CSS with Custom Properties (aka CSS Variables)",
			"Lea Verou",
			"MIT",
			`Create reusable components without any JavaScript dependencies needed – with only vanilla CSS! Learn how to leverage Custom Properties to improve code reuse, maintainability, and downright enable possibilities that previously required large amounts of hard-to-maintain JavaScript and violated the separation of concerns.`,
			"https://static.frontendmasters.com/assets/teachers/verou/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-11-09-css-variables/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-11-09-css-variables/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Intermediate React Native",
			"Kadi Kraman",
			"Formidable",
			"Learn how to persist data across app launches, add images to your React Native app, use gestures, add animations and much more!",
			"https://static.frontendmasters.com/assets/teachers/kraman/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-11-02-intermediate-react-native/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-11-02-intermediate-react-native/posterframe.webp"
		),
	},
	{
		...new Courses(
			"CSS Grid & Flexbox for Responsive Layouts, v2",
			"Jen Kramer",
			"Freelancer Instructor",
			`Learn the essential CSS layout techniques for building responsive, beautiful websites. You'll use CSS Grid and Flexbox along with responsive images to build out real-world web layouts!`,
			"https://static.frontendmasters.com/assets/teachers/kramer/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-10-26-css-grid-flexbox-v2/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-10-26-css-grid-flexbox-v2/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Developer Productivity",
			"ThePrimaegen",
			"Netflix",
			`Build a pro dev workflow that will increase your productivity across multiple machines, projects, and technologies. Setup your computer quickly with Ansible, use git worktrees, save time using tmux, and other tools that can help you be more productive.`,
			`https://static.frontendmasters.com/assets/teachers/theprimeagen/thumb.webp`,
			`https://static.frontendmasters.com/assets/courses/2021-10-19-developer-productivity/thumb.webp`,
			"https://static.frontendmasters.com/assets/courses/2021-10-19-developer-productivity/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Complete Intro to Real-Time",
			"Brian Holt",
			"Stripe",
			`Build apps where the client can push messages to the server and talk in real-time! You’ll start by learning long polling with Vanilla JavaScript and Node.js, then open web sockets by hand, and finally, you’ll learn some excellent web socket abstractions with SocketIO. You’ll learn back off and retry strategies along the way, as well as use HTTP2 push in the browser!`,
			"https://static.frontendmasters.com/assets/teachers/holt/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-10-08-realtime/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-10-08-realtime/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Intermediate Gatsby, v2",
			"Jason Lengstorf",
			"Netlify",
			"Use Gatsby’s APIs to handle advanced use cases like handling custom data and dynamic pages, client-only routes and protected routes, and customizing Gatsby’s schema and GraphQL API data.",
			"https://static.frontendmasters.com/assets/teachers/lengstorf/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-09-23-intermediate-gatsby-v2/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-09-23-intermediate-gatsby-v2/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Intermediate TypeScript",
			"Mike North",
			"LinkedIn",
			"TypeScript adds a powerful type system on top of your JavaScript to catch bugs before they happen and provide a superior developer experience for collaborative teams.",
			"https://static.frontendmasters.com/assets/teachers/north/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-08-04-intermediate-typescript/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-08-04-intermediate-typescript/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Introduction to Node.js, v2",
			"Scott Moss",
			"Netflix",
			"Transfer your JavaScript skills to the server-side and level up to a full-stack engineer! By learning the foundations of Node.js, you’ll be able to do a lot more with JavaScript, like creating command-line interfaces and APIs, and interacting with the file system.",
			`https://static.frontendmasters.com/assets/teachers/moss/thumb.webp`,
			"https://static.frontendmasters.com/assets/courses/2021-07-20-node-js-v2/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-07-20-node-js-v2/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Complete Intro to Computer Science",
			"Brian Holt",
			"Stripe",
			`Even without a traditional computer science background, you’ll be able to learn big computer science topics: Algorithms and Big O Analysis, Recursion, Sorting, Data Structures, AVL Trees, Binary Search Trees, Tree Traversals, and Path Finding.`,
			"https://static.frontendmasters.com/assets/teachers/holt/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-07-06-computer-science-v2/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-07-06-computer-science-v2/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Redux Fundamentals (feat. React)",
			"Steve Kinney",
			"Twilio",
			"Learn the Redux API from scratch, then learn to hook Redux into a React application. Also learn how to extend Redux with various tools from its ecosystem, including Reselect, Immer, and Redux Toolkit, to reduce boilerplate and speed up your development!",
			"https://static.frontendmasters.com/assets/teachers/kinney/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-06-15-redux-fundamentals/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-06-15-redux-fundamentals/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Website Accessibility, v2",
			"Jon Kuperman",
			"Cloudflare",
			"Audit and fix accessibility issues on any website! Learn keyboard accessibility, focus control & ARIA roles to make sites accessible to screen readers and those with disabilities.",
			"https://static.frontendmasters.com/assets/teachers/kuperman/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-06-08-accessibility-v2/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-06-08-accessibility-v2/posterframe.webp"
		),
	},
	{
		...new Courses(
			"VIM Fundamentals",
			"ThePrimeagen",
			"Netflix",
			"Learn the basics of editing and navigation in VIM. You'll learn macros, registers, find, and replaces. Finally, edit your vimrc plugins along with quickfix lists and get a demo of ThePrimeagen's ideal VIM workflow!",
			"https://static.frontendmasters.com/assets/teachers/theprimeagen/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-04-20-vim-fundamentals/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-04-20-vim-fundamentals/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Web Assembly",
			"Jem Young",
			"Netflix",
			"Learn foundational, low-level programming such as binary, hexadecimal, array buffers, memory management, and unsigned integers. Use AssemblyScript to build and ship Web Assembly modules into your web apps!",
			"https://static.frontendmasters.com/assets/teachers/young/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-04-07-web-assembly/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-04-07-web-assembly/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Introduction to Dev Tools, v3",
			"Jon Kuperman",
			"Cloudflare",
			"Master built-in dev tools to step through your code with the debugger, audit web page performance, and remove “page jank” when a site isn’t keeping up.",
			"https://static.frontendmasters.com/assets/teachers/kuperman/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-03-30-dev-tools/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-03-30-dev-tools/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Web Performance Fundamentals",
			"Todd Gardner",
			"TrackJS",
			"Learn to improve your core web vitals metrics like first contentful paint (FCP), largest contentful paint (LCP), and cumulative layout shift (CLS) in this Web Performance Fundamentals course.",
			"https://static.frontendmasters.com/assets/teachers/gardner/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-03-23-web-perf/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-03-23-web-perf/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Deno First Look",
			"Burke Holland",
			"Microsoft",
			"Take a first look at Deno, the new command-line runtime for JavaScript. Secure by default, built on TypeScript, as well as a fresh take on managing dependencies and shipping your apps. Deno has been rebuilt from the ground up based on lessons learned from Node.js.",
			"https://static.frontendmasters.com/assets/teachers/holland/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-03-16-intro-deno/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-03-16-intro-deno/posterframe.webp"
		),
	},
	{
		...new Courses(
			"3D on the Web & WebXR",
			"Aysegul Yonet",
			"Microsoft",
			"Learn to add 3D experiences to your websites using JavaScript libraries: Three.js, Bablyon.js, and Aframe. And learn the new WebXR device APIs for creating Virtual Reality (VR) and Augmented Reality (AR) experiences on the web.",
			"https://static.frontendmasters.com/assets/teachers/yonet/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-03-09-3d-webxr/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-03-09-3d-webxr/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Production-Grade Next.js",
			"Scott Moss",
			"Netflix",
			"Build production-ready, full-stack React apps. Add authentication, generate hundreds of pages performantly, preview your content, query a database, and use a CMS with Next.js along with deploying your app to Vercel.",
			"https://static.frontendmasters.com/assets/teachers/moss/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-03-02-production-next/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-03-02-production-next/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Production-Grade Vue.js",
			"Ben Hong",
			"Netlify",
			"Learn component design patterns, workflows to enhance productivity, testing methodologies, state management, routing, best practices for architecting increasingly complex applications, and more.",
			"https://static.frontendmasters.com/assets/teachers/hong/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-02-18-production-vue/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-02-18-production-vue/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Functional JavaScript First Steps",
			"Anjana Vakil",
			"Observable",
			"Learn core functional JavaScript programming techniques by coding everything with pure functions, learning recursion, higher-order functions, closures, currying, and function composition. Also, learn how immutable data is essential for functional programming.",
			"https://static.frontendmasters.com/assets/teachers/vakil/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-02-09-functional-first-steps/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-02-09-functional-first-steps/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Enterprise Architecture Patterns",
			"Lukas Ruebbelke",
			"Venmo",
			"Build non-trivial enterprise-level web applications through first-principles thinking applied to programming in JavaScript and TypeScript.",
			"https://static.frontendmasters.com/assets/teachers/ruebbelke/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-02-02-enterprise-patterns/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2021-02-02-enterprise-patterns/posterframe.webp"
		),
	},
	{
		...new Courses(
			"State Modeling in React with XState",
			"David Khourshid",
			"Microsoft",
			"Explore using XState and React together to model state in real-world React apps. State machines make complex application logic visually clear, flexible, and robust.",
			"https://static.frontendmasters.com/assets/teachers/khourshid/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2020-12-29-xstate-react/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2020-12-29-xstate-react/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Practical Guide to Python",
			"Nina Zakharenko",
			"Microsoft",
			"Learn why you might want to use Python and all the foundational basics: data types, numbers, strings, lists, sets, tuples, and dictionaries. You're going to learn how to structure your programs with functions, loops, logic, and objects and end the course using the Django framework.",
			"https://static.frontendmasters.com/assets/teachers/zakharenko/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2020-12-22-practical-python/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2020-12-22-practical-python/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Complete Intro to Databases",
			"Brian Holt",
			"Stripe",
			"In this course you'll learn the basics of using four of the most popular open-source types of databases: document based database MongoDB, relational database PostgreSQL, graph database Neo4j, and key-value store Redis.",
			"https://static.frontendmasters.com/assets/teachers/holt/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2020-12-08-databases/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2020-12-08-databases/posterframe.webp"
		),
	},
	{
		...new Courses(
			"JavaScript and TypeScript Monorepos",
			"Mike North",
			"LinkedIn",
			"Monorepos have taken the JavaScript world by storm, unlocking powerful new patterns around composition, encapsulation, and ease of maintenance.",
			"https://static.frontendmasters.com/assets/teachers/north/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2020-11-18-monorepos/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2020-11-18-monorepos/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Introduction to D3.js",
			"Shirley Wu",
			"Data Sketches",
			"Build custom charts with D3.js using data binding with the enter-update-exit pattern. You'll learn scales and to animate between different D3 layouts for building truly interactive charts.",
			"https://static.frontendmasters.com/assets/teachers/wu/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2020-09-25-d3/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2020-09-25-d3/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Introduction to Serverless Functions",
			"Jason Lengstorf",
			"Netlify",
			"Learn to build dynamic web apps without the hassle of setting up or maintaining servers! You'll learn to create serverless functions to load data, process form entries securely, handle authentication, and more",
			"https://static.frontendmasters.com/assets/teachers/lengstorf/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2020-08-25-serverless-functions/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2020-08-25-serverless-functions/posterframe.webp"
		),
	},
	{
		...new Courses(
			"Complete Intro to Linux and the Command-Line",
			"Brian Holt",
			"Stripe",
			"Gain powerful command-line skills, learn to use Ubuntu, quit VIM, handle package management, and write your own shell scripts!",
			"https://static.frontendmasters.com/assets/teachers/holt/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2020-08-17-linux-command-line/thumb.webp",
			"https://static.frontendmasters.com/assets/courses/2020-05-26-front-end-game/posterframe.webp"
		),
	},
];

module.exports = courses;
// export default courses;
