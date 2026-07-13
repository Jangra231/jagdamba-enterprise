import { Schema, model, models, Document } from "mongoose";

export interface EnquiryDocument extends Document {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
  status: "new" | "contacted";
  createdAt: Date;
}

const EnquirySchema = new Schema<EnquiryDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    company: { type: String, default: "", trim: true },
    phone: { type: String, default: "", trim: true },
    subject: {
      type: String,
      default: "general",
      enum: [
        "general",
        "lead-generation",
        "trading",
        "supply-chain",
        "industrial-solutions",
        "consulting",
      ],
    },
    message: { type: String, required: true },
    status: { type: String, enum: ["new", "contacted"], default: "new" },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

// Prevent model re-compilation on hot-reload / multiple serverless invocations
export default models.Enquiry || model<EnquiryDocument>("Enquiry", EnquirySchema);
