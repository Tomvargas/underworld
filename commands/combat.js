const Discord = require("discord.js");
const sqlite3 = require("sqlite3");
let db = new sqlite3.Database('./database/data.db', sqlite3.OPEN_READWRITE);
module.exports = {
	name: 'combat',
	description: 'combat',
	execute(message, args) {        
        const user = message.author.username;
        function combatres(taguser,player1){
            if(message.content === "si"){
                const aut=message.author.username;
                if(taguser===aut){
                    //combat(player1,taguser);
                    message.reply('funcionaaa.')
                }
            }
        }
        if (!message.mentions.users.size) {
            return message.reply(' Para entrar en combate debes etiquetar a alguien.');
        }else{
            const taggedUser = message.mentions.users.first();
            const embd = new Discord.MessageEmbed()
            .setDescription(`<@${taggedUser.id}>, ${user} te está retando a un duelo\nAceptas combatir?`);
            message.channel.send(embd);
            combatres(taggedUser,user);
        }
        
        //message.channel.send('embed');
    },
};