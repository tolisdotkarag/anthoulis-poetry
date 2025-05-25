import { type JSX } from "react";
import emailIcon from "@/assets/email.png";
import instaIcon from "@/assets/insta.png";
import Image from "next/image";

function ContactSection(): JSX.Element {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="contact-heading">Επικοινωνήστε με τον Ποιητή</h2>
          <p className="contact-text">
            Ο Αλέξανδρος Ανθούλης μοιράζεται τακτικά νέα ποιήματα, σκέψεις για
            τη συγγραφή και επερχόμενες παρουσιάσεις. Ακολουθήστε το ταξίδι του
            και μάθετε πρώτοι για την επόμενη έκδοσή του.{" "}
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              <span className="social-icon">
                <Image src={emailIcon} alt="email" />
              </span>
              alexandrosanthoulis@gmail.com
            </a>
            <a href="#" className="social-link">
              <span className="social-icon">
                <Image src={instaIcon} alt="instagram" />
              </span>
              @anthoulis_poetry_
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
