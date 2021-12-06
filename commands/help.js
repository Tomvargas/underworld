const Discord = require("discord.js");
module.exports = {
	name: 'help',
	description: 'help',
	execute(message, args) {
		const user = message.author.username;
        const data = "**TE PRESENTO LOS COMANDOS BÁSICOS**\n\n`[ +help ]`  :arrow_right:  Sistema de ayuda.\n\n`[ +linkstart ]`  :arrow_right:  Entrar en Player Mode.\n\n`[ +profile ]`  :arrow_right:  Perfil del jugador.\n\n< Reporta un problema al [desarrollador](https://github.com/Tomvargas/underworld/issues) >";
        const embd = new Discord.MessageEmbed().setTitle('Hola ' + user)
            .setFooter("good luck")
            .setDescription(data)
            .setColor('0x30c567');
        message.channel.send(embd);
	},
};