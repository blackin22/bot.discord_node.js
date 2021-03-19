// Baixar a NPM - Moment. [npm install moment --save]
const { MessageEmbed } = require("discord.js") 
const moment = require("moment")
moment.locale("pt-br")

module.exports = {
name: "userinfo",
aliases: ["ui", "infouser"],
run: async (client, message, args) => {
      let usuario = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author; // variavel usuário, que pega por menção ou por ID.
      
      let entrada = moment(usuario.joinedAt).format("L") // data de entrada no servidor, da conta do usuário
      let criacao = moment(usuario.createdAt).format("L") // data de criação, da conta do usuário
      
      let embed = new MessageEmbed() // criando embed, do userinfo..
      .setTitle(`${usuario.tag} - UserInfo`)
      .setDescription(`**Essas são as informações do usuário listada abaixo.`)
      .setThumbnail(usuario.displayAvatarURL(dynamic: true))
      .addField("Informações:", `> Tag: ${usuario.tag}\n> ID: ${usuario.id}\n> Criação da conta: ${criacao}\n> Entrada no servidor: ${entrada}`)
      .setTimestamp()
      .setFooter(`- Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL())
      message.channel.send(embed)
  
    // Caso ocorra bugs/erros me contate. nkDaddy7 漢字#9543 - 723228928600309761
  }
}
