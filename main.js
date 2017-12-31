// es6 learned from tsc
"use strict";
exports.__esModule = true;

const Discord = require('discord.js');

const client = new Discord.Client();


const myModule = require('./db');
let val = myModule.hello();

const token = val;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    
    // bot to bot
    // TODO: bot to bot
    

    // user to bot
    if (message.content === 'lol') {
        message.channel.send('hahahaha');
    }
    if (message.content === '++e') {
        message.channel.send('@everyone');
    }
    if (message.content === '++h') {
        message.channel.send('@here');
    }

    if (message.content === '++ming') {
        message.channel.send('mong');
    }
    if (message.content === '++avatar') {
        message.reply(message.author.avatarURL);
    }
    if (message.content === '++home') {
        message.react("🇵🇭");
    }
    if (message.content === '++reace') {
        const collector = message.createReactionCollector(
            ( reaction, user ) => reaction.emoji.name === '👌',
            { time: 15000 }
        );
        collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
        collector.on('end', collected => console.log(`Collected ${collected.size} items`));
    }
    if (message.content === '++bam') {
        
    }
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
});

// Log our bot in
client.login(token);