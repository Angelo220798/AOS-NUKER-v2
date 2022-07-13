const discord = require('discord.js')

exports.run = async (client, message, args) => {
    let spamMessage = args.slice(0).join(" ");
    message.delete();

        message.channel.sendMessage("https://cdn.discordapp.com/attachments/975547256373653514/996586090347630642/unknown.png", spamMessage)

    }

