const redis = require("redis");
const client = redis.createClient();
(async () => {
	await client.connect();
})();

client.on("connect", () => console.log("::> Redis Client Connected"));
client.on("error", (err) => console.log("<:: Redis Client Error", err));
module.exports = client;
