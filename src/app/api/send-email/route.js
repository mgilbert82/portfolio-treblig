import sgMail from "@sendgrid/mail";
import "dotenv/config";
import { NextResponse } from "next/server";
import axios from "axios";

const {
  NEXT_PUBLIC_SENDGRID_API_KEY,
  NEXT_PUBLIC_TO_EMAIL,
  NEXT_PUBLIC_FROM_EMAIL,
} = process.env;

sgMail.setApiKey(NEXT_PUBLIC_SENDGRID_API_KEY);

export async function POST(req) {
  const data = await req.json();

  const msg = {
    to: NEXT_PUBLIC_TO_EMAIL,
    from: NEXT_PUBLIC_FROM_EMAIL,
    subject: "Message Portfolio - Treblig.fr",
    html: `<p>Message from: ${data.username}</p>
          <p>The message: ${data.message}</p>
          <p>My email is: ${data.email}</p>`,
  };

  // const verifyRecaptcha = async (token) => {
  //   const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  //   const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
  //   return await axios.post(url);
  // };

  try {
    await sgMail.send(msg);
    const res = await verifyRecaptcha(data.token);
    //console.log("verify", res);
    // if (res.data.success) {
    //   await sgMail.send(msg);
    //   //console.log(msg);
    //   return NextResponse.json(
    //     { status: 200 },
    //     {
    //       message: "This worked",
    //       success: true,
    //     }
    //   );
    // } else {
    //   return NextResponse.json({
    //     message: "reCAPTCHA verification failed",
    //     sucess: false,
    //   });
    // }
  } catch (error) {
    return NextResponse.json(
      { status: 400 },
      { message: error, success: false }
    );
  }
}
