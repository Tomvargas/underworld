const Discord = require("discord.js");
module.exports = {
	name: 'combatinfo',
	description: 'conbatinfo',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
		.addField('¿CÓMO EMPEZAR UN COMBATE?', 'Primero debes utilizar el comando ```combat <taguser>``` luego de eso debes esperar que el usuario etiquetado responda ```si``` o ```yes```, si el usuario lo hace comenzará el combate.\n\nDebes tener en cuenta que los mensajes de otos usuarios serán eliminados durante el combate por lo que se recomienda al admin del server un canal especifico para combates :crossed_swords:')
        .addField('ENTORNO DE COMBATE', ':one: **Espectadores**\n> Al comenzar el combate solo se mostrarán los mensajes de los participantes, los mensajes de los demás usuarios se eliminarán automaticamente.\n:two: **Primer turno**\n> El primer turno será del jugador que se retó.\n:three: **Modo de combate**\n> Aparecerán las opciones para elegir que skill utilizar.\n:four: **Habilidades**\n> Cada skill hará daño equivalente al ataque actual del jugador y característica de la skill.\n:five: **Daño**\n> Al recibir daño del oponente se restará los puntos de vida con los puntos de ataque del oponente restados con los puntos de defenza del atacado.\n:six: **Fin de combate**\n> Un combate termina cuando la vida de uno de los dos llegue a 0 o uno de los participantes deje de responder los ataques por más de un minuto.\n')
		.addField('REPORTES EN UNDERWORLD', ':x: [Errores](https://github.com/Tomvargas/underworld/issues) :heavy_minus_sign: :computer: [Desarrollador](https://github.com/Tomvargas)')
		.setImage("https://media1.tenor.com/images/81ffe1c1808496591868afaa67907fb4/tenor.gif")
        
        message.channel.send(embed);
	},
};