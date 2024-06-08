const { Events } = require('discord.js');
const { Tags } = require('./sqlite.js')

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		Tags.sync();
	},
};