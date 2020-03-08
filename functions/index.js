
const functions = require('firebase-functions')
const sgMail = require('@sendgrid/mail')

const SENDGRID_API_KEY = functions.config().sendgrid.key

sgMail.setApiKey(SENDGRID_API_KEY)

exports.fireOrder =  functions.https.onCall(async (data) => {

    const msg = {
        to: "maximvasylenko228322@gmail.com",
        from: "app.vltuning@mail.com",
        subject: "New order",
        templateId: "d-1692f446d9644963bd72e24789661911",
        substitutionWrappers: ['{{', '}}'],
        substitutions: {
            example: "Blblb"
        }
    }
    try{
        const response = await sgMail.send(msg)
        console.log("Sended!")
    } catch(e)
    {console.log(e)}


})