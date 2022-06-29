const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan le owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'PTxW7omy',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = true // auto read pesan / message
//global.autorecording = true //status auto merekam ( auto record )
//global.autoketik = true //status auto mengetik (auto typing)
//global.available = true //status online (online)

// Other
global.botname = "Aqua Botz" //namabot kalian
global.ownername= "sanzzz" //nama kalian
global.myweb ="https://instagram.com/AquaBotz" //bebas asal jan hapus
global.youtube = "https://youtube.com/channel/AquaBotzReall" //bebas asal jan hapus
global.github = "https://github.com/AquaBotz" //bebas
global.email = "sanzbusiness01@gmaill.com" //bebas
global.region = "Indonesia" //bebas
global.ownernomer = "6283837049723" // nomor wa kalian
global.ownernomerr = "+6283837049723" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://i.postimg.cc/JnB8mRbj/20220627-181956.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6283837049723","6283837049723"] //ganti agar fitur owner bisa di gunakan
global.packname = '©AquaBotz' //sticker wm ubah
global.author = 'Bukan Aqua Mineral' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Trimakasih~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !!',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'COMMAND INI HANYA BISA DIGUNAKAN GEMPY',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳Process...',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'HALO @user SELAMAT DATANG DI @subject JANGAN LUPA BACA DESC\n\nJASA RUN BOT SANZZZ\nHARGA MURMER\nCHAT AJA WA DIBAWAH\nwa.me/6283837049723\nBOT AKTIF 24JAM\TANPA INTERNET,BOT TETEP ON'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
