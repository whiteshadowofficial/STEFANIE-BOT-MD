import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = m => m
handler.all = async function (m) {
    let name = await conn.getName(m.sender) 
	let pp = 'https://telegra.ph/file/57e0679dc28177770f449.jpg'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
		
        //global.bg = await (await fetch(img)).buffer()
		global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
		
		// Module 
		global.fetch = import('node-fetch')
		global.bochil = import('@bochilteam/scraper')
		
		const _uptime = process.uptime() * 1000
        
		// Ini untuk command crator/owner
		global.kontak2 = [
         [owner[0], await this.getName(owner[0] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'no@gmail.com', true],
         [owner[1], await this.getName(owner[1] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'mrwhiteshadowofficial@gmail.com', true], // If you want to add it, just copy this 1 line and paste it underneath and then edit it a little!
        ]
        
		// ucapan ini mah
		global.ucapan = ucapan()
		
		// pesan sementara
		global.ephemeral = null // 86400 = 24 hours, if you want to replace it '86400' or 'null' or ''

		global.fakeig = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            mediaUrl: "https://instagram.com/mr.whiteshadowofc",
            mediaType: "VIDEO",
            description: "https://Instagram.com/mr.whiteshadowofc", 
            title: 'Jessi-md',
            body: me,
            thumbnailUrl: pp,
            sourceUrl: 'https://github.com/whiteshadowofficial'
    }
    } }
		// Fake 
		global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: me, orderTitle: me, sellerJid: '0@s.whatsapp.net' } } }
		global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': me, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${me},;;;\nFN:${me},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./me.png'), thumbnail: fs.readFileSync('./me.png'),sendEphemeral: true}}}
        global.fvn = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "17608914335-1625305606@g.us" } : {}) 
                       },
            message: { 
               "audioMessage": {
                        "mimetype":"audio/ogg; codecs=opus",
                        "seconds": "999999999999",
                        "ptt": "true"
                               }
                             } 
                            }
               
                global.ftextt = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "17608914335-1625305606@g.us" } : {}) 
                       },
            message: { 
               "extendedTextMessage": {
                        "text":me,
                        "title": me,
                        'jpegThumbnail': fs.readFileSync('./me.png')
                               }
                             } 
                            }
               
                  global.fliveLoc = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat  ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "caption":"Hi","h": `${me}`, 'jpegThumbnail': fs.readFileSync('./me.png')}}
           }
               
                  global.fliveLoc2 = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "title": "Hi There Im Using GitHub","h": me, 'jpegThumbnail': fs.readFileSync('./me.png')}}
           }
               
                   global.ftoko = {
       key: {
                   fromMe: false,
                   participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "17608914335@s.whatsapp.net" } : {})
               },
               message: {
                   "productMessage": {
                       "product": {
                           "productImage":{
                               "mimetype": "image/jpeg",
                               "jpegThumbnail": fs.readFileSync('./me.png') //Gambarnye
                           },
                           "title": me, //Kasih namalu 
                           "description": "Jessi-md Bot", 
                           "currencyCode": "USD",
                           "priceAmount1000": "20000000",
                           "retailerId": "Ghost",
                           "productImageCount": 1
                       },
                           "businessOwnerJid": `0@s.whatsapp.net`
               }
           }
       }
               
                     global.fdocs = {
           key : {
                  participant : '0@s.whatsapp.net'
                               },
              message: {
                           documentMessage: {
                           title: me, 
                           jpegThumbnail: fs.readFileSync('./me.png')
                                 }
                               }
                             }
               
                    global.fgclink = {
           "key": {
               "fromMe": false,
               "participant": "0@s.whatsapp.net",
               "remoteJid": "0@s.whatsapp.net"
           },
           "message": {
               "groupInviteMessage": {
                   "groupJid": "17608914335-1625305606@g.us",
                   "inviteCode": "null",
                   "groupName": "Iyh", 
                   "caption": me, 
                   'jpegThumbnail': fs.readFileSync('./me.png')
               }
           }
       }
       
                    global.fgif = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "17608914335-1625305606@g.us" } : {}) 
                       },
            message: { 
                        "videoMessage": { 
                        "title": me,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': me,
                        'jpegThumbnail': fs.readFileSync('./me.png')
                               }
                              }
                             }
                //Fakes Random
           let fek = [global.ftroli, global.fkontak, global.fvn, global.fvid, global.ftextt, global.fliveLoc, global.fliveLoc2, global.ftoko, global.fdocs, global.fgclink, global.fgif]
            
               //Get Random Fake
           global.fake = fek.getRandom()
	}
}

/* Img Array */
function ImgWaifu() {
    let Waif = [
        "https://i.pinimg.com/originals/8e/b2/06/8eb206322336c1e107c187fe338c42f5.jpg",
        "https://i.pinimg.com/originals/8a/eb/f8/8aebf8c8cd83c4a5a7cd9b893a97614f.jpg",
        "https://i.pinimg.com/originals/cc/fe/31/ccfe31df09fbeb8438ffb1268a672b03.png",
        "https://i.pinimg.com/originals/39/d1/df/39d1df920c01a788c858c333232e11d4.png",
        "https://i.pinimg.com/originals/1d/d4/63/1dd463f45c2d4680543253f32818b56f.jpg",
        "https://i.pinimg.com/originals/42/88/f1/4288f17ee25b909430fb7e707d961d0b.jpg",
        "https://i.pinimg.com/originals/be/4a/83/be4a83aa8f4459c65ac57fd536f71baa.jpg",
        "https://i.pinimg.com/originals/1f/04/33/1f04330c19ca1beb531235ac299189c8.png",
        "https://i.pinimg.com/originals/9f/d4/74/9fd4744644230aa520a9dfe2ea24d38d.jpg",
        "https://i.pinimg.com/originals/0b/cb/0b/0bcb0b81d2d5a914b4baae02ce89fef9.jpg",
        "https://i.pinimg.com/originals/90/b3/fb/90b3fb0525ea88bf2214bcd31624e093.png",
        "https://i.pinimg.com/originals/a9/b7/5f/a9b75f3fdd6b08d1113f6910dc1bedb7.jpg",
        "https://i.pinimg.com/originals/f1/ea/fd/f1eafdb8526cf1d73f1156849b2ebef7.jpg",
        "https://i.pinimg.com/originals/50/38/98/503898e84962573df440773b224a9d04.jpg",
        "https://i.pinimg.com/originals/d6/51/a8/d651a8546d44aa0f2ca16e7ec610ee25.jpg",
        "https://i.pinimg.com/originals/51/64/35/51643592f8ef433690a6d4f6756ed30f.jpg",
        "https://i.pinimg.com/originals/46/c7/4d/46c74db33dc44bf5e0b37110cb268d27.jpg",
        "https://i.pinimg.com/originals/1c/73/3b/1c733b10bfc31b42e4b805cffa89def7.jpg",
        "https://i.pinimg.com/originals/0a/7c/f4/0a7cf44f2252b098b210d67fe8f94d9d.jpg",
        "https://i.pinimg.com/originals/41/64/60/4164604df227416f5622db5ba1c175ba.jpg",
        "https://i.pinimg.com/originals/80/a9/2d/80a92d9bf7123b4906158c5a63d94ff0.jpg",
        "https://i.pinimg.com/originals/c1/cf/d6/c1cfd6446624ab90eb95e9e21ee6870f.png",
        "https://i.pinimg.com/originals/44/62/a3/4462a3cf3792a8cf12587fd7875d75bc.jpg",
        "https://i.pinimg.com/originals/de/96/a4/de96a4ee3ad09df91a60aaf580b2a481.jpg",
        "https://i.pinimg.com/originals/22/44/23/224423878ca22cee25ed97fe9859e0f5.png",
        "https://i.pinimg.com/originals/61/16/db/6116dbfdf899dd1f3551bf4c533e43c2.jpg",
        "https://i.pinimg.com/originals/ea/45/cb/ea45cbbbc0b4d78d5446dc4946944ba7.jpg",
        "https://i.pinimg.com/originals/c2/c1/9f/c2c19f5b8c573a3493589add1087a0af.jpg",
        "https://i.pinimg.com/originals/b5/62/df/b562df9c721a3898b72eaaf0a9b3abca.png",
        "https://i.pinimg.com/originals/f1/ce/db/f1cedb200dfab458da7ae8077c873b52.jpg",
        "https://i.pinimg.com/originals/e8/f7/a3/e8f7a39d3f74c3514355850e4b9dc24b.jpg",
        "https://i.pinimg.com/originals/54/e2/18/54e21838e0fc0f0f933d87354a4e244d.jpg",
        "https://i.pinimg.com/originals/0e/ba/1a/0eba1a593d883c50cca095848cfb8722.jpg",
        "https://i.pinimg.com/originals/1e/a4/a6/1ea4a60fd6543b2f78f7d070f44f45e9.jpg",
        "https://i.pinimg.com/originals/89/81/89/8981895db9e17b81cd58d0c467c71cf4.jpg",
        "https://i.pinimg.com/280x280_RS/21/85/cd/2185cdb9d25d38ea544eb4ac8159cf1f.jpg",
        "https://i.pinimg.com/originals/9e/c1/54/9ec154489de01ba05a25a1072ed7882d.jpg",
        "https://i.pinimg.com/originals/31/5c/bd/315cbd1ac25c4d4cdddc3638e466eb25.jpg",
        "https://i.pinimg.com/originals/55/f4/00/55f4004efced0fff60e51bd8dd680953.jpg",
        "https://i.pinimg.com/originals/a4/c0/3a/a4c03ab8447c56f400b9b951fbae3b1d.jpg",
        "https://i.pinimg.com/originals/53/d4/94/53d4949d971e143cdef3fb66746b11b8.jpg",
        "https://i.pinimg.com/originals/01/8b/a1/018ba1ad7093f1171e2aded2e3a4a699.jpg",
        "https://i.pinimg.com/originals/88/81/f7/8881f70ea7baf030120559b04ad1146e.jpg",
        "https://i.pinimg.com/originals/b9/50/83/b9508355aed683ece54ee4f4d703aa08.jpg",
        "https://i.pinimg.com/originals/39/13/11/3913117585b2ffe4102619766822182b.jpg",
        "https://i.pinimg.com/originals/ae/9f/4f/ae9f4f0232cde20d846c114591a371d9.jpg",
        "https://i.pinimg.com/originals/df/56/7e/df567e0a14ee48f9445eab94c2804c24.jpg",
        "https://i.pinimg.com/originals/3a/1e/f1/3a1ef1b776cbf4def64890eaf6c0aa53.jpg",
        "https://i.pinimg.com/originals/8d/fe/54/8dfe546c883aae6099670e8a7a9f3521.jpg",
        "https://i.pinimg.com/originals/9a/52/24/9a52246d7114dad728cd9903b26328d6.jpg",
        "https://i.pinimg.com/originals/75/aa/74/75aa7438dc2756d1b4fe6e8d41ddb2c0.jpg",
        "https://i.pinimg.com/originals/e1/f5/d5/e1f5d591f6c39dc23d02e33b4956a269.jpg",
        "https://i.pinimg.com/originals/63/24/fb/6324fbf1f2d090fa33d2fc2554a0da32.jpg",
        "https://i.pinimg.com/originals/24/8a/41/248a415c9ba2870d9d70fa983269e7e9.jpg",
        "https://i.pinimg.com/originals/6a/1d/2b/6a1d2b33590b57cee2a2cf863b79895e.jpg",
        "https://i.pinimg.com/originals/2f/fa/92/2ffa923ad047567126f374861a338523.jpg",
        "https://i.pinimg.com/originals/ee/87/43/ee874395bf14a8d3d4df5925efcfdb05.jpg",
        "https://i.pinimg.com/originals/92/94/60/929460a690114f65cead93ea5ec57535.jpg",
        "https://i.pinimg.com/originals/cd/31/8c/cd318cf0ac622d1281b7616c9c87e42a.png",
        "https://i.pinimg.com/originals/e8/8e/ed/e88eedaaf2c903c922121c39faf49d6a.png",
        "https://i.pinimg.com/originals/99/43/a2/9943a261d188f048b89db41965b9715e.jpg",
        "https://i.pinimg.com/originals/c1/0c/f2/c10cf211537491a3c1383a7bbd539d38.jpg",
        "https://i.pinimg.com/originals/1d/a6/1a/1da61a5df4a31dd394758b035b17320e.jpg",
        "https://i.pinimg.com/originals/fb/63/d3/fb63d39b4b4aef75f32e4e7d3b67aac3.jpg",
        "https://i.pinimg.com/originals/c4/4b/5f/c44b5fa12edf9ea977f34f0f70414430.jpg",
        "https://i.pinimg.com/originals/03/f2/66/03f26670d5e3040d5ee5cd4f2b032fef.jpg",
        "https://i.pinimg.com/originals/10/d2/24/10d224ab1afae97e058fc9044d5a7e49.jpg",
        "https://i.pinimg.com/originals/93/c6/fb/93c6fbaf62f8b797eea55f7ae79e356d.jpg",
        "https://i.pinimg.com/originals/4d/f6/5b/4df65bb4809890faab894e8e8dff40c1.jpg",
        "https://i.pinimg.com/originals/f0/fe/31/f0fe31397de8e5865b7930d081f1bc1d.jpg",
        "https://i.pinimg.com/originals/8d/cd/e8/8dcde89be14c3810729dbf565f7ccb53.png",
        "https://i.pinimg.com/originals/c3/93/08/c39308900e619b45c4c9f449709c9e95.jpg",
        "https://i.pinimg.com/originals/cb/c6/42/cbc64270e6e5f387f85a3177e1c167ff.jpg",
        "https://i.pinimg.com/originals/07/0d/5c/070d5c4a6ca69d819f37b8ef112eafd6.jpg",
        "https://i.pinimg.com/originals/96/0a/b8/960ab83f5299f79064adb16a2e361189.jpg",
        "https://i.pinimg.com/originals/ea/7c/7c/ea7c7cafb58cef706d0949f1ca6d7149.png",
        "https://i.pinimg.com/originals/3f/fa/9a/3ffa9ad68d5e691b1669b11844483ef0.jpg",
        "https://i.pinimg.com/originals/ef/6f/21/ef6f217ed5d203eb3907ea6b8ef24de7.jpg",
        "https://i.pinimg.com/originals/28/a8/af/28a8afefe43210d14cdd541700a65491.jpg",
        "https://i.pinimg.com/originals/fd/7d/cc/fd7dccdac18b43774c1e42f05f50afa0.jpg",
        "https://i.pinimg.com/originals/00/47/9a/00479aac1d7af8b996018d89f85e7f0b.jpg",
        "https://i.pinimg.com/originals/15/ba/c0/15bac04a0012fe79ca8959eea5138f4e.jpg",
        "https://i.pinimg.com/originals/81/2e/53/812e53850439a2793a36323dd963257c.jpg",
        "https://i.pinimg.com/originals/7c/42/8e/7c428e95cced74b3747d28bb503a2723.jpg",
        "https://i.pinimg.com/originals/ec/e1/05/ece105e7dc8627be78acf85787838edb.png",
        "https://i.pinimg.com/originals/33/42/16/3342165641bb4bcdd8d86a3960572e47.jpg",
        "https://i.pinimg.com/originals/9e/29/d5/9e29d5bf3a4ca9e4b9c11084cf8bd8ab.jpg",
        "https://i.pinimg.com/originals/0d/00/aa/0d00aacaba14ce204a223a941be1ffd2.jpg",
        "https://i.pinimg.com/originals/cf/f1/ed/cff1edc018314b7696d62389738737cd.jpg",
        "https://i.pinimg.com/originals/f9/cb/3c/f9cb3cc2d9630a06d82f48fbaf2daa11.jpg",
        "https://i.pinimg.com/originals/7e/83/d5/7e83d5acca7261cb2feacdc6df8ad3ff.jpg",
        "https://i.pinimg.com/originals/a4/07/c1/a407c1c94fe7b4cab1f205fad5910286.jpg",
        "https://i.pinimg.com/originals/06/3c/ba/063cbaecd700e9151a9787c945283286.jpg",
        "https://i.pinimg.com/originals/44/fc/7a/44fc7a984e56513f6b736d5825e9bf2a.jpg",
        "https://i.pinimg.com/originals/58/c0/8d/58c08d72caaa4c37f3da9ec6ce01b647.jpg",
        "https://i.pinimg.com/originals/75/c5/ee/75c5eef08118c2108b1ed670b2ed5aac.jpg",
        "https://i.pinimg.com/originals/d1/94/e1/d194e11e1736f38d447d29d87911e094.png",
        "https://i.pinimg.com/originals/98/60/66/9860667c468c7306789755dae55b0447.jpg",
        "https://i.pinimg.com/originals/ab/ae/f3/abaef3b76f0c0e9295d88af4214376ec.jpg",
        "https://i.pinimg.com/originals/13/5f/c0/135fc027dde72db0fce7b060c721fc40.jpg"
    ]
    return Waif
}

global.hwaifu = ImgWaifu()

export default handler 

function ucapan() {
    const time = moment.tz('Asia/Colombo').format('HH')
    let res = "Good night 🌙"
    if (time >= 4) {
        res = "Good Morning 🌄"
    }
    if (time > 10) {
        res = "Good Afternoon ☀️"
    }
    if (time >= 15) {
        res = "Good afternoon 🌅"
    }
    if (time >= 18) {
        res = "Good night 🌙"
    }
    return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
