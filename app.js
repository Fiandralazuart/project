const nodemailer = require('nodemailer')

export async function kirimEmail(param) {
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: 'jamalzudin09',
         pass: 'vekw ztqd isxd dxst'
      }
   })
   const sendMail = transporter.sendMail({
      from: 'RistaHomestay',
      to: `${param.username}`,
      subject: 'Customer service RistaHomestay',
      text: 'Terimakasih telah menghubungi kami, Untuk informasi Selanjutnya tentang penginapan silahkan membalas email ini tentang rincian perjalanan bapak/ibu.'
   })
   console.log('email berhasil dikirim')
   console.log(param.username, param.email)
}