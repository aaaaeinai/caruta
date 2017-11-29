
const Discord = require('discord.js');

const client = new Discord.Client();

const token = '';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '~ping') {
        message.channel.send('~pong');
    }
    if (message.content === '~avatar') {
        message.reply(message.author.avatarURL);
    }
    if (message.content === '~home') {
        message.react("🇵🇭");
    }
    if (message.content === '~reace') {
        const collector = message.createReactionCollector(
            ( reaction, user ) => reaction.emoji.name === '👌',
            { time: 15000 }
        );
        collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
        collector.on('end', collected => console.log(`Collected ${collected.size} items`));
    }
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
});

// Log our bot in
client.login(token);