import sgMail from "@sendgrid/mail";
import "dotenv/config";
import { NextResponse } from "next/server";

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
  try {
    await sgMail.send(msg);
    //console.log(msg);
    return NextResponse.json({
      message: "This worked",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ message: error, success: false });
  }
}
