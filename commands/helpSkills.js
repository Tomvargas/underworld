const Discord = require("discord.js");
const sqlite3 = require("sqlite3");
let db = new sqlite3.Database('./database/data.db', sqlite3.OPEN_READWRITE);
module.exports = {
	name: 'helpSkills',
	description: 'skills description',
	execute(message, args) {
        let nskill = args;
        //console.log(`SELECT * FROM skills WHERE id='${nskill}'`);
        db.get(`SELECT * FROM skills WHERE id='${nskill}'`,function (err, row) {
            // If row not found, create it
            if (err) {
                const embd = new Discord.MessageEmbed().setTitle('No encontré esa skill, asegurate de haberla escrito bien, por ejemplo: ```001``` o ```023```')
                    .setFooter('Mas funciones con el comando help');
                message.channel.send(embd);
            }else{
                try{
                    const msj = new Discord.MessageEmbed()
                    .setTitle((row.name).toUpperCase())
                    .addField('descripción:', '> '+row.description);
                    message.channel.send(msj);
                }
                catch(e){
                    const embd = new Discord.MessageEmbed().setTitle('No encontré esa skill, asegurate de haberla escrito bien, por ejemplo: ```001``` o ```023```')
                    .setFooter('Mas funciones con el comando help');
                    message.channel.send(embd);
                }
            }
        });
    },
    
};