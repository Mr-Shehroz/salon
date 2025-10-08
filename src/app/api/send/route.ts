// app/api/send/route.ts
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, phone, service, date, time } =
      await req.json();

    // Validate required fields
    if (!firstName || !lastName || !phone || !service || !date || !time) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Create reusable transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Use your SMTP server
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
      subject: "New Appointment Booking – Beauty Salon",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8f9fa;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
    <tr>
      <td style="padding: 32px 24px; text-align: center; background: #6B0606; color: white;">
        <h1 style="margin: 0; font-size: 24px; font-weight: 700;">New Appointment Request</h1>
        <p style="margin: 8px 0 0; opacity: 0.9; font-size: 16px;">Beauty Salon Booking</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
              <strong style="color: #555; font-size: 14px;">CLIENT INFORMATION</strong>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0;">
              <p style="margin: 6px 0; color: #333;"><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p style="margin: 6px 0; color: #333;"><strong>Phone:</strong> ${phone}</p>
            </td>
          </tr>
        </table>

        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
              <strong style="color: #555; font-size: 14px;">APPOINTMENT DETAILS</strong>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0;">
              <p style="margin: 6px 0; color: #333;"><strong>Service:</strong> ${
                service.charAt(0).toUpperCase() + service.slice(1)
              }</p>
              <p style="margin: 6px 0; color: #333;"><strong>Date:</strong> ${new Date(
                date
              ).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</p>
              <p style="margin: 6px 0; color: #333;"><strong>Time:</strong> ${time}</p>
            </td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #888; font-size: 13px;">
          <p style="margin: 0;">This message was sent from your beauty salon website.</p>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
`,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    const errorMessage =
      typeof error === "object" && error !== null && "message" in error
        ? (error as { message?: string }).message
        : undefined;
    return Response.json(
      { error: errorMessage || "Failed to send email" },
      { status: 500 }
    );
  }
}
