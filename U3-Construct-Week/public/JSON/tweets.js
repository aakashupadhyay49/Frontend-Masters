class Tweet {
	constructor(name, username, tweet, img) {
		this.name = name;
		this.username = username;
		this.tweet = tweet;
		this.img = img;
		this.tweetLogo =
			"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftous-logos.com%2Fwp-content%2Fuploads%2F2017%2F05%2FTwitter-logo.png&f=1&nofb=1";
	}
}

const tweetsArray = [
	{
		...new Tweet(
			"Kevin Powell",
			"@kevinJPowell",
			"@AlveeAkand @elyktrix @FrontendMasters Yes! @FrontendMasters is amazing. Super talented educators and quality content.",
			"https://pbs.twimg.com/profile_images/1441440444429357056/63gb2BFR_reasonably_small.jpg"
		),
	},
	{
		...new Tweet(
			"AJ Thompson",
			"@hashtagdat817",
			`@acandael @scotups @FrontendMasters @FrontendMasters always delivers great courses. I’ve taken all of @scotups. He teaches in a way that feels like a conversation amongst friends.`,
			"https://pbs.twimg.com/profile_images/1236097570637844486/YNWHjUtv_reasonably_small.jpg"
		),
	},
	{
		...new Tweet(
			"Gustavo Sanchez",
			"@gustavo110",
			`I just completed "JavaScript: The Hard Parts, v2" by @willsentance on @FrontendMasters! https://t.co/fB36c8Ohiv No better resource for full understanding Closures, asynchronous JS and classes and prototypes. Thanks @willsentance`,
			"https://pbs.twimg.com/profile_images/1260995399088824328/Z8L5nVjn_reasonably_small.jpg"
		),
	},
	{
		...new Tweet(
			"Tracey Berg",
			"@bergFulton",
			`OMG @sarah_edo 's Intro to Vue course on @FrontendMasters is *so good*. I've made a few attempts to learn but this is the first time the lightbulb has fully come on. https://t.co/Nwp7QzbyqW`,
			`https://pbs.twimg.com/profile_images/1395830541409206277/DNlCTovQ_reasonably_small.jpg`
		),
	},
	{
		...new Tweet(
			"Marco Monsanto",
			"@marcomonsanto2",
			`Shout-out to @JemYoung and @willsentance for their amazing courses in @FrontendMasters!! Not only the content is amazing but they are also incredibly easy to watch and stay engaged.`,
			"https://pbs.twimg.com/profile_images/1292197630915862529/sf_p2Z8v_reasonably_small.jpg"
		),
	},
	{
		...new Tweet(
			"Sandeep Ranjan",
			"@sandeepranjan_",
			`Thank you @FrontendMasters &amp; @stevekinney for this awesome course State Management with Redux. Finally got confident with Redux.`,
			"https://pbs.twimg.com/profile_images/871324934747955202/ZkbOVm6L_reasonably_small.jpg"
		),
	},
	{
		...new Tweet(
			"Melvin",
			"@melvin_manni",
			"@holtbt React course on @FrontendMasters provided more insight and helped me appreciate React more. I already know some of the things being taught but i had no problem re-learning it. So far that is the best React course I've come across. 💯",
			"https://pbs.twimg.com/profile_images/1367529785224794120/lxHxRj6f_reasonably_small.jpg"
		),
	},
	{
		...new Tweet(
			"Caleb Lovell",
			"@Caleb_Lovell",
			`@holtbt Hey Brian, many thanks for your course on containers and Docker on @FrontendMasters! SO glad to finally grasp how they work. I've lost many hours to failing with Docker because I didn't understand the internals. No more! Looking forward to Intro to Linux. Thanks!!`,
			"https://pbs.twimg.com/profile_images/1119737710057385984/tDO-nNID_reasonably_small.png"
		),
	},
	{
		...new Tweet(
			"Nhu Phan",
			"@nhupna34324",
			`I have recently spent most of my time on @FrontendMasters, 👩🏻‍💻 with the beginning path🤓 , I tend to understand things clearly rather than doing without understanding it. Can't recommend FM enough, its content is amazing, feel like it is tailor-made for me 🤪🤓.`,
			"https://pbs.twimg.com/profile_images/1251337586661974016/eheDTCuo_reasonably_small.jpg"
		),
	},
	{
		...new Tweet(
			"Ricky Garcia",
			"@RickyGarciaDev",
			`I loved, LOVED, Javascript the Hardparts taught by @willsentance on @FrontendMasters. What an incredible deep dive. #FrontEnd #webdevelopment`,
			"https://pbs.twimg.com/profile_images/1261295422061940736/zo-7G1lq_reasonably_small.jpg"
		),
	},
	{
		...new Tweet(
			"Sarah Dayan",
			"@frontstuff",
			`I’m helping out the @algolia API clients team on their journey to learn JavaScript and I can confirm 100% that @getify is the best JavaScript instructor out there, hands down. From @YDKJS to the courses on @FrontendMasters, nobody goes deeper than him into how things work.`,
			"https://pbs.twimg.com/profile_images/977873484759158784/mOItIR7M_reasonably_small.jpg"
		),
	},
	{
		...new Tweet(
			"Brandon Leichty",
			"@brandonleichty",
			`Watching @getify live on @FrontendMasters. Kyle is the 🐐!`,
			"https://pbs.twimg.com/profile_images/1216060474967711746/USR24qdb_reasonably_small.jpg"
		),
	},
];
//export default tweetsArray;
module.exports = tweetsArray;
