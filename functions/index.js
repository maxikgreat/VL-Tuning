
const functions = require('firebase-functions')
const sgMail = require('@sendgrid/mail')

const SENDGRID_API_KEY = functions.config().sendgrid.key

sgMail.setApiKey(SENDGRID_API_KEY)

exports.fireOrder = functions.https.onCall((data) => {

    const msg = {
        to: "vadim.74@ukr.net",
        from: "app.vltuning@mail.com",
        subject: "Order from VL",
        templateId: "d-1692f446d9644963bd72e24789661911",
        dynamic_template_data: {
            orderId: data.orderId,
            items: data.items,
            total: data.total,
            quantity: data.quantity,
            client: data.client
        }
    }

    sgMail.send(msg)
})