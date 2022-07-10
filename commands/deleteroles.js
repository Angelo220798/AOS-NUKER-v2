exports.run = async (client, msg, args) => { msg.delete()

    await msg.guild.roles.map(r => r.delete().catch(() => {}))
}
