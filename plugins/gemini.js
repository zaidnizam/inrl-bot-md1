const {
	inrl,
	config,
	getJson,
} = require('../lib');


inrl({
	pattern: 'gemini ?(.*)',
	type: "eva",
	desc: "gemini ai",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if (!match) return await message.send("*please give me an query!*");
	const res = await getJson(`${config.BASE_URL}api/ai/gemini?text=${match}&apikey=${config.INRL_KEY}`);
	if (!res.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(res.result);
});
