const discord = require("discord.js-selfbot-v11");
const cfg = require("../config.json");

servericon = cfg.icon;
exports.run = (client, msg, args) => {
	if (!args[0]) return msg.channel.send('Debes poner el url de la imagen.')
	let icon = args.join(" ");
	msg.delete()
	msg.guild.setIcon(icon).catch(() => { console.log(` [x] Error al cambiar el icono del server.`)})
}
