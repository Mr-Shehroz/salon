// app/api/send/route.ts
import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, phone, service, date, time } = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !phone || !service || !date || !time) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Create reusable transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Use your SMTP server
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify connection (optional but helpful for debugging)
    await transporter.verify();

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: `${process.env.EMAIL_USER}`, // Your destination email
      subject: 'New Appointment Booking – Beauty Salon',
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
        <p><strong>Time:</strong> ${time}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error: any) {
    console.error('Email error:', error);
    return Response.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}