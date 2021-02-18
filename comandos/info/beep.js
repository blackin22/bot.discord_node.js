module.exports = {
 name: 'beep',
 aliases: ['bar'],
 run: async (client, message, args) => {
     message.channel.send(`> Olá, ${message.author.tag} tudo bem com a sua pessoa?`)
  }
}
