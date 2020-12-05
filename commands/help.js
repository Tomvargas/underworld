const Discord = require("discord.js");
module.exports = {
	name: 'help',
	description: 'help',
	execute(message, args) {
		const user = message.author.username;
        const data = "**COMANDOS**\n**normal**\n```+help``` > Sistema de ayuda.\n```+linkstart``` > Entrar en Player Mode.\n```+profile``` > Perfil del jugador.\n**combates**\n```+combat``` > Solicitar duelo a un jugador.\n```+combatinfo``` > información sobre el sistema de combates.\n";
        const embd = new Discord.MessageEmbed().setTitle('Hola ' + user + ', estas en el sistema de ayuda.')
            .setFooter(`Player ID: ${message.author.id}`)
            .setDescription(data + "\n>> Reporta un problema al [desarrollador](https://github.com/Tomvargas/underworld/issues)")
            .setColor('0x30c567');
        message.channel.send(embd);
	},
};