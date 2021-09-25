//PLUGIN BY SOURAVKL11 COPY WITH CREDIT

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'info', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = 'https://media.istockphoto.com/vectors/-vector-id1010001882?k=20&m=1010001882&s=612x612&w=0&h=6ZqzWlYBD3bT2EqJolzC3xbIKVVy350qMQmmS6B-Wd4=';
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `` + Config.BOTSK + ` BOT CREATED BY ` + Config.PLK +`
    
    --------- ` + Config.BOTSK + ` -------------
╭─➤ 𝗜𝗡𝗙𝗢 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 »
│❖ ᴀᴜᴛʜᴏʀ : ✫ ` + Config.PLK + ` ✫
│❖ ʀᴇᴄᴏᴅᴇ : 404
│❖ ɪɴꜱᴛᴀ : coming soon...
│❖ ᴡʜsᴛᴘ : coming soon...
╰────────────────❋ཻུ۪۪➹
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
               ` + Config.BOTSK + `
    
    ⚡𝙆𝙞𝙡𝙡𝙖𝙙𝙞𝙨𝙢 𝙣𝙚𝙫𝙚𝙧 𝙚𝙣𝙙𝙨⚡
`}) 

}));
