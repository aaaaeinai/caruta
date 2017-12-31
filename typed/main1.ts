
import * as discord from "discord.js"

const client = new discord.Client()

import * as db from "./db"
var val = db.hello()

const token = val

client.on('ready', () => {
    console.log('Go!')
})

client.on('message', message => {
    
    // bot to bot
    if (message.content === '++p') {
        message.channel.send('=m l');
        message.channel.send('=m j');
        message.channel.send('=m sf');
        message.channel.send('=m r on');
    }
    if (message.content === '++s') {
        message.channel.send('t!dailies');
        message.channel.send('t!slot');
        message.channel.send('t!fish');
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