"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { error: "Missing fields" };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["samiulalam220@gmail.com"],
      subject: `New Message from ${name}`,
      reply_to: email,
      text: message,
      html: `
        <div style="font-family: sans-serif; font-size: 16px; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #ccc;">
            ${message}
          </blockquote>
        </div>
      `,
    });

    if (data.error) {
      return { error: data.error.message };
    }

    return { success: true };
  } catch (error) {
    return { error: error.message };
  }
}
