/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";

const PORT = 3000;
const isVercel = process.env.VERCEL === "1";
const ENQUIRIES_FILE = isVercel
  ? path.join("/tmp", "enquiries.json")
  : path.join(process.cwd(), "data", "enquiries.json");

// Helper function to send email notification to the company on new enquiries
async function sendEnquiryEmail(enquiry: any) {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const receiver = process.env.NOTIFICATION_RECEIVER_EMAIL || "bahadursam0405@gmail.com";

  if (!user || !pass) {
    console.warn(
      `[EMAIL BYPASSED] SMTP credentials are not configured in your environment variables. ` +
      `Enquiry from "${enquiry.name}" saved successfully but notification email was not sent.\n` +
      `To enable active email alerts, set SMTP_USER and SMTP_PASS in your Secrets / environment setup.`
    );
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subjectMap: Record<string, string> = {
      "industrial-solutions": "Industrial & Raw Material Solutions",
      "trading": "B2B Sourcing & Custom Trading",
      "lead-generation": "Global Lead Generation Inquiry",
      "general": "General Enterprise Inquiry"
    };

    const friendlySubject = subjectMap[enquiry.subject] || enquiry.subject || "General Inquiry";

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
Date/Time: ${new Date(enquiry.createdAt).toLocaleString()}
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
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-family: monospace;">${new Date(enquiry.createdAt).toLocaleString()}</td>
              </tr>
            </table>
            
            <div style="background-color: #ffffff; border-left: 4px solid #056D34; padding: 15px; margin: 20px 0; border-radius: 4px; box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);">
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
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[EMAIL SENT] Notification sent successfully! MessageId: ${info.messageId}`);
  } catch (error) {
    console.error("Error dispatching enquiry notification email via SMTP:", error);
  }
}

let mongoClient: MongoClient | null = null;
let isMongoConnecting = false;

async function getMongoClient(): Promise<MongoClient | null> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return null;
  }
  if (mongoClient) {
    return mongoClient;
  }
  if (isMongoConnecting) {
    return null;
  }
  isMongoConnecting = true;
  try {
    console.log("Attempting to connect to MongoDB...");
    const client = new MongoClient(uri, {
      connectTimeoutMS: 5000,
      serverSelectionTimeoutMS: 5000,
    });
    await client.connect();
    console.log("Successfully connected to MongoDB!");
    mongoClient = client;
    isMongoConnecting = false;
    return mongoClient;
  } catch (error) {
    console.error("Failed to connect to MongoDB, falling back to local file storage:", error);
    isMongoConnecting = false;
    return null;
  }
}

// Ensure data folder and file exist with some pre-populated sample data
function initDatabase() {
  const dir = path.dirname(ENQUIRIES_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  if (!fs.existsSync(ENQUIRIES_FILE)) {
    const sampleEnquiries = [
      {
        id: "enq_1",
        name: "Rajesh Kumar",
        email: "r.kumar@tata.com",
        company: "Tata Steel Group",
        phone: "+91 98112 34567",
        subject: "industrial-solutions",
        message: "We are interested in procuring energy-efficient machinery upgrades for our manufacturing division in Jamshedpur. Please send details and schedule an initial consult.",
        status: "new",
        createdAt: new Date(Date.now() - 4 * 3600000).toISOString() // 4 hours ago
      },
      {
        id: "enq_2",
        name: "Anjali Sharma",
        email: "anjali@reliance.com",
        company: "Reliance Sourcing Office",
        phone: "+91 22 2456 7890",
        subject: "trading",
        message: "Looking for an established partner to source high-grade sustainable agriculture minerals for our organic product packaging and distribution network. Let's connect.",
        status: "contacted",
        createdAt: new Date(Date.now() - 36 * 3600000).toISOString() // 1.5 days ago
      },
      {
        id: "enq_3",
        name: "Vikram Malhotra",
        email: "v.malhotra@lnt.com",
        company: "Larsen & Toubro Infrastructure",
        phone: "+91 99887 76655",
        subject: "lead-generation",
        message: "We need B2B matchmaking and qualified prospects generation services for our smart city projects divisions in North India. Looking forward to a proposal.",
        status: "new",
        createdAt: new Date(Date.now() - 12 * 3600000).toISOString() // 12 hours ago
      }
    ];
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(sampleEnquiries, null, 2), "utf-8");
  }
}

initDatabase();

function readEnquiries() {
  try {
    if (fs.existsSync(ENQUIRIES_FILE)) {
      const data = fs.readFileSync(ENQUIRIES_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading enquiries:", error);
  }
  return [];
}

function writeEnquiries(enquiries: any[]) {
  try {
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Error writing enquiries:", error);
    return false;
  }
}

async function seedMongoIfEmpty(db: any) {
  try {
    const count = await db.collection("enquiries").countDocuments();
    if (count === 0) {
      console.log("MongoDB enquiries collection is empty. Seeding with initial sample enquiries...");
      const sampleEnquiries = readEnquiries();
      const docsToInsert = sampleEnquiries.map((e: any) => ({
        _id: e.id,
        name: e.name,
        email: e.email,
        company: e.company || "",
        phone: e.phone || "",
        subject: e.subject || "general",
        message: e.message,
        status: e.status || "new",
        createdAt: e.createdAt || new Date().toISOString()
      }));
      if (docsToInsert.length > 0) {
        await db.collection("enquiries").insertMany(docsToInsert);
        console.log(`Successfully seeded ${docsToInsert.length} enquiries to MongoDB.`);
      }
    }
  } catch (err) {
    console.error("Error seeding MongoDB:", err);
  }
}

const app = express();
app.use(express.json());

// API Routes
app.get("/api/health", (req, res) => {
    res.json({ status: "ok", port: PORT });
  });

  // Get enquiries with filtering and search
  app.get("/api/enquiries", async (req, res) => {
    const { search, status, subject } = req.query;
    
    const client = await getMongoClient();
    if (client) {
      try {
        const db = client.db("jagdamba");
        await seedMongoIfEmpty(db);
        
        const query: any = {};
        if (search) {
          const searchRegex = new RegExp(String(search), "i");
          query.$or = [
            { name: searchRegex },
            { email: searchRegex },
            { company: searchRegex },
            { message: searchRegex }
          ];
        }
        if (status) {
          query.status = status;
        }
        if (subject) {
          query.subject = subject;
        }
        
        const docs = await db.collection<any>("enquiries").find(query).toArray();
        const enquiries = docs.map((doc: any) => {
          const { _id, ...rest } = doc;
          return { id: String(_id), ...rest };
        });
        
        enquiries.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        res.json(enquiries);
        return;
      } catch (err) {
        console.error("Failed to fetch from MongoDB, falling back to JSON storage:", err);
      }
    }

    // Fallback: local JSON
    let enquiries = readEnquiries();

    if (search) {
      const searchStr = String(search).toLowerCase();
      enquiries = enquiries.filter((e: any) => 
        e.name.toLowerCase().includes(searchStr) ||
        (e.company && e.company.toLowerCase().includes(searchStr)) ||
        e.email.toLowerCase().includes(searchStr) ||
        e.message.toLowerCase().includes(searchStr)
      );
    }

    if (status) {
      enquiries = enquiries.filter((e: any) => e.status === status);
    }

    if (subject) {
      enquiries = enquiries.filter((e: any) => e.subject === subject);
    }

    enquiries.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    res.json(enquiries);
  });

  // Post a new enquiry
  app.post("/api/enquiries", async (req, res) => {
    const { name, email, company, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ error: "Name, email, and message are required fields." });
      return;
    }

    const id = "enq_" + Math.random().toString(36).substr(2, 9);
    const newEnquiry = {
      name,
      email,
      company: company || "",
      phone: phone || "",
      subject: subject || "general",
      message,
      status: "new",
      createdAt: new Date().toISOString()
    };

    const client = await getMongoClient();
    let savedToMongo = false;

    if (client) {
      try {
        const db = client.db("jagdamba");
        await db.collection<any>("enquiries").insertOne({
          _id: id,
          ...newEnquiry
        });
        savedToMongo = true;
        console.log("Saved new enquiry to MongoDB with ID:", id);
      } catch (err) {
        console.error("Failed to save to MongoDB, falling back to local file:", err);
      }
    }

    // Always write to local JSON fallback to keep local storage fresh and up-to-date
    const enquiries = readEnquiries();
    enquiries.push({ id, ...newEnquiry });
    writeEnquiries(enquiries);

    console.log("Saved new enquiry locally from:", name, "email:", email);

    // Dispatch real email notification to the company (async, non-blocking)
    sendEnquiryEmail({ id, ...newEnquiry }).catch((err) => {
      console.error("Error sending email notification asynchronously:", err);
    });

    res.status(201).json({ success: true, enquiry: { id, ...newEnquiry }, savedToMongo });
  });

  // Mark an enquiry as contacted
  app.put("/api/enquiries/:id", async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || (status !== "new" && status !== "contacted")) {
      res.status(400).json({ error: "Invalid status value." });
      return;
    }

    const client = await getMongoClient();
    let updatedInMongo = false;

    if (client) {
      try {
        const db = client.db("jagdamba");
        const result = await db.collection<any>("enquiries").updateOne(
          { _id: id },
          { $set: { status } }
        );
        if (result.matchedCount > 0) {
          updatedInMongo = true;
          console.log("Updated enquiry status in MongoDB:", id, "to:", status);
        }
      } catch (err) {
        console.error("Failed to update in MongoDB:", err);
      }
    }

    const enquiries = readEnquiries();
    const index = enquiries.findIndex((e: any) => e.id === id);

    if (index === -1 && !updatedInMongo) {
      res.status(404).json({ error: "Enquiry not found." });
      return;
    }

    let updatedEnquiry = null;
    if (index !== -1) {
      enquiries[index].status = status;
      writeEnquiries(enquiries);
      updatedEnquiry = enquiries[index];
    } else {
      updatedEnquiry = { id, status };
    }

    res.json({ success: true, enquiry: updatedEnquiry, updatedInMongo });
  });

  // Delete an enquiry
  app.delete("/api/enquiries/:id", async (req, res) => {
    const { id } = req.params;
    
    const client = await getMongoClient();
    let deletedInMongo = false;

    if (client) {
      try {
        const db = client.db("jagdamba");
        const result = await db.collection<any>("enquiries").deleteOne({ _id: id });
        if (result.deletedCount > 0) {
          deletedInMongo = true;
          console.log("Deleted enquiry from MongoDB:", id);
        }
      } catch (err) {
        console.error("Failed to delete from MongoDB:", err);
      }
    }

    const enquiries = readEnquiries();
    const filtered = enquiries.filter((e: any) => e.id !== id);

    if (enquiries.length === filtered.length && !deletedInMongo) {
      res.status(404).json({ error: "Enquiry not found." });
      return;
    }

    writeEnquiries(filtered);
    res.json({ success: true, message: "Enquiry deleted successfully.", deletedInMongo });
  });

  // Vite Integration and listen
  async function startServer() {
    if (process.env.NODE_ENV !== "production" && process.env.VERCEL !== "1") {
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } else {
      const distPath = path.join(process.cwd(), "dist");
      app.use(express.static(distPath));
      app.get("*", (req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
      });
    }

    if (process.env.VERCEL !== "1") {
      app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);
      });
    }
  }

  startServer();

export default app;
