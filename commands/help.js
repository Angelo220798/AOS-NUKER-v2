const discord = require('discord.js')

exports.run = async (client, message, args) => {
    let spamMessage = args.slice(0).join(" ");
    message.delete();

        message.channel.sendMessage("https://cdn.discordapp.com/attachments/975547256373653514/996182395881537666/Screenshot_2022-07-11_18.32.37.png", spamMessage)

    }

