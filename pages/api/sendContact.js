const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { values, token } = JSON.parse(req.body);

  const human = await validateHuman(token);

  if (human < 0.7) {
    res.status(400);
    res.json({ errors: ["Please, you're not fooling us, bot."] });
    return;
  }

  async function validateHuman(token) {
    const secret = process.env.GOOGLE_PROJECT_API_KEY;
    const project = process.env.GOOGLE_PROJECT_ID;
    const key = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY;

    const reReq = {
      event: {
        token: token,
        siteKey: key,
        expectedAction: 'submit',
      },
    };

    const response = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1beta1/projects/${project}/assessments?key=${secret}`,
      {
        method: 'POST',
        body: JSON.stringify(reReq),
      }
    );

    const data = await response.json();

    return data.score;
  }

  const message = `
   First Name: ${values.firstName}\r\n
   Last Name: ${values.lastName}\r\n
   Email: ${values.email}\r\n
   Message: ${values.message}
    `;

  const data = {
    to: 'andrew@theuncommonspirit.com',
    from: 'andrew@theuncommonspirit.com',
    subject: 'EMBURY MEDIA-New Contact Form Submission',
    text: message,
    html: message.replace(/\r\n/g, ',<br>'),
  };

  try {
    await sgMail.send(data);
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }

  res.status(200).json({ status: 'Ok' });
};
