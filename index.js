//declare requirements
const Discord = require("discord.js");
const fs = require('fs');
const config = require("./config.json");

const prefix = "+";

// declare new discord client

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//read each message in server

client.on("message", function (message) {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;// read if message start with prefix
    
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(/ +/);
    const command = args.shift().toLowerCase();

/*
    ============================================================================
                                        COMMANDS
    ============================================================================
*/

    //------------------------------------------------------------------------------> System avatar
    if (command.toLowerCase() === "avatar") {
        const avatar = new Discord.MessageAttachment(message.author.displayAvatarURL());
        message.channel.send(avatar);
    }
    else if(command.toLowerCase() === "help"){
        client.commands.get('help').execute(message, command);
    }
    else if(command.toLowerCase() === "combatinfo"){
        client.commands.get('combatinfo').execute(message, command);
    }
    else if(command.toLowerCase() === "linkstart"){
        client.commands.get('linkstart').execute(message, command);
    }
    else if(command.toLowerCase() === "profile"){
        client.commands.get('profile').execute(message, command);
    }
    else if(command.toLowerCase() === "combat"){
        client.commands.get('combat').execute(message, command);
    }
});


client.login(config.BOT_TOKEN);