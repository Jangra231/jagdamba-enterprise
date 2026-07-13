"use server";

import { redirect } from "next/navigation";
import nodemailer from "nodemailer";
import dbConnect from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

export interface FormState {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export async function submitForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const subject = String(formData.get("subject") || "general").trim();
  const message = String(formData.get("message") || "").trim();

  // Server-side validation
  const errors: Record<string, string> = {};
  if (!name) errors.name = "Full name is required";
  if (!email) {
    errors.email = "Email address is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please provide a valid email";
  }
  if (!message) errors.message = "Please type a message";

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please fix the highlighted fields.", errors };
  }

  // Save to MongoDB
  try {
    await dbConnect();
    const enquiry = new Enquiry({ name, email, company, phone, subject, message });
    await enquiry.save();
  } catch (error) {
    console.error("Failed to save enquiry to MongoDB:", error);
    return {
      success: false,
      message: "We couldn't save your enquiry right now. Please try again later.",
    };
  }

  // Send email notification — awaited so Vercel doesn't kill the function early
  await sendEnquiryEmail({ name, email, company, phone, subject, message });

  return {
    success: true,
    message: "Thank you! Your enquiry has been received successfully.",
  };
}

async function sendEnquiryEmail(enquiry: {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const receiver =
    process.env.NOTIFICATION_RECEIVER_EMAIL || "bahadursam0405@gmail.com";

  if (!user || !pass) {
    console.warn(
      "[EMAIL BYPASSED] SMTP credentials are not configured. Enquiry saved but no notification sent."
    );
    return;
  }

  const subjectMap: Record<string, string> = {
    "industrial-solutions": "Industrial & Raw Material Solutions",
    trading: "B2B Sourcing & Custom Trading",
    "lead-generation": "Global Lead Generation Inquiry",
    "supply-chain": "Supply Chain Logistics Solutions",
    consulting: "Consulting & Advisory Inquiry",
    general: "General Enterprise Inquiry",
  };

  const friendlySubject = subjectMap[enquiry.subject] || "General Inquiry";

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const mailOptions = {
    from: `"Jagdamba Portal" <${user}>`,
    to: receiver,
    replyTo: enquiry.email,
    subject: `[New Enquiry] ${friendlySubject} - from ${enquiry.name}`,
    text: `
New B2B Enquiry Received on Jagdamba Enterprises Portal

--------------------------------------------------
Contact Details:
Name: ${enquiry.name}
Email: ${enquiry.email}
Company: ${enquiry.company || "Not Specified"}
Phone: ${enquiry.phone || "Not Specified"}
Category: ${friendlySubject}
Date/Time: ${new Date().toLocaleString()}
--------------------------------------------------

Message:
${enquiry.message}

--------------------------------------------------
This inquiry was saved to the database. Reply to this email to contact the user directly.
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #fcfbf9;">
        <div style="background-color: #0A0A0A; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h2 style="color: #056D34; margin: 0; font-size: 20px; letter-spacing: 1px;">JAGDAMBA ENTERPRISES</h2>
          <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 12px; font-family: monospace;">NEW SOURCING ENQUIRY REGISTERED</p>
        </div>
        <div style="padding: 20px; color: #333333; line-height: 1.6;">
          <p style="font-size: 16px; font-weight: bold; margin-top: 0;">Hello Sourcing Desk,</p>
          <p>A new high-fidelity inquiry has been submitted through the portal contact form. Below are the details:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f2eb;">
              <td style="padding: 10px; font-weight: bold; width: 120px; border-bottom: 1px solid #e0e0e0;">Sender Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${enquiry.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Email Address:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;"><a href="mailto:${enquiry.email}" style="color: #0A0A0A; font-weight: bold;">${enquiry.email}</a></td>
            </tr>
            <tr style="background-color: #f5f2eb;">
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Company:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${enquiry.company || "<em>Not Specified</em>"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Phone Number:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${enquiry.phone || "<em>Not Specified</em>"}</td>
            </tr>
            <tr style="background-color: #f5f2eb;">
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Subject:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #0A0A0A;">${friendlySubject}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Received At:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-family: monospace;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
          <div style="background-color: #ffffff; border-left: 4px solid #056D34; padding: 15px; margin: 20px 0; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; color: #0A0A0A;">Message / Request Details:</h4>
            <p style="margin: 0; font-style: italic; font-size: 14px; white-space: pre-wrap;">${enquiry.message}</p>
          </div>
          <p style="margin-bottom: 0;">This enquiry has been successfully logged into your portal database. You can respond directly to this email to reply to the client.</p>
        </div>
        <div style="background-color: #0A0A0A; color: #888888; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; font-size: 11px;">
          <p style="margin: 0;">© ${new Date().getFullYear()} Jagdamba Enterprises. All rights reserved.</p>
          <p style="margin: 5px 0 0 0;">Strict B2B Confidentiality Audited Portal • Safe Pipeline Assurance</p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`[EMAIL SENT] Notification sent successfully! MessageId: ${info.messageId}`);
  } catch (error) {
    console.error("Error dispatching enquiry notification email via SMTP:", error);
  }
}
