module.exports = {
name: "ping",
aliases: ["pong", "ms"],
run: async (client, message, args) => {

      try {
  
      let embed = new MessageEmbed()
      .setDescription("carregando...")
  
      const msg = await message.channel.send(embed)
   
      let embed2 = new MessageEmbed()
      .setDescription(`> Ping: ${client.ws.ping}`)
      msg.edit(embed2)
      } catch (e) {
         message.channel.send("Algo de errado acontenceu :sob:")
      }
   }  
}
