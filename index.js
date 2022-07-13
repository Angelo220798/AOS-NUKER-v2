const { Client } = require('discord.js-selfbot-v11'),
    Enmap = require('enmap'),
    fs = require('fs'),
    colors = require('colors'),
    center = require('center-align');

const rpc = require('discord-rpc'),
    rpcClient = new rpc.Client({ transport: 'ipc' })

const client = new Client(),
    { token, prefix } = require('./config.json')

process.on('unhandledRejection', e => {});
process.on('uncaughtException', e => {});
process.on('uncaughtRejection', e => {});
process.warn = () => {};

client.commands = new Enmap();

client.on("error", (e) => {});
client.on("warn", (e) => {});

(async function() {
    console.clear()
    process.title = 'Loading...'
    console.log(center(`
AOS destroller
                                                        `.yellow, 110));
    client.on('ready', async() => {
        console.clear()
        process.title = `${client.user.username}`
        console.log(`
       

░█████╗░░█████╗░░██████╗  ███╗░░██╗██╗░░░██╗██╗░░██╗███████╗██████╗░  ██╗░░░██╗██████╗░
██╔══██╗██╔══██╗██╔════╝  ████╗░██║██║░░░██║██║░██╔╝██╔════╝██╔══██╗  ██║░░░██║╚════██╗
███████║██║░░██║╚█████╗░  ██╔██╗██║██║░░░██║█████═╝░█████╗░░██████╔╝  ╚██╗░██╔╝░░███╔═╝
██╔══██║██║░░██║░╚═══██╗  ██║╚████║██║░░░██║██╔═██╗░██╔══╝░░██╔══██╗  ░╚████╔╝░██╔══╝░░
██║░░██║╚█████╔╝██████╔╝  ██║░╚███║╚██████╔╝██║░╚██╗███████╗██║░░██║  ░░╚██╔╝░░███████╗
╚═╝░░╚═╝░╚════╝░╚═════╝░  ╚═╝░░╚══╝░╚═════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝  ░░░╚═╝░░░╚══════╝
             
        - Coenctado en: ${client.user.username}
        `.brightCyan)
        console.log(`
                      ╔═══╦╗──╔╦╗─╔╦═══╦═══╗
                      ║╔═╗║╚╗╔╝║║─║╠╗╔╗║╔═╗║
                      ║║─║╠╗╚╝╔╣║─║║║║║║║─║║
                      ║╚═╝║╚╗╔╝║║─║║║║║║╚═╝║
                      ║╔═╗║─║║─║╚═╝╠╝╚╝║╔═╗║
                      ╚╝─╚╝─╚╝─╚═══╩═══╩╝─╚╝
            
        ╔═════════════════════════════════════════════════╗
        ║ ${prefix}nuke      Elimina todos los canales            ║
        ║ ${prefix}banall    Banea a todos los miembros           ║
        ║ ${prefix}raid       Crea canales                        ║
        ║ ${prefix}spam  Hace 200+ pings                          ║
        ║ ${prefix}purge     Hace purge                           ║
        ║ ${prefix}deleteroles Elimina todos los roles            ║
        ║ ${prefix}superbanall  Banea a todos mas rapido          ║
        ║ ${prefix}icono  URL de un imagen                        ║
        ║ ${prefix}lag   Lagea el server con spam                 ║ 
        ║ ${prefix}help   Muestra el menu de ayuda                ║ 
        ╚═════════════════════════════════════════════════╝                           
        `.italic.bold)
    })

    fs.readdir("./commands/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            if (!file.endsWith(".js")) return;
            let props = require(`./commands/${file}`);
            let commandName = file.split(".")[0];
            client.commands.set(commandName, props);
        });
    });

    client.on('message', async(msg) => {
        if (msg.content.indexOf(prefix) !== 0) return;

        const args = msg.content.slice(prefix.length).trim().split(/ +/g),
            command = args.shift().toLowerCase(),
            cmd = client.commands.get(command);

        if (msg.author.id !== client.user.id) return;

        if (!cmd) {
            console.log(` [-] Comando  desconosido.`.red)
        } else {
            cmd.run(client, msg, args)
        }
        console.log(` [+] Comando ejecutado: ${command}`.green)
    })

    client.login(token).catch(() => {
        console.log(`
        Error inesperado
        `.red);
    });

    rpcClient.on('ready', () => {
        rpcClient.request('SET_ACTIVITY', {
            pid: process.pid,
            activity: {
                details: "AOS NUKER",
                state: 'https://github.com/Angelo220798/AOS-NUKER-',
                assets: {
                    large_image: "AOS NUKER",
                    large_text: "AOS NUKER ON TOP"
                },
                buttons: [{
                    label: "Download",
                    url: "https://github.com/Angelo220798/AOS-NUKER-"
                }]
            }
        })
    })

    rpcClient.login({ clientId: '979725137219817502' }).catch(() => {})

})();
