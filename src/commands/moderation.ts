import * as util from '../lib/util.js';
import * as Discord from 'discord.js';

Discord; // fuck you ts

export function addCommands(cs, bot: Discord.Client) {
	cs.addCommand('moderating', new cs.SimpleCommand('ban', (msg) => {
		const params = util.getParams(msg);
		const banMember = msg.guild.members.get(util.parseUser(bot, params[0], msg.guild).id);

		if (banMember !== undefined) {
			if (banMember.id === msg.author.id) {
				return 'hedgeberg#7337 is now b&. :thumbsup:'; // https://hedgeproofing.tech
			}

			if (banMember.bannable) {
				banMember.ban();
				return '✓ Banned ' + banMember.user.username;
			} else {
				return 'member ' + banMember.user.username + ' isn\'t bannable';
			}
		} else {
			return 'i don\'t know that person!';
		}
	})
		.setUsage('(user)')
		.setDescription('ban a user')
		.addAlias('banuser')
		.addAlias('banmember')
		.addExample('360111651602825216')
		.addClientPermission('BAN_MEMBERS')
		.addUserPermission('BAN_MEMBERS')
		.setGuildOnly());

	cs.addCommand('moderating', new cs.SimpleCommand('kick', (message) => {
		const params = message.content.split(' ').slice(1, message.content.length);
		const banMember = message.guild.members.get(util.parseUser(bot, params[0], message.guild).id);

		if (banMember !== undefined) {
			if (banMember.id === message.member.id) {
				return 'hedgeberg#7337 is now b&. :thumbsup:'; // https://hedgeproofing.tech
			}

			if (banMember.kickable) {
				banMember.ban();
				return '✓ Kicked ' + banMember.user.username;
			} else {
				return 'member ' + banMember.user.username + ' isn\'t kickable';
			}
		} else {
			return 'i don\'t know that person!';
		}
	})
		.setUsage('(user)')
		.addAlias('kickuser')
		.addAlias('kickmember')
		.setDescription('kick a user')
		.addExample('360111651602825216')
		.addClientPermission('KICK_MEMBERS')
		.addUserPermission('KICK_MEMBERS')
		.setGuildOnly());
}