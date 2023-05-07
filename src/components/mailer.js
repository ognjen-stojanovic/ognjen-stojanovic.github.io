//const nodemailer = await import('nodemailer').catch(err => console.log(err));
const nodemailer = await import('nodemailer').catch(err => console.log(err));

let sender = '';
let content = '';
let email = '';
let userSubject = '[gfp.rs] ';
let sendTo = 's.ognjen.business@gmail.com';
//const nodemailer = null;


export async function getUserData(form){
    sender = form.sender;
    content = form.content;
    email = form.email;
    userSubject += sender;
    main();
}

function main(){
    if(email == '' || content =='' || sender == '')
        return;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
                user: 's.ognjen.business@gmail.com',
                pass: ''
            }
    }).catch(err => console.log(err));
    const mailOptions = {
        from: `${sender} <${email}>`,
        to: sendTo,
        subject: userSubject,
        text: content
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.error('Error sending email.', error);
        }
        console.log('Email sent successfully.', info.response);
        sender = '';
        email = '';
        userSubject = '[gfp.rs] ',
        content = '';

    }).catch(err => console.log(err));
}
