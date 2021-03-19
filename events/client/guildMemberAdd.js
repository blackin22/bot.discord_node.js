module.exports = (client, member) => {

const guild = client.guilds.cache.get("id-servidor")
const canal = guilds.channels.cache.get("id-canal")

canal.send(`${member} Seja bem vindo! ID: ${member.id}`)
 
}
