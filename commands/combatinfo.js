const Discord = require("discord.js");
module.exports = {
	name: 'combatinfo',
	description: 'conbatinfo',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
        .addField('¿CÓMO EMPEZAR UN COMBATE?', '> primero debes utilizar el comando ```combat <taguser>``` luego de eso debes esperar que el usuario etiquetado responda con una opción, si el usuario lo hace se entrará en combate.\n\n> Debes tener en cuenta que los mensajes de otos usuarios serán eliminados durante el combate por lo que se recomienda al admin del server un canal especifico para combates :sunglasses:')
            .addField('ENTORNO DE COMBATE', ':one:\n> Al comenzar el combate solo se mostrarán los mensajes de los participantes, los mensajes de los demás usuarios se eliminarán automaticamente.\n:two:\n> El primer turno será del jugador que se retó.\n:three:\n> Aparecerán las opciones para elegir que skill utilizar.\n:four:\n> Cada skill hará daño equivalente al ataque actual del jugador y característica de la skill.\n:five:\n> Al recibir daño del oponente se restará los puntos de vida con los puntos de ataque del oponente restados con los puntos de defenza del atacado.\n:six:\n> Un combate termina cuando la vida de uno de los dos llegue a 0.\n')
        .addField('REPORTES EN UNDERWORLD', '[Errores](https://github.com/Tomvargas/underworld/issues) | [Desarrollador](https://github.com/Tomvargas)');
        
        message.channel.send(embed);
	},
};