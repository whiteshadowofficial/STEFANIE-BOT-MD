let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!m.quoted) throw 'Reply Message!'
    if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (!(hash in sticker)) throw 'Hash not found in database'
    sticker[hash].locked = !/^un/i.test(command)
    m.reply('Done!')
} 
handler.help = ['un', ''].map(v => v + 'lockcmd')
handler.tags = ['database']
handler.command = /^(un)?lockcmd$/i
handler.premium = true

export default handler