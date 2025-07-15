import { Table } from "../model/table.model.js";
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Verify failed:", error);
  } else {
    console.log("✅ Server ready to send mail");
  }
});


export const TableController = {
  GetTable: async (req, res) => {
    const user = await Table.find();
    res.status(200).send(user);
  },
  PostTable: async (req, res) => {
    const user = await Table.create(req.body);

    const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #D2691E;">Hello ${req.body.name},</h2>
          <p>Thank you for your reservation at <strong>food-funday</strong>!</p>
          <p>Here are your reservation details:</p>
          <ul>
            <li><strong>Date:</strong> ${req.body.date}</li>
            <li><strong>Number of People:</strong> ${req.body.person}</li>
            <li><strong>Phone:</strong> ${req.body.phone}</li>
          </ul>
          <p>We look forward to serving you soon!</p>
          <p style="margin-top: 20px;">Best regards,<br/>The food-funday Team</p>
          <hr style="border: none; border-top: 1px solid #eee;"/>
          <p style="font-size: 12px; color: #888;">If you have any questions, feel free to contact us.For any Conservation Call us - 1111111111</p>
        </div>
      `;

    await transporter.sendMail({
      from: `"food-funday" <${process.env.EMAIL_USER}>`,
      to: req.body.email,
      subject: "Your Reservation Confirmation at food-funday",
      text: `Hello ${req.body.fullName},

Thank you for your reservation at food-funday!

Details:
Date: ${req.body.date}
People: ${req.body.people}
Phone: ${req.body.phone}

We look forward to serving you soon!

- The food-funday Team`,
      html: htmlBody,
    });
    res.status(201).json(user);
  },
  UpdateTable: async (req, res) => {
    const { id } = req.params;
    const Update = await Table.findByIdAndUpdate({ id }, req.body, {
      new: true,
    });
    res.status(200).json(Update);
  },
  DeleteTable: async (req, res) => {
    const { id } = req.params;
    const Delete = await Table.findByIdAndDelete({ id });

    if (!Delete) {
      return res.status(404).json({ message: "Table Not Found" });
    }
    res.status(200).json({ message: "Table Data Deleted", item: Delete });
  },
};
