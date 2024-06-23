/* 
  *  Created By Faxx
  *  wa.me/6281537668728
  *  github.com/@faxxcoders
*/

require("./config");
const { 
     MessageMedia 
} = require('whatsapp-web.js');
const { platform } = require('node:os');
const os = require('os');
const {
     TelegraPh,
     UploadFileUgu
} = require('../lib/uploader');
const {
     runtime,
     Styles
} = require('../lib/func');
const fs = require("fs");
const chalk = require('chalk');
const { fromBuffer } = require('file-type');
const fetch = require('node-fetch');


module.exports = (sock, message) => {
	   try {
	   const totalcase = () => {
         var mytext = fs.readFileSync("./system_faxx/faxx.js").toString()
         var numUpper = (mytext.match(/case "/g) || []).length;
         return numUpper
        }
       const { arrayMenu } = require("../lib/menu");
       const body = message.body
       const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
        const isCmd = body.startsWith(prefix)
        const command = isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ""
        const args = body.trim().split(/ +/).slice(1)
        const text = args.join(" ")
        const quoted = await message.getQuotedMessage();
        async function reply(text, options = {}) {
            const thumb = await MessageMedia.fromUrl(options.thumbnail ? options.thumbnail : "https://telegra.ph/file/1df8653a37cf52ceaebe0.jpg");
            await sock.sendMessage(message.from, text, {
           quotedMessageId: message.id._serialized,
           extra: {
           ctwaContext: {
                  title: options.title ? options.title : "Faxx Bot",
                  description: options.description ? options.description : "Library WhatsApp Web Js",
                  thumbnail: thumb.data
                  mediaType: 2,
                  sourceUrl: options.sourceUrl ? options.sourceUrl : "https://github.com/faxxcoders"
                  renderLargerThumbnail: options.renderLargerThumbnail ? options.renderLargerThumbnail : false
                 }
                }
              });      
             }
 

 console.log(chalk.bgYellow.black(`${message.fromMe ? 'Me' : message.from}`));
  console.log(chalk.bgYellow.black(`> ${message.body}`));

  switch (command) {
  	case 'ai': {
  	try {    
  	if (!text) return reply(`*[ Text Required ]*\n${prefix + command} hello ai`)
      message.react(react_loading);
      var { result } = await (await fetch(BASE_URL + `/openai?text=${text}`)).json()
      reply(result)
       } catch (e) {
          reply("Terjadi Kesalahan");
         }
  	}
      break
      case 'blackbox': {
      try {    
  	if (!text) return message.reply(`*[ Text Required ]*\n${prefix + command} hello ai`)
      message.react(react_loading);
      var { result } = await (await fetch(BASE_URL + `/blackboxAIChat?text=${text}`)).json()
      reply(result)
        } catch (e) {
          reply("Terjadi Kesalahan");
         }
  	}
      break
      case 'ragbot': {
      try {    
  	if (!text) return message.reply(`*[ Text Required ]*\n${prefix + command} hello ai`)
      message.react(react_loading);
      var { result } = await (await fetch(BASE_URL + `/ragbot?text=${text}`)).json()
      reply(result)
        } catch (e) {
          reply("Terjadi Kesalahan");
         }
  	}
      break
      case 'luminai': {
      try {    
  	if (!text) return message.reply(`*[ Text Required ]*\n${prefix + command} hello ai`)
      message.react(react_loading);
      var { result } = await (await fetch(BASE_URL + `/luminai?text=${text}`)).json()
      reply(result)
        } catch (e) {
          reply("Terjadi Kesalahan");
         }
  	}
      break
      case 'smartcontract': {
      try {    
  	if (!text) return message.reply(`*[ Text Required ]*\n${prefix + command} hello ai`)
      message.react(react_loading);
      var { result } = await (await fetch(BASE_URL + `/smartcontract?text=${text}`)).json()
      reply(result) 
        } catch (e) {
          reply("Terjadi Kesalahan");
         }   
  	}
      break
      case 'ocr': {
      try {    
      if (!quoted) return message.reply(`*[ Reply Image With caption ]* ${prefix+command}`)          
      if (quoted && quoted.hasMedia) {
         message.react(react_loading);
         var media = await quoted.downloadMedia();
         const buffer = Buffer.from(media.data, 'base64');
         const tolink = await TelegraPh(buffer)
         const osier = await (await fetch(BASE_URL + `/ocr?url=${tolink}`)).json()
        reply(osier.result)
        }
          } catch (e) {
          reply("Terjadi Kesalahan");
         }
      }
      break
      case "githubstalk": {
      	try {    
      	if (!text) return reply(`*[ Example ]* ${prefix+command} text`)
		 message.react("🔥")
		 var fsx = await (await fetch(BASE_URL + `/githubstalk?username=${text}`)).json()
		 var { 
					id,
					public_gists,
					public_repos,
                    followers,
                    following,
                    created_at,
                    updated_at,
                    name,
                    bio,
                    location
         } = fsx.result
        var gh = `*[ Github Stalk ]*\n\n`
                 gh += `- User Name: ${text}\n`
                 gh += `- Nick Name: ${name}\n`
                 gh += `- Bio: ${bio}\n`
                 gh += `- Location: ${location}\n`
                 gh += `- ID: ${id}\n`
                 gh += `- Followers: ${followers}\n`
                 gh += `- Following: ${following}\n`
                 gh += `- Public Repos: ${public_repos}\n`
                 gh += `- Public Gists: ${public_gists}\n`
                 gh += `- Created At: ${created_at}\n`
                 gh += `- Updated At: ${updated_at}\n`
      reply(gh)
        } catch (e) {
          reply("Terjadi Kesalahan");
         }
      }
      break
      case "mlstalk": {
      try {    
      let [text1, text2] = text.split("|")
	  if (!text1 || !text2) return reply(`*[ Example ]*\n${prefix+command} <id>|<zoneid>`)
	  let fx = await(await fetch(BASE_URL + `/mlstalk?id=${text1}&zoneid=${text2}`)).json()
      let caption = `*[ ML Stalk ]*

- Game ID : ${dari}
- Zone ID : ${ke}
- Nickname : ${fx.result.userName}`
      reply(caption)
        } catch (e) {
          reply("Terjadi Kesalahan");
         }
      }
      break
      case "styletext": {
      try {    
      if (!text) return reply(`*[ Example ]* ${prefix+command} text`)
      var anu = await (await fetch(BASE_URL + `/styletext?text=${text}`)).json()
      var anuu = anu.result
      var teks = `Style Text From ${text}\n\n`
      for (let i of anuu) {
      teks += `- *${i.name}* : ${i.result}\n\n`
      }
      reply(teks)
        } catch (e) {
          reply("Terjadi Kesalahan");
         }
      }
      break
      case "ssweb": {
      try {    
      if (!text) return message.reply(`*[ Example ]* ${prefix+command} text`)
      message.react(react_loading);
      const res = await fetch(BASE_URL + `/screenshot-web?url=${encodeURIComponent(text)}&type=desktop`).then(response => response.buffer())       
      const response = new MessageMedia((await fromBuffer(res)).mime, res.toString("base64"))
       await sock.sendMessage(message.from, response, { caption: `Result Screenshot Website: ${text}`, quotedMessage: message.id._serialized }); 
      message.react(react_done);
       } catch (e) {
          reply("Terjadi Kesalahan");
         }	
      }
      break
      case "tourl": {
      try {    
      if (!quoted) return message.reply(`*[ Reply Media ]* with caption ${prefix+command}`) 
      if (quoted && quoted.hasMedia) {
        message.react(react_loading);
        var media = await quoted.downloadMedia();
        const buffer = Buffer.from(media.data, 'base64');
        var tolink
        try {
          tolink = await TelegraPh(buffer)   
         } catch {
          tolink = await UploadFileUgu(buffer)   
          }
        reply(`
*Uploader*
MimeType: ${media.mimetype}
Data (length): ${media.data.length}
Preview: ${tolink}`)       
        message.react(react_done);
        } catch (e) {
          reply("Terjadi Kesalahan");
         }
       }
       break
       case "sticker": case "s": {
       try {    
       if (!quoted) return reply(`*[ Reply Media ]* with caption ${prefix+command}`)             
      if (quoted && quoted.hasMedia) {
        message.react(react_loading);
        var media = await quoted.downloadMedia();
        sock.sendMessage(message.from, media, { sendMediaAsSticker: true, stickerAuthor: packname, stickerName: author, stickerCategories: ["🗿", "😆"]});
        message.react(react_done);
           } catch (e) {
          reply("Terjadi Kesalahan");
         }
       }
       break
       case "totalfitur": {
      	reply(`Total Fitur Bot Saat ini ${totalcase()}`)
      }
      break
      case "runtime": {
         reply(runtime(process.uptime()))
      }
      break
      case "menu": {
      var mem = `- *Library* : whatsapp-web.js@${require('whatsapp-web.js/package.json').version}\n
      - *Total Fitur* : ${totalcase()}
      - *Type* : Case\n${arrayMenu(prefix)}`
      reply(Styles(mem), { renderLargerThumbnail: true })
      }
      break
  	default:
        	}
        } catch (e) {
      console.log(e)
   }
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(chalk.redBright(`Update ${__filename}`));
	delete require.cache[file];
	require(file);
});

