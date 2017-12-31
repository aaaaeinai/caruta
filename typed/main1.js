"use strict";
exports.__esModule = true;
var discord = require("discord.js");
var client = new discord.Client();
var db = require("./db");
var val = db.hello();
var token = val;
client.on('ready', function () {
    console.log('Go!');
});
client.on('message', function (message) {
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
        var collector = message.createReactionCollector(function (reaction, user) { return reaction.emoji.name === '👌'; }, { time: 15000 });
        collector.on('collect', function (r) { return console.log("Collected " + r.emoji.name); });
        collector.on('end', function (collected) { return console.log("Collected " + collected.size + " items"); });
    }
    if (message.content === '++bam') {
    }
});
client.on('guildMemberAdd', function (member) {
    var channel = member.guild.channels.find('name', 'member-log');
    if (!channel)
        return;
    channel.send("Welcome to the server, " + member);
});
// Log our bot in
client.login(token);
