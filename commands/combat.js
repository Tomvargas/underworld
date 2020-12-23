const Discord = require("discord.js");
const sqlite3 = require("sqlite3");
let db = new sqlite3.Database('./database/data.db', sqlite3.OPEN_READWRITE);

module.exports = {
	name: 'combat',
	description: 'combat',
	execute(message, args) {        
        const user = message.author.username;
        
        if (!message.mentions.users.size) {
            return message.reply(' Para entrar en combate debes etiquetar a alguien.');
        }else{
            const taggedUser = message.mentions.users.first();
            const embd = new Discord.MessageEmbed()
            .setDescription(`<@${taggedUser.id}>, ${user} te está retando a un duelo\nAceptas combatir?`);
            message.channel.send(embd)
            .then(() => {
                message.channel.awaitMessages(response => response.content === 'si', {
                    max: 1,
                    
                    errors: ['time'],
                })
                    .then((collected) => {
                        message.channel.send(`The collected message was: ${collected.first().content}`);
                    })
                    .catch(() => {
                        message.channel.send('There was no collected message that passed the filter within the time limit!');
                    })
            })
        }
        
        //message.channel.send('embed');
    },
};
