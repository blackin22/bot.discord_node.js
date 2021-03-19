// NPM - Moment (https://npmjs.com/moment)

const { MessageEmbed } = require("discord.js")
const moment = require("moment")
moment.locale("pt-br")

module.exports = {
name: "serverinfo",
aliases: ["sinfo", "infoserver"],
run: async (client, message, args) => {
this.client = client 
  
      let boost = message.guild.premiumSubscriptionCount === 0 ? "Não há boost(s)." : `${message.guild.premiumSubscriptionCount} Boost(s)`; // criando variavel, para ver a quantia de boosts..
    
      let embed = new MessageEmbed() // criando embed..
      .setAuthor(`${message.guild.name}`, message.guild.iconURL({dynamic: true}))
      .setThumbnail(message.guild.iconURL({dynamic: true}))
      .addField("<:r_cloud:805865899947982929> - Informações:", `> **Nome:** \`${message.guild.name}\`\n> **ID:** \`${message.guild.id}\`\n> **Posse:** \`${this.client.users.cache.get(message.guild.owner.user.id).tag}\`\n> **Criada em:** \`${moment(message.guild.createdAt).format("L")}\`\n> **Boost(s)** \`${boost}\``)
      .setTimestamp()
      .setFooter(`- Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL())      
      message.channel.send(embed)  
  
  // Caso ocorra bugs/erros me contate. nkDaddy7 漢字#9543 - 723228928600309761
   }
}
