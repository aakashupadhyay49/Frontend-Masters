class teacher {
    constructor(
        name,
        job,
        img,
        desc,
    ) {
        this.name = name;
        this.job = job;
        this.img = img;
        this.desc = desc;
    }
}

let teachersData = [{
        ...new teacher(
            "Jen Kramer",
            "Freelance Instructor",
            "https://static.frontendmasters.com/assets/teachers/kramer/thumb@2x.webp",

        ),
    },
    {
        ...new teacher(
            "Matt DesLauriers",
            "Freelancer",
            "https://static.frontendmasters.com/assets/teachers/deslauriers/thumb.webp",

        ),
    },
    {
        ...new teacher(
            "Paul Boag",
            "Boagworld",
            "https://static.frontendmasters.com/assets/teachers/boag/thumb@2x.webp",

        ),
    },
    {
        ...new teacher(
            "Lea Verou",
            "MIT",
            "https://static.frontendmasters.com/assets/teachers/verou/thumb@2x.webp",

        ),
    },
    {
        ...new teacher(
            "Kadi Kraman",
            "Formidable",
            "https://static.frontendmasters.com/assets/teachers/kraman/thumb@2x.webp",

        ),
    },
    {
        ...new teacher(
            "ThePrimeagen",
            "Netflix",
            "https://static.frontendmasters.com/assets/teachers/theprimeagen/thumb@2x.webp",

        ),
    },
    {
        ...new teacher(
            "Brian Holt",
            "Stripe",
            "https://static.frontendmasters.com/assets/teachers/holt/thumb@2x.webp",
            "Brian is currently working as a product manager on dev tools at Stripe and he's all about developers, developers, developers. Previously he was a JavaScript engineer at Netflix, Microsoft and Reddit. When not working, Brian finds time to teach on Frontend Masters, run his mouth on Front End Happy Hour, travel all over the world, and play with his adorable dog. Brian is currently a resident of Seattle, WA.",


        ),
    },
    {
        ...new teacher(
            "Jason Lengstorf",
            "Netlify",
            "https://static.frontendmasters.com/assets/teachers/lengstorf/thumb@2x.webp",
            `Jason Lengstorf is the VP of Developer Experience at Netlify and the host of Learn With Jason, a live-streamed video show where he pairs with people in the community to learn something new in 90 minutes. He's passionate about building healthy, efficient teams and systems, and he's done his best to positively influence the community, leadership, and technical health of open source and companies including Gatsby and IBM. He lives in Portland, Oregon.`

        ),
    },
    {
        ...new teacher(
            "Mike North",
            "LinkedIn",
            "https://static.frontendmasters.com/assets/teachers/north/thumb@2x.webp",
            "Mike is a Senior Staff Engineer and Head of Infrastructure Product Design at LinkedIn, where he focuses on the ergonomics of internal and open source tools and tech stacks that thousands of engineers use every day. As one of company's deepest experts around TypeScript and Visual Studio Code, Mike has first hand experience rolling out and supporting adoption of these technologies at “big tech company” scale. Prior to working at LinkedIn, Mike was the CTO of Levanto Financial and the UI Architect of Yahoo's Ads & Data division. As part of his ongoing work to improve the JavaScript ecosystem, Mike is a regular contributor and maintainer of a wide range of open source libraries. His areas of focus are TypeScript, Ember.js, CLIs and Progressive Web Applications.",

        ),
    },
    {
        ...new teacher(
            "Scott Moss",
            "Netflix",
            "https://static.frontendmasters.com/assets/teachers/moss/thumb@2x.webp",
            "Scott is the CEO and co-founder of Tipe and Onespeed. Priorly he was an experienced engineer in Silicon Valley and SF working with some of the top tech companies. He's known in the JS community for his contributions to Angular including popular open source projects, conference talks, and courses.",

        ),
    },
    {
        ...new teacher(
            "Steve Kinney",
            "Twilio",
            "https://static.frontendmasters.com/assets/teachers/kinney/thumb@2x.webp",
            "Steve is the front-end architect at Twilio. He is the director emeritus and founder of the front-end engineering program at the Turing School for Software and Design in Denver, Colorado — a non-profit developer training program. In a previous life, Steve was a New York City public school teacher. He taught special education and web development in Manhattan, Brooklyn, and Queens. He currently lives in Denver with his rambunctious six-year-old.",

        ),
    },
    {
        ...new teacher(
            "Jon Kuperman",
            "Cloudflare",
            "https://static.frontendmasters.com/assets/teachers/kuperman/thumb@2x.webp",
            "Currently a developer advocate working on Cloudflare's Workers and Pages. Jon is passionate about Open Source Software and the open web. He spends his free time learning, reading, blogging, and teaching.",

        ),
    },
    {
        ...new teacher(
            "Richard Feldman",
            "NoRedInk",
            "https://static.frontendmasters.com/assets/teachers/feldman/thumb@2x.webp",
            "Richard is the author of “Elm in Action” from Manning Publications. He's written a lot of JavaScript, dating back to the pre-jQuery days, but since 2015 has spent more time writing Elm and Rust. Over the years he's created several popular Elm packages, including elm-css, elm-test, and elm-json-decode-pipeline; the JavaScript seamless-immutable library; and a fully-featured programming language compiler in Rust. He hosts both the Philadephia Elm Meetup and the Philadelphia Rust Meetup.",

        ),
    },
    {
        ...new teacher(
            "Jem Young",
            "Netflix",
            "https://static.frontendmasters.com/assets/teachers/young/thumb@2x.webp",
            "Jem is a Software Engineer in San Francisco. When he's not watching it, you can find him at Netflix where he works on the User Interface platform team. In his free time, he hassles other engineers to write more tests.",

        ),
    },
    {
        ...new teacher(
            "Todd Gardner",
            "TrackJS",
            "https://static.frontendmasters.com/assets/teachers/gardner/thumb@2x.webp",
            "Todd Gardner is a curmudgeonly developer who believes that old solutions are often better than new ones. He advocates for simple designs and balancing complexity against risk. He is the co-founder of TrackJS and Request Metrics, where he helps thousands of developers build better web applications.",

        ),
    },
    {
        ...new teacher(
            "Burke Holland",
            "Microsoft",
            "https://static.frontendmasters.com/assets/teachers/holland/thumb@2x.webp",
            "Burke Holland is a front-end developer living in Nashville, TN; the greatest city in the world. He enjoys JavaScript a lot because it's the only way he Node to Express himself. Get it? Never mind. Burke blogs only slightly better than he codes and definitely not as good as he talks about himself in the third person. Burke works on the Azure team at Microsoft on behalf of JavaScript developers everywhere.",

        ),
    },
    {
        ...new teacher(
            "Ayşegül Yönet",
            "Microsoft",
            "https://static.frontendmasters.com/assets/teachers/yonet/thumb@2x.webp",
            "Ayşegül is a Senior Developer Advocate at Microsoft Azure and the Co-chair of the W3C Immersive Web Working Group. She is into spatial computing, WebXR and Mixed Reality.",

        ),
    },
    {
        ...new teacher(
            "Ben Hong",
            "Netlify",
            "https://static.frontendmasters.com/assets/teachers/hong/thumb@2x.webp",
            "Ben Hong is a Vue.js Core Team member and a Senior Developer Experience (DX) Engineer at Netlify. He is also a developer / psychologist / educator hybrid who is passionate about creating products that help to empower people with new skills and knowledge regardless of their background.",

        ),
    },
    {
        ...new teacher(
            "Anjana Vakil",
            "Observable",
            "https://static.frontendmasters.com/assets/teachers/vakil/thumb@2x.webp",
            "Anjana suffers from a chronic case of curiosity, which led her from philosophy to English teaching to computational linguistics to software development. As a developer/advocate at Observable, these days she codes & teaches from her home base in San Francisco - but in the pre-pandemic-times, you could also often find her speaking at events around the world. She loves to share the joy of programming and advocate for a more diverse, equitable, and ethical tech industry. Ask her about the Recurse Center & Outreachy, she's an alumna of both",

        ),
    },
    {
        ...new teacher(
            "Lukas Ruebbelke",
            "Venmo",
            "https://static.frontendmasters.com/assets/teachers/ruebbelke/thumb@2x.webp",
            "Lukas Ruebbelke is a Principle Engineer at Venmo, where he has the greatest job in the world. Lukas gets to spend his entire time mentoring and training developers to be effective and build things that people care about. Lukas is also a Google Developer Expert, published author, conference speaker, event organizer, etc. His spirit animal is a red bull.",

        ),
    },
    {
        ...new teacher(
            "David Khourshid",
            "Microsoft",
            "https://static.frontendmasters.com/assets/teachers/khourshid/thumb@2x.webp",
            "David Khourshid is a Florida-based web developer for Microsoft, a tech author, and speaker. Also a fervent open-source contributor, he is passionate about JavaScript, CSS, animation, innovative user interfaces, and cutting-edge front-end technologies. When not behind a computer keyboard, he's behind a piano keyboard or traveling.",

        ),
    },
    {
        ...new teacher(
            "Nina Zakharenko",
            "Microsoft",
            "https://static.frontendmasters.com/assets/teachers/zakharenko/thumb@2x.webp",
            "Nina Zakharenko is a software engineer with over a decade of experience. She currently focuses on Python at Microsoft on the Cloud Developer Advocacy team. In the past, she's written software for satellite control computers at HBO, code that's helped people connect over their passions at Meetup, and implemented time-wasting features on Reddit. Nina loves teaching developers and has spoken at conferences like PyCon Russia, EuroPython, and DjangoCon in the US and internationally. In her spare time, she enjoys snowboarding and hiking, drinking scotch, and tinkering with hardware, LEDs, and wearable electronics from her home base in Portland, OR.",

        ),
    },
    {
        ...new teacher(
            "Sarah Drasner",
            "Netlify",
            "https://static.frontendmasters.com/assets/teachers/drasner/thumb@2x.webp",
            "Sarah Drasner is an award-winning Speaker, VP of Developer Experience at Netlify, Vue core team member, and Staff Writer at CSS-Tricks. Sarah is formerly Principal Lead of Emerging Markets, Cloud Advocates at Microsoft and Manager of UX & Engineering at Trulia/Zillow Group. She's the author of SVG Animations from O'Reilly and has given Frontend Masters workshops. Sarah is a co-organizer of ConcatenateConf, a free conference for Nigerian and Kenyan developers. Sarah is also the co-founder of Web Animation Workshops, with Val Head. She has worked for 15 years as a web developer, and at points worked as a Scientific Illustrator and a Professor in the Greek Islands.",

        ),
    },
    {
        ...new teacher(
            "Jerome Hardaway",
            "Vets Who Code",
            "https://static.frontendmasters.com/assets/teachers/hardaway/thumb@2x.webp",
            "Jerome Hardaway is a Google Developer Expert (Web), Twilio Champion, Developer Advocate for Quicken Loans, Javascript Engineer and Geek At Arms (Founder and Executive Director) of Vets Who Code, a 501(c)3 veteran-led charitable non-profit dedicated to filling the nations technical skills gap with early-stage transitioning veterans and military spouses through remote software development training",

        ),
    },
    {
        ...new teacher(
            "Shirley Wu",
            "Data Sketches",
            "https://static.frontendmasters.com/assets/teachers/wu/thumb@2x.webp",
            "Shirley Wu is currently a freelance consultant specializing in data visualization. Previously, she was a software engineer at security company Illumio working on an interesting part of the product called Illumination, a visualization of application traffic and visual tools for writing security policy on top of them. Most recently, Shirley has worked on An Interactive Visualization of Every Line in Hamilton, The Political Brain, Four Years of Vacations in 20,000 colors, and film flowers, and is part of the ongoing data sketches project. She is a co-organizer of the Bay Area D3.js User Group as well as the annual d3.unconf, and has spoken about her work at OpenVis Conf, BackboneConf, and various meetups.",

        ),
    },
    {
        ...new teacher(
            "Divya Tagtachian",
            "Netlify",
            "https://static.frontendmasters.com/assets/teachers/tagtachian/thumb@2x.webp",
            "Divya is a developer who is passionate about open source and the web. She is currently a developer experience engineer at Netlify, and believes that there is a better workflow for building and deploying sites that doesn't require a server—ask her about the JAMstack. You will most likely find her in the sunniest spot in the room with a cup of tea and puns on hand.",

        ),
    },
    {
        ...new teacher(
            "Rich Harris",
            "New York Times",
            "https://static.frontendmasters.com/assets/teachers/harris/thumb@2x.webp",
            "Rich Harris is an Emmy award-winning visual journalist and software developer on the New York Times graphics team. He is the creator of several widely-used open source projects including Rollup, the module bundler used by the JavaScript ecosystem's most popular libraries.",

        ),
    },
    {
        ...new teacher(
            "Emma Bostian",
            "Spotify",
            "https://static.frontendmasters.com/assets/teachers/bostian/thumb@2x.webp",
            "Emma Bostian is an American Software Engineer at Spotify in Stockholm, Sweden. She is also an instructor at Egghead.io, co-host of the Ladybug Podcast, and panelist on JSParty.",

        ),
    },
    {
        ...new teacher(
            "Brenna Martenson",
            "Highwing.io",
            "https://static.frontendmasters.com/assets/teachers/martenson/thumb@2x.webp",
            "Brenna is a front end engineer at Highwing.io, a startup working to digitize the insurance industry through open data and analytics. Prior to Highwing Brenna built complex email templating engines at SendGrid, and helped build the front-end program at the Turing School of Software and Design where she was also a lead instructor. Before tech, she taught English in France and developed a healthy addiction to travel as a flight attendant for Delta Airlines. Brenna currently lives in Denver, CO, but can still be seen regularly submitting PRs from around the world.",

        ),
    },
    {
        ...new teacher(
            "Brian Lonsdorf",
            "Salesforce",
            "https://static.frontendmasters.com/assets/teachers/lonsdorf/thumb@2x.webp",
            "Brian Lonsdorf is a Architect at Salesforce UX R&D. He is author of the Mostly Adequate Guide to Functional Programming, a regular speaker at conferences, and co-organizer of the SF JavaScript Meetup. He has a passion for principled programming, machine learning, and futuristic user interfaces.",

        ),
    },
    {
        ...new teacher(
            "Vadim Karpusenko",
            "Microsoft",
            "https://static.frontendmasters.com/assets/teachers/karpusenko/thumb@2x.webp",
            "Vadim holds a PhD in computational biophysics on the free energy and stability of helical secondary structures of proteins. He is co-author of the book, “Parallel Programming and Optimization with Intel® Xeon Phi™ Coprocessors”, and was lead instructor of a developer training course of the same name. Before joining Microsoft, Vadim was working at Intel Corporation as a Machine Learning/Deep Learning/AI and Modern Code (aka Parallel programming and Optimization) Technical Evangelist. His research interests are in the areas of physical modeling with HPC clusters, highly parallel architectures, code optimization; machine learning and AI.",

        ),
    },
    {
        ...new teacher(
            "Will Sentance",
            "Codesmith",
            "https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.webp",
            "Will Sentance is co-founder and CEO at Codesmith- a software engineering and machine learning residency based in Los Angeles, New York, and Oxford. He is the creator of Icecomm, the most famous developer platform for P2P video and data communication. Before Codesmith, Will was CEO at Ownly and a Software Engineer at Gem. Will graduated from Oxford University and Harvard University.",

        ),
    },
    {
        ...new teacher(
            "Jason Rodriguez",
            "Litmus",
            "https://static.frontendmasters.com/assets/teachers/rodriguez/thumb@2x.webp",
            "Jason is designer and writer advocating for email, the open web, accessibility, and inclusion. As the sole evangelist at Litmus, Jason teaches others how to create better email marketing campaigns through strategy, copywriting, design, and development. Jason is the author of multiple books on email, speaks at industry events on a variety of topics, and writes for publications like the Litmus blog, A List Apart, and CSS-Tricks.",

        ),
    },
    {
        ...new teacher(
            "Marcy Sutton",
            "Gatsby",
            "https://static.frontendmasters.com/assets/teachers/sutton/thumb@2x.webp",
            "Marcy Sutton is the Head of Learning at Gatsby, a startup creating fast, accessible websites and web apps while building a strong community. Previously, she was a Developer Advocate on the axe-core team at Deque Systems, developing tools for web accessibility testing. In 2016, O'Reilly gave Marcy a Web Platform Award for her work in accessibility. When away from the keyboard, Marcy can be found exploring mountains, playing with her dog and cat, and cooking as self care.",

        ),
    },
    {
        ...new teacher(
            "Kyle Simpson",
            "You Don't Know JS",
            "https://static.frontendmasters.com/assets/teachers/simpson/thumb@2x.webp",
            "Kyle Simpson likes to explore JS and FP techniques. He's written books, taught, and spoken publicly. He's currently helping build a culture of engineering excellence for his employer. Developers have watched over 700,000 hours of Kyle's courses here on Frontend Masters!",

        ),
    },
    {
        ...new teacher(
            "Bianca Gandolfo",
            "Thumbtack",
            "https://static.frontendmasters.com/assets/teachers/gandolfo/thumb@2x.webp",
            "Bianca is a software engineer at Thumbtack and the host of Code and Coffee, an online community for busy software engineers to explore and achieve what is next for them in their careers.",

        ),
    },
    {
        ...new teacher(
            "Jason Pamental",
            "Isovera",
            "https://static.frontendmasters.com/assets/teachers/pamental/thumb@2x.webp",
            "Jason Pamental is Senior Director of Design & Technical Strategy at Isovera, author of the 'Responsive Typography' book from O'Reilly, overall web & typography nerd who specializes in being a generalist. He's worked on the web since 1994 in a range of capacities, having led creative and technical efforts for major universities, NFL and America's Cup teams, Fortune 25 corporations and others. He also co-founded ResponsiveBootcamp.com, speaks about design at conferences around the world.",

        ),
    },
    {
        ...new teacher(
            "Sean Larkin",
            "Microsoft",
            "https://static.frontendmasters.com/assets/teachers/larkin/thumb@2x.webp",
            "Sean Larkin is Technical Program Manager at Microsoft for Microsoft Edge. Sean is also member of Webpack and Angular core teams.",

        ),
    },
    {
        ...new teacher(
            "Estelle Weyl",
            "Mozilla Developer Network",
            "https://static.frontendmasters.com/assets/teachers/weyl/thumb@2x.webp",
            "Estelle currently writes for MDN Developer Network and organizes the Perf Matters Conference. She has consulted for Kodak Gallery, SurveyMonkey, Samsung, Yahoo, Visa, and Apple, among others. Estelle is the author of Mobile HTML5 and co-authored CSS The Definitive Guide, and HTML5 and CSS3 for the Real World.",

        ),
    },
    {
        ...new teacher(
            "Evan You",
            "Creator of Vue.js",
            "https://static.frontendmasters.com/assets/teachers/you/thumb@2x.webp",
            "Evan is an independent open source developer, designer, and creative coder. He is the author of Vue.js, a JavaScript framework for building modern web interfaces with reactive components. In the past Evan worked at Meteor Development Group as a core developer, and before that spent two years at Google Creative Lab hacking on experimental UI prototypes for various Google products.",

        ),
    },
    {
        ...new teacher(
            "Jafar Husain",
            "Netflix",
            "https://static.frontendmasters.com/assets/teachers/husain/thumb@2x.webp",
            "Jafar Husain is the Cross-Team Technical Lead for the Netflix UI's. He is the architect of Netflix's UI data platform, and specializes in building reactive, event-driven systems. Jafar has trained hundreds of developers to build event-driven systems in JS. He is the Netflix representative on the JavaScript standards committee and is actively working to evolve JavaScript.",

        ),
    },
    {
        ...new teacher(
            "Rachel Nabors",
            "Rachel Nabors, LLC",
            "https://static.frontendmasters.com/assets/teachers/nabors/thumb@2x.webp",
            "Rachel Nabors began telling stories online as a teenager with her award-winning webcomics. Her love of web technologies transformed into a career in front-end development, where she has worked with Mozilla, the W3C, and Microsoft to build the web forward. She wrote about the science and challenges of using animation to make great user experiences in her book, Animation at Work.",

        ),
    },
    {
        ...new teacher(
            "Justine Jordan",
            "Litmus",
            "https://static.frontendmasters.com/assets/teachers/jordan/thumb@2x.webp",
            "Justine Jordan is VP of Marketing at Litmus. Justine is an email design critic and fervent advocate for table-based layouts. A regular industry speaker, she also organizes the world's only conference for people who make email.",

        ),
    },
    {
        ...new teacher(
            "Christian Nwamba",
            "AWS",
            "https://static.frontendmasters.com/assets/teachers/nwamba/thumb@2x.webp",
            "Christian Nwamba is a Nigerian Software Developer and Developer Advocate at AWS. He codes, writes, teaches, speaks and organizes developer events.",

        ),
    },
    {
        ...new teacher(
            "Dave Rupert",
            "Paravel",
            "https://static.frontendmasters.com/assets/teachers/rupert/thumb@2x.webp",
            "I'm Dave Rupert, lead developer at Paravel. I co-host ShopTalk, an award-winning sound effects podcast that also covers web development. I'm a dad to two wonderful kids. I live in Austin, TX; the best damn city, in the best damn state, in the best damn country, in the whole damn world.",

        ),
    },
    {
        ...new teacher(
            "David East",
            "Google",
            "https://static.frontendmasters.com/assets/teachers/east/thumb@2x.webp",
            "Senior Developer Advocate of Firebase at Google. Big on web and design!",

        ),
    },
    {
        ...new teacher(
            "Maximiliano Firtman",
            "Independent Consultant",
            "https://static.frontendmasters.com/assets/teachers/firtman/thumb@2x.webp",
            "Max Firtman works as an independent free-lance consultant. He is a mobile + web developer, trainer, speaker, and writer. He has authored many books, including Programming the Mobile Web and High Performance Mobile Web published by O'Reilly Media. He is a frequent speaker at conferences worldwide and he has been widely recognized for his work in the mobile-web community. He teaches mobile (Android & iOS), HTML5, PWA and web performance trainings. He has been working in the Web since 1996 and in the mobile app space since 2001.",

        ),
    },
    {
        ...new teacher(
            "Nick Pettit",
            "BUCK",
            "https://static.frontendmasters.com/assets/teachers/pettit/thumb@2x.webp",
            "Hi, I'm Nick Pettit! I'm a game developer with shipped titles on PlayStation and PlayStation VR, PC/Mac, Oculus Rift, HTC Vive, iPhone, Android, Merge Cube, and more. Presently, I'm the Senior Unity Developer at BUCK, an award-winning creative company that makes art, design, and technology.",

        ),
    },
    {
        ...new teacher(
            "Tara Manicsic",
            "Netlify",
            "https://static.frontendmasters.com/assets/teachers/manicsic/thumb@2x.webp",
            "Tara Z. Manicsic is a lifelong student, teacher, and maker. She has spent her career using JavaScript on both back-end and front-end to create applications. A Developer Experience Engineer for Netlify, Google Developer Expert, and international technical speaker, she focuses on conveying the codebase she has learned.",

        ),
    },
    {
        ...new teacher(
            "Umar Hansa",
            "Modern Dev Tools",
            "https://static.frontendmasters.com/assets/teachers/hansa/thumb@2x.webp",
            "Umar is a web developer and Google Developer Expert based in London, with a focus on writing tips & tutorials for the modern web. He blogs about technology and tweets web tips.",

        ),
    },


]

let oldTeachers = [
    {
        ...new teacher(
            "Kent C. Dodds",
            "Professional Trainer",
            "https://static.frontendmasters.com/assets/teachers/dodds/thumb@2x.webp",
            "Kent C. Dodds is a world renowned speaker, teacher, and trainer and he's actively involved in the open source community as a maintainer and contributor of hundreds of popular npm packages. Kent is the creator of TestingJavaScript.com and he's an instructor on egghead.io and Frontend Masters. He's also a Google Developer Expert. Kent is happily married and the father of four kids. He likes his family, code, JavaScript, and React.",
        )
    },
    {
        ...new teacher(
            "Kristina Halvorson",
            "Brain Traffic",
            "https://static.frontendmasters.com/assets/teachers/halvorson/thumb@2x.webp",
            "Kristina Halvorson is widely recognized as one of the most important voices in content strategy. She is the owner of Brain Traffic, a content strategy agency; the author of Content Strategy for the Web; and the founder of the Confab content strategy conferences. Kristina speaks worldwide about content strategy, educating and inspiring audiences across every industry. She lives in St. Paul, Minnesota with her two kids, who often get quoted on Twitter.",
        )
    },
    {
        ...new teacher(
            "Zac Gordon",
            "JS for WordPress",
            "https://static.frontendmasters.com/assets/teachers/gordon/thumb@2x.webp",
            "Zac Gordon is a professional educator, currently working on the JavaScript for WordPress Master Course. Previously, Zac taught WordPress for Treehouse. He has years of experience teaching WordPress and JavaScript at high schools, colleges, bootcamps and online learning sites. In addition to teaching, Zac also runs Web Hosting for Students, one of the world's largest hosting companies dedicated to students and teachers.",
        )
    },
    {
        ...new  teacher(
            "James Halliday",
            "Substack",
            "https://static.frontendmasters.com/assets/teachers/halliday/thumb@2x.webp",
            "James uses the web and the javascript ecosystem to build p2p offline tools, maps, and webgl visuals. He is the author of browserify and a prominent member of the Node community with more than 750 packages at npm.",
        )
    },
    {
        ...new  teacher(
            "Ryan Chenkie",
            "Auth0",
            "https://static.frontendmasters.com/assets/teachers/chenkie/thumb@2x.webp",
            "Ryan Chenkie is a full-stack JavaScript developer, trainer, and Google Developer Expert. While Ryan dabbles with a lot of technologies, his go-to for every serious project is his first love — Angular. He teaches at Angularcasts and Frontend Masters, builds apps for companies as a consultant, and contributes to open source with libraries such as angular2-jwt. Formerly at Auth0, he's a fanatic about application security and has written a book on the topic called Securing Angular Applications.",
        )
    },
    {
        ...new  teacher(
            "Kevin Whinnery",
            "Twilio Node Module",
            "https://static.frontendmasters.com/assets/teachers/whinnery/thumb@2x.webp",
            "Kevin Whinnery is Lead Engineer at Twilio.org. Kevin is the author and maintainer of Twilio's official node.js module. Kevin is also the founder and co-organizer of JavaScriptMN, one of Minnesota's largest and most active technical user groups.",
        )
    },
    {
        ...new  teacher(
            "Douglas Crockford",
            "Paypal",
            "https://static.frontendmasters.com/assets/teachers/crockford/thumb@2x.webp",
            "Douglas Crockford is an American computer programmer and entrepreneur who is best known for his ongoing involvement in the development of the JavaScript language and for having popularized the data format JSON (JavaScript Object Notation).",
        )
    },
    {
        ...new  teacher(
            "Henrik Joreteg",
            "Ampersand.js",
            "https://static.frontendmasters.com/assets/teachers/joreteg/thumb.webp",
            "Henrik Joreteg is an Independent JavaScript Consultant, Writer, Speaker, and Trainer. Henrik was a Partner and lead JS developer at &yet, where he wrote scores of JS apps dozens of different ways. At &yet, he provided consulting and training on JavaScript and HTML5 applications. Having released nearly 100 JavaScript libraries, Henrik believes in open source and wants to help developers push the web to the next level.",
        )
    },
    {
        ...new  teacher(
            "Chris Mather",
            "Lively, Inc.",
            "https://static.frontendmasters.com/assets/teachers/mather/thumb@2x.webp",
            "Chris Mather is CTO of Lively, Inc. Chris also runs eventedmind.com, a company dedicated to Meteor and JavaScript education.",
        )
    },
    {
        ...new  teacher(
            "Justin Searls",
            "Test Double",
            "https://static.frontendmasters.com/assets/teachers/searls/thumb@2x.webp",
            "Justin Searls has two professional passions, writing great software, and sharing what he's learned to help others write even greater software. He helped start a software agency called Test Double, whose crack team of double agents solve complex problems with clean and simple solutions.",
        )
    },
    {
        ...new  teacher(
            "Jay Stakelon",
            "Facebook",
            "https://static.frontendmasters.com/assets/teachers/stakelon/thumb@2x.webp",
            "Jay Stakelon is a Product Designer at Facebook. Jay is like a Swiss army knife for digital products. He's been designing with code for over 10 years with expertise in product management, user experience design and software development. He was the VP of Product Design and a founding employee at Fullscreen in Los Angeles, where he manages a team of product designers who design, prototype, test and build apps for video content creators and their fans. He also has examples and presentations highlighted on the Framer.js site, and created Frameless, an iOS app to help Framer.js users preview prototypes directly on their devices.",
        )
    },
    {
        ...new  teacher(
            "Ryan Florence",
            "React Training",
            "https://static.frontendmasters.com/assets/teachers/florence/thumb@2x.webp",
            "Ryan is the creator and co-author of React Router, and a handful of other React components. He works as the Frontend Infrastructure lead at Instructure.",
        )
    },
    {
        ...new  teacher(
            "Justin Meyer",
            "Bitovi",
            "https://static.frontendmasters.com/assets/teachers/meyer/thumb@2x.webp",
            "Justin is the CEO of Bitovi and the lead author of CanJS, JavaScriptMVC, jQuery++, FuncUnit, and StealJS. He likes closures, politics and hip-hop dancing.",
        )
    },
    {
        ...new  teacher(
            "Jonathan Snook",
            "Snook.ca Web Development, Inc.",
            "https://static.frontendmasters.com/assets/teachers/snook/thumb@2x.webp",
            "Jonathan writes about tips, tricks, and bookmarks on his blog at Snook.ca. He has also written for A List Apart, 24ways, and .net magazine, and has co-authored two books, The Art and Science of CSS and Accelerated DOM Scripting. He has also authored and received world-wide acclaim for the self-published book, Scalable and Modular Architecture for CSS, sharing his experience and best practices on CSS architecture.",
        )
    },
    {
        ...new  teacher(
            "Aaron Frost",
            "SaltStack",
            "https://static.frontendmasters.com/assets/teachers/frost/thumb@2x.webp",
            "Aaron Frost is Principal Engineer at SaltStack. He was part of the Domo, Inc front-end team bringing fun, new features to the app while shoring up some of the technical debt incurred in previous iterations. Aaron is also an O'Reilly author, currently writing two books about the next version of JavaScript, ES6. The first book is for management, explaining the reasons why they should help their teams use the latest version of JavaScript. The second book is a field guide for the new ES6 API that is currently being working on by the TC39.",
        )
    },
    {
        ...new  teacher(
            "Mark Boas",
            "jPlayer",
            "https://static.frontendmasters.com/assets/teachers/boas/thumb@2x.webp",
            "Mark Boas is Co-Founder and ex-CTO of Trint Limited, Founder of Hyperaudio Inc and Project Coordinator of jPlayer the HTML5 Media Library. Mark is a Web Developer, Project Manager and CTO specialising in web media and speech-to-text. Actively researching, making, teaching, blogging and talking about emerging web technologies. He was the 2012 Knight-Mozilla OpenNews fellow with Al Jazeera, focussing on Hyperaudio and open media.",
        )
    },
    {
        ...new  teacher(
            "David Mosher",
            "Test Double",
            "https://static.frontendmasters.com/assets/teachers/mosher/thumb@2x.webp",
            "David Mosher is a Front-End Engineer at Test Double. He loves building great JavaScript web experiences using modern tools like Grunt and Lineman.",
        )
    },
    {
        ...new  teacher(
            "Ian Johnson",
            "Bay Area D3 and Tributary",
            "https://static.frontendmasters.com/assets/teachers/johnson/thumb@2x.webp",
            "Ian Johnson is a User Experience Engineer at Google. He also organizes of Bay Area d3, starts with SVG and then dives deep into d3 including DOM manipulation, categorical and quantitative scales, axis, brushes, color schemes, events and histograms. Ian likes to make sense of data by exploring it visually with D3.js!",
        )
    },
    {
        ...new  teacher(
            "Sam Breed",
            "Credit Karma",
            "https://static.frontendmasters.com/assets/teachers/breed/thumb@2x.webp",
            "Sam Breed is a Staff Engineer at Credit Karma. He was a core contributor to Backbone and the CTO of Quick Left.",
        )
    },
    {
        ...new  teacher(
            "Garann Means",
            "Brandwatch",
            "https://static.frontendmasters.com/assets/teachers/means/thumb@2x.webp",
            "Garann Means is a Senior Engineer and Vizia Developer Relations at Brandwatch. Garann was Senior Front-End Engineer at Etsy, specializing in Javascript.",
        )
    },
    {
        ...new  teacher(
            "Bill Scott",
            "PayPal",
            "https://static.frontendmasters.com/assets/teachers/scott/thumb@2x.webp",
            "Bill Scott leverages his experience as Director of UI Engineering at Netflix and now Sr. Director at PayPal to teach us concepts behind delivering great experiences in the interfaces we build. He applies lean startup principles to UI engineering in order to teach how to develop an effective process, team and lean tech stack to acheive rapid experimentation and learning in the products we build.",
        )
    },
    {
        ...new  teacher(
            "Ben Callahan",
            "Sparkbox",
            "https://static.frontendmasters.com/assets/teachers/callahan/thumb@2x.webp",
            "Ben is President of Sparkbox and co-founder of the Build Responsively workshop series. He is a pioneer in the field of responsive design and device-tailored experiences.",
        )
    },
    {
        ...new  teacher(
            "Misko Hevery",
            "AngularJS Creator",
            "https://static.frontendmasters.com/assets/teachers/hevery/thumb@2x.webp",
            "Misko Hevery, the creator of AngularJS, is a Senior Computer Scientist at Google. Before working at Google, Misko was a Sr. Computer Scientist at Adobe and Sun Microsystems.",
        )
    },
    {
        ...new  teacher(
            "Christopher Schmitt",
            "Frontend Masters",
            "https://static.frontendmasters.com/assets/teachers/schmitt/thumb@2x.webp",
            "Christopher Schmitt is the VP of Publishing at Frontend Masters. Web developer since 1993, he is the author of HTML5 Cookbook, CSS Cookbook, and more.",
        )
    },
    {
        ...new  teacher(
            "Scott Gonzalez",
            "Clipper Magazine",
            "https://static.frontendmasters.com/assets/teachers/gonzalez/thumb@2x.webp",
            "Scott is the development lead on jQueryUI. He co-authored the jQuery Cookbook and publishes numerous tutorials on the web.",
        )
    },
    {
        ...new  teacher(
            "Karl Swedberg",
            "Learning jQuery",
            "https://static.frontendmasters.com/assets/teachers/swedberg/thumb@2x.webp",
            "Karl is a member of the jQuery team and maintainer of the jQuery API site. He co-authored several books on jQuery.",
        )
    },
]


export {teachersData, oldTeachers} ;