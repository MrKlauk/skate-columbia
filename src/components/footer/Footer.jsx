import { useState } from "react";
import toast from "react-hot-toast";
import "./Footer.css";

const Footer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);
        formData.append("access_key", "1c0e93ee-2e73-44ed-8b48-73ae6a2c5ffd");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();

            if (response.ok) {
                toast.success("Message Sent", { className: "toast-success" });
                setName("");
                setEmail("");
                setMessage("");
            } else {
                toast.error("Error: " + data.message, { className: "toast-error" });
            }
        } catch (error) {
            toast.error("Sorry, we couldn't send your message", { className: "toast-error" });
        } finally {
            setSending(false);
        }
    };

    return (
        <footer className="main-footer">
            <div className="footer-contact">
                <h2>Contact Us</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="contact-name">Name:</label>
                        <input
                            id="contact-name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="contact-email">Email:</label>
                        <input
                            id="contact-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </p>
                    <p>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Message"
                            required
                        />
                    </p>
                    <p>
                        <button type="submit" disabled={sending}>
                            {sending ? "Sending..." : "Submit"}
                        </button>
                    </p>
                </form>
            </div>
            <p className="footer-copy">&copy; MrKlauk</p>
        </footer>
    );
};

export default Footer;