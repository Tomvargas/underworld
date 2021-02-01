const Discord = require("discord.js");
const sqlite3 = require("sqlite3");
let db = new sqlite3.Database('./database/data.db', sqlite3.OPEN_READWRITE);
module.exports = {
	name: 'linkstart',
	description: 'linkstart',
	execute(message, args) {
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
                                        const embd = new Discord.MessageEmbed().setTitle('Hey ' + user + ', ya estás registrad@.')
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
	},
};