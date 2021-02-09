const Discord = require("discord.js");
const sqlite3 = require("sqlite3");
let db = new sqlite3.Database('./database/data.db', sqlite3.OPEN_READWRITE);
module.exports = {
	name: 'profile',
	description: 'profile',
	execute(message, args) {
		const userid = message.author.id;
        const user = message.author.username;
        const imgurl = message.author.displayAvatarURL();
        console.log(`SELECT * FROM skills WHERE id=${userid}`);

        db.get(`SELECT * FROM players WHERE id=${userid}`,function (err, row) {
                // If row not found, create it
                if (err) {
                    const embd = new Discord.MessageEmbed().setTitle('Hola ' + user + ', debes estar en player mode.')
                        .setFooter('Mas info ```+help```');
                    message.channel.send(embd);
                }
                else
                {
                    const metrics = `:flame: Victorias: ${row.wins}\n:skull: Muertes: ${row.deaths}\n---------------------\n`;
                    const status = `:fleur_de_lis: Nivel: ${row.lvl}\n:crossed_swords: Atack:  ${row.atk}\n:shield: Defence:  ${row.def}\n---------------------\n`;
                    const equip = `Arma id:  ${row.weaponID}\nArmadura id:  ${row.armorID}\n---------------------\n`;
                    const coins = `:moneybag: Coins:  ${row.coins}\n`;
                    const embed = new Discord.MessageEmbed()
                        .setTitle('=================\n' + ':bust_in_silhouette:  ' + row.name + '\n=================')
                        .setColor(0x20c9e4)
                        .addField('MÉTRICAS', metrics)
                        .addField('ESTADO', status)
                        .addField('EQUIPAMIENTO', equip)
                        .addField('BALANCE', coins)
                        .setThumbnail(imgurl).setFooter(`.............................\nPlayer ID: ${row.id}`);
 
                    // Send the embed to the same channel as the message
                    message.channel.send(embed);
                }
            });
	},
};