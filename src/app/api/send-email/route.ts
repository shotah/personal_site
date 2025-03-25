import {NextRequest, NextResponse} from 'next/server';
import nodemailer from 'nodemailer';
import log from '../../../lib/logger'; // Import the logger

// Define the type for the request body
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();
    log('info', 'Received contact form data:', body);

    // 1. Validate the data
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        {error: 'All fields are required'},
        {status: 400},
      );
    }

    if (!emailRegex.test(body.email)) {
      return NextResponse.json({error: 'Invalid email format'}, {status: 400});
    }

    // 2. Configure Nodemailer
    // **Strip the quotes from the password**
    const password = process.env.EMAIL_SERVER_PASSWORD?.replace(/^"|"$/g, '');

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Hardcoded
      port: 465, // Hardcoded
      secure: true, // Hardcoded
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: password, // Use the stripped password
      },
    });

    // 3. Send the email
    const mailOptions = {
      from: process.env.EMAIL_SERVER_USER, // Use the user as the from
      to: process.env.EMAIL_SERVER_USER, // Use the user as the to
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <p>Name: ${body.name}</p>
        <p>Email: ${body.email}</p>
        <p>Message: ${body.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // 4. Return a success response
    return NextResponse.json(
      {message: 'Email sent successfully'},
      {status: 200},
    );
  } catch (error) {
    log('error', 'Error sending email:', error);
    return NextResponse.json({error: 'Failed to send email'}, {status: 500});
  }
}
