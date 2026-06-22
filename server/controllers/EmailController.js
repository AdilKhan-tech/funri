const nodemailer = require("nodemailer");

class EmailController {
  static async sendContactEmail(req, res) {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#3b5d50">New Contact Message</h2>
          <hr>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
            <tr><td style="padding:6px"><strong>Name:</strong></td><td>${name}</td></tr>
            <tr><td style="padding:6px"><strong>Email:</strong></td><td>${email}</td></tr>
            <tr><td style="padding:6px"><strong>Subject:</strong></td><td>${subject || 'N/A'}</td></tr>
          </table>
          <h3>Message</h3>
          <div style="padding:15px;background:#f0f7f4;border-radius:5px">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"Furni Store" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: `Contact: ${subject || 'New Message from ' + name}`,
        html,
      });

      return res.json({ message: "Contact email sent successfully" });
    } catch (error) {
      console.error("Contact email error:", error.message);
      return res.status(500).json({ message: "Failed to send email", error: error.message });
    }
  }

  static async sendOrderEmail(req, res) {
    try {
      const { formData, cartItems, total } = req.body;

      if (!formData || !cartItems) {
        return res.status(400).json({ message: "Missing order data" });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const itemsHtml = cartItems
        .map(
          (item) =>
            `<tr>
              <td style="padding:8px;border:1px solid #ddd">${item.name}</td>
              <td style="padding:8px;border:1px solid #ddd">${item.quantity}</td>
              <td style="padding:8px;border:1px solid #ddd">$${Number(item.price).toFixed(2)}</td>
              <td style="padding:8px;border:1px solid #ddd">$${(item.price * item.quantity).toFixed(2)}</td>
            </tr>`
        )
        .join("");

      const html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#3b5d50">New Order Received!</h2>
          <hr>
          <h3>Customer Details</h3>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
            <tr><td style="padding:6px"><strong>Name:</strong></td><td>${formData.firstName} ${formData.lastName}</td></tr>
            <tr><td style="padding:6px"><strong>Email:</strong></td><td>${formData.email}</td></tr>
            <tr><td style="padding:6px"><strong>Phone:</strong></td><td>${formData.phone}</td></tr>
            <tr><td style="padding:6px"><strong>Address:</strong></td><td>${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}</td></tr>
          </table>
          <h3>Order Items</h3>
          <table style="width:100%;border-collapse:collapse">
            <thead>
              <tr style="background:#3b5d50;color:#fff">
                <th style="padding:8px;border:1px solid #ddd">Product</th>
                <th style="padding:8px;border:1px solid #ddd">Qty</th>
                <th style="padding:8px;border:1px solid #ddd">Price</th>
                <th style="padding:8px;border:1px solid #ddd">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
              <tr style="background:#f0f7f4">
                <td colspan="3" style="padding:8px;border:1px solid #ddd;text-align:right"><strong>Order Total:</strong></td>
                <td style="padding:8px;border:1px solid #ddd"><strong>$${Number(total).toFixed(2)}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      `;

      await transporter.sendMail({
        from: `"Furni Store" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: `New Order from ${formData.firstName} ${formData.lastName}`,
        html,
      });

      return res.json({ message: "Order email sent successfully" });
    } catch (error) {
      console.error("Email error:", error.message);
      return res.status(500).json({ message: "Failed to send email", error: error.message });
    }
  }
}

module.exports = EmailController;
