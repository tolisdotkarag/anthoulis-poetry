import type { JSX } from "react";
import bookCover from "@/assets/cover.png";
import birdLightIcon from "@/assets/bird-light.png";
import Image from "next/image";

interface Props {
  setShowAddressModal: (show: boolean) => void;
}
function Hero({ setShowAddressModal }: Props): JSX.Element {
  const handleClick = () => {
    setShowAddressModal(true);
  };

  return (
    <section className="hero" id="book">
      <div className="container">
        <div className="hero">
          <div className="book-image">
            <Image
              src={bookCover}
              alt="Εξώφυλλο Βιβλίου"
              className="book-cover"
            />
          </div>
          <div className="book-info">
            <h1 className="book-title">Επόμενη Συνάντηση</h1>
            <div className="book-author">από τον Αλέξανδρο Ανθούλη</div>
            <p className="book-description text">
              Στην πλάνη του άπλετου χρόνου, <br /> μ' εγγυήσεις πραγμάτωσης
              κίβδηλες,
              <br />
              τόσα ταξίδια αναβληθέντα.
              <br />
              <br />
              Ασφαλώς, ουδέποτε σαρκώθηκαν
              <br />
              <br />
              Βραχύς ο βίος, δε συγχωρεί αναβολές.
              <br /> Πλατύ το όνειρο, μα εσύ φτερά <br />
              δεν είχες να του δώσεις.
            </p>
            <p className="book-description">
              <strong>Τιμή: €24.95</strong>
            </p>
            <button className="cta-button" onClick={handleClick}>
              Αγοράστε τη συλλογή
            </button>
          </div>
        </div>
      </div>
      <Image src={birdLightIcon} alt="Καρδερίνα" className="bird-light-image" />
    </section>
  );
}

export default Hero;
