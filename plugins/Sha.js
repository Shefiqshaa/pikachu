/* Copyright (C) 2021 ameer-kallumthodi.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
PIKACHU*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "താനാരാണെന്ന് തനിക്ക് അറിയാന്‍ മേലങ്കില്‍താന്‍ എന്നോട്‌ ചോദിക്ക്.. താനാരണെന്ന്...തനിക്ക് ഞാന്‍ പറഞ്ഞു തരാംതാനാരാണെന്ന്...എന്നിട്ട്‌ഞാനാരാണെന്ന് എനിക്കാറിയാമൊന്നുതാനെന്നോട്‌ ചോദിക്ക്..അപ്പോ തനിക്ക് ഞാന്‍ പറഞ്ഞു തരാംതാനാരാണെന്നും\n🙈"

if (Config.WORKTYPE == 'private') {

  Asena.addCommand({ pattern: 'who am i ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://en.ephoto360.com/write-text-on-wet-glass-online-589.html&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Pikachu*' })

  }));
}

else if (Config.WORKTYPE == 'public') {

  Asena.addCommand({ pattern: 'who am i ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://en.ephoto360.com/write-text-on-wet-glass-online-589.html&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Pikachu*' })

  }));

}
