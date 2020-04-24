const Discord = require('discord.js');
const converter = require('hex2dec');
const client = new Discord.Client();

const config = require('./config.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;

    if (message.content === '/join') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('/home/alexander/WebstormProjects/Alex\'s Bot/test.mp3');
        } else {
            message.reply('You need to join a voice channel first!');
        }
    } else if (message.content === '/close') {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.leave();
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }

    if (message.content === '/test') {
        console.log(message.member.permissions.bitfield);
    }
});



client.login('Njk2MDI0NDMxOTU2MzI4NTE5.XqLbSg.OWAnJI-O7s95k88Vsx4SyROey_A');