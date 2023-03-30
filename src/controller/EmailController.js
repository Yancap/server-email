const nodemailer = require('nodemailer')

class EmailController{
    async create(request, response){
        const { name, email, message } = request.body
        console.log("chegou");
        console.log(request.body);
        const send = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: "pizzascriptdev@gmail.com",
              pass: "mcbntoqnavifynkx"
            }
          });

        const receive = {
            from: `Cliente: ${name} <${email}>`,
            to: "pizzascriptdev@gmail.com",
            subject: `Mensagem do Cliente: ${name}`,
            text: `Nome: ${name}, Email: ${email}\n${message}`,
            };
        const responseTo = {
        from: "PizzaScript <pizzascriptdev@gmail.com>",
        to: email,
        subject: "Mensagem recebida com sucesso",
        text: `Olá ${name}, gostaria de agradecer pela mensagem! 
Assim que possível, nossa equipe lhe retornará. :)
        `,
        };

        send.sendMail(receive, error =>{
            if (error) return response.json({
                error: true,
                message: 'Email não enviado'
            })
        })
        send.sendMail(responseTo, error =>{
            if (error) return response.json({
                error: true,
                message: 'Email não enviado'
            })
        })
        return response.json({
            message: 'OK'
        })
    }
}

module.exports = EmailController