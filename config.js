const fs = require('fs')
const chalk = require('chalk')

// MAKASIHLAH KE BANG ZENZ :)
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// HMM UDAH FREE DECK
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
}

// NAMBAH BOLEH HAPUS JANGAN -_-
global.owner = ['6287798004857']
global.premium = ['6287798004857']
global.packname = 'AzzBot√'
global.author = 'AzzBot-MD'
global.sessionName = 'Xavior'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 5
}
global.thumb = fs.readFileSync('./lib/xavi.jpg')
global.tutor = fs.readFileSync('./video/intro.mp4')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }
global.menu1 = fs.readFileSync('./foto/1.jpg')
global.menu2 = fs.readFileSync('./foto/1.jpg')
global.menu3 = fs.readFileSync('./foto/1.jpg')
global.menu4 = fs.readFileSync('./foto/1.jpg')
global.menu5 = fs.readFileSync('./foto/1.jpg')
global.menu6 = fs.readFileSync('./foto/1.jpg')
global.menu7 = fs.readFileSync('./foto/1.jpg')
global.menu8 = fs.readFileSync('./foto/1.jpg')
global.menu9 = fs.readFileSync('./foto/1.jpg')
global.menu10 = fs.readFileSync('./foto/1.jpg')
global.menu11 = fs.readFileSync('./foto/1.jpg')
global.menu12 = fs.readFileSync('./foto/1.jpg')
global.menu13 = fs.readFileSync('./foto/1.jpg')
global.menu14 = fs.readFileSync('./foto/1.jpg')
global.menu15 = fs.readFileSync('./foto/1.jpg')
global.menu16 = fs.readFileSync('./foto/1.jpg')
global.menu17 = fs.readFileSync('./foto/1.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
