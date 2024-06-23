/* 
  *  Created By Faxx
  *  wa.me/6281537668728
  *  github.com/@faxxcoders
*/


process.on('uncaughtExpection', console.error)
process.on('unhandledRejection', console.error)
     
const { 
      Client, 
      LocalAuth, 
      MessageMedia
} = require('whatsapp-web.js');
const { 
     platform 
} = require('node:os');
const os = require('os');
const qrcode = require('qrcode-terminal');
const fs = require("fs");
const chalk = require("chalk")

async function faxxStart() {   
const sock = new Client({
        authStrategy: new LocalAuth({
        // proxyAuthentication: { username: 'username', password: 'password' },
        sockId: 'whatsapp-web',
        dataPath: './sessions'
    }),
    puppeteer: {
        headless: true,
        // args: ['--proxy-server=proxy-server-that-requires-authentication.example.com'],
        args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--no-first-run",
      "--no-zygote",
      "--single-process", 
      "--disable-gpu",
    ],
        authStrategy: new LocalAuth(),
        executablePath: platform() === 'win32' ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe' : '/usr/bin/google-chrome-stable'
    },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36'
});

sock.on('loading_screen', (percent, message) => {
    console.log('LOADING SCREEN', percent, message);
});

console.log(sock)

sock.on("qr", (qr) => {
  console.log('QR RECEIVED', qr);
  qrcode.generate(qr, { small: true });
});

sock.on("ready", () => {
  console.log("sock is ready!");
});

sock.on('authenticated', () => {
    console.log('AUTHENTICATED');
});

sock.on('auth_failure', message => {
// jika pemulihan sesi tidak berhasil
    console.error('AUTHENTICATION FAILURE', message);
});

// auto reject jika telpon masuk
sock.on("call", async call => {
  await call.reject();
  await sock.sendMessage(call.from, `\`\`\`This number can only receive text messages!\`\`\``)
});

sock.on('ready', async () => {
    console.log(`${JSON.stringify(sock.info)}`)
});

sock.initialize(); 

// message responses
sock.on("message", async (message) => {
	 require("./faxx")(sock, message)
})
}

faxxStart()
	
let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(chalk.redBright(`Update ${__filename}`));
	delete require.cache[file];
	require(file);
});