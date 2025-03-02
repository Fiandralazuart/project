const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(express.static(path.join(__dirname, 'index.html')))
app.use(express.static(path.join(__dirname,'/public')))

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/send_email', (req, res) => {
   console.log(req.body)
   const from = req.body.firstName
   const to = req.body.email
   const subject = req.body.subject
   const message = req.body.message
   
   const transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
            user: 'jamalzudin09',
            pass: 'vekw ztqd isxd dxst'
         }
      })
   const data = {
      from: from,
      to: to,
      subject: subject,
      text: `Terimakasih telah menghubungi kami, merespon pertanyaan tentang: ${message}. Dimohon Bapak/Ibu dapat membalas email ini beserta rincian rencapa Bapak/Ibu sekalian. Terimakasih hormat Kami RistaHomestay. `
   }
   transporter.sendMail(data, (error, info) => {
      if(error) {
         console.log(error)
      } else {
         console.log("Email Send:" + info.response)
      }
      res.redirect('/')
   })
})

app.listen(5000, () => {
   console.log('user hit the server')
})

