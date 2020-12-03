//declare requirements
const Discord = require("discord.js");
const config = require("./config.json");
const sqlite3 = require("sqlite3");

let db = new sqlite3.Database('./database/data.db', sqlite3.OPEN_READWRITE);

//declare new discord client
const client = new Discord.Client();

//set prefix for analice commands
const prefix = "+";

//read each message in server
client.on("message", function (message) {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;// read if message start with prefix
    
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    /*============================================================================
                                        COMMANDS
    ==============================================================================*/
    //------------------------------------------------------------------------------> System help
    if (command.toLowerCase() === "help") {
        const user = message.author.username;
        const data = "**COMANDOS**\n**normal**\n```+help``` > Sistema de ayuda.\n```+linkstart``` > Entrar en Player Mode.\n```+profile``` > Perfil del jugador.\n**combates**\n```+combat``` > Solicitar duelo a un jugador.\n```+combatinfo``` > información sobre el sistema de combates.\n";
        const embd = new Discord.MessageEmbed().setTitle('Hola ' + user + ', estas en el sistema de ayuda.')
            .setFooter(`Player ID: ${message.author.id}`)
            .setDescription(data + "\n>> Reporta un problema al [desarrollador](https://github.com/Tomvargas/underworld/issues)")
            .setColor('0x30c567');
        message.channel.send(embd);
    }
    //------------------------------------------------------------------------------> System avatar
    else if (command.toLowerCase() === "avatar") {
        const avatar = new Discord.MessageAttachment(message.author.displayAvatarURL());
        message.channel.send(avatar);
    }
    //------------------------------------------------------------------------------> System register
    else if (command.toLowerCase() === "linkstart") {
        const userid = message.author.id;
        const user = message.author.username;
        const imgurl = message.author.displayAvatarURL();
        //insertar datos a la tabla
        db.all(`SELECT id FROM skills`, function (err, skill) {
            // If row not found, create it
            if (err) {
                console.log(`error: ` + err);
            }
            else{

                db.get(`SELECT * FROM armors WHERE id='001'`, function (err, arm) {
                    // If row not found, create it
                    if (err) {
                        console.log(`error: ` + err);
                    }
                    else
                    {

                        db.get(`SELECT * FROM weapons WHERE id='200'`, function (err, wea) {
                            // If row not found, create it
                            if (err) {
                                console.log(`error: ` + err);
                            }
                            else
                            {
                                db.run('INSERT INTO players (id, name, deaths, wins, ph, lvl, coins, weaponID, armorID, skill1, skill2, skill3, atk, def, bagID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [String(userid), String(user), 0, 0, 100, 1, 0, String(wea.id), String(arm.id), String(skill.id), String(skill.id), String(skill.id), wea.atk, arm.def, userid], (err) => {
                                    if (err) {
                                        const embd = new Discord.MessageEmbed().setTitle('Hola ' + user + ', ya estas en player mode.')
                                            .setFooter('Mas info "System help"');
                                        message.channel.send(embd);
                                    }
                                    else {
                                        const embed = new Discord.MessageEmbed()
                                            .setTitle('=================\n ' + user + ' \n=================')
                                            .setColor(0x20c9e4).setDescription('Ya puedes usar todos los comandos')
                                            .setFooter('Mas info "System help"').setThumbnail('https://raw.githubusercontent.com/Tomvargas/CHATBOT/master/graphics/ezgif-6-b09b91b80a07.gif');
                                        message.channel.send(embed);
                                    }
                                })
                            }
                        });                        
                    }
                });               
            }                
        });
        
    }
    //------------------------------------------------------------------------------> System profile
    else if (command.toLowerCase() === "profile") {
        const userid = message.author.id;
        const user = message.author.username;
        const imgurl = message.author.displayAvatarURL();

        db.get(`SELECT * FROM players WHERE id=${userid}`,function (err, row) {
                // If row not found, create it
                if (err) {
                    const embd = new Discord.MessageEmbed().setTitle('Hola ' + user + ', debes estar en player mode.')
                        .setFooter('Mas info "System help"');
                    message.channel.send(embd);
                }
                else
                {
                    const data = `:flame: Victorias: ${row.wins}\n:skull: Muertes: ${row.deaths}\n**<<estatus>>**\n:fleur_de_lis: Nivel: ${row.lvl}\n:crossed_swords: Atack:  ${row.atk}\n:shield: Defence:  ${row.def}\n**<<equipamiento>>**\nArma id:  ${row.weaponID}\nArmadura id:  ${row.armorID}\n=================\n:moneybag: Coins:  ${row.coins}`;
                    const embed = new Discord.MessageEmbed()
                        .setTitle('=================\n' + ':ninja:  ' + row.name + '\n=================')
                        .setColor(0x20c9e4).setDescription(data)
                        .setThumbnail(imgurl).setFooter(`.............................\nPlayer ID: ${row.id}`);
 
                    // Send the embed to the same channel as the message
                    message.channel.send(embed);
                }
            });
        

        
    }
    //------------------------------------------------------------------------------> System command
    
});

client.login(config.BOT_TOKEN);