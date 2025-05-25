import { type JSX } from "react";
import birdBlackIcon from "@/assets/bird-black.svg";
import Image from "next/image";

function QuoteSection(): JSX.Element {
  return (
    <section className="quote-section" id="quote">
      <div className="container">
        <div className="info-container">
          <div className="info-field">
            <span className="title">Δημοσιεύθηκε</span>
            <span className="value">Μάρτιος 2025</span>
          </div>
          <div className="info-field">
            <span className="title">Αριθμός Σελίδων</span>
            <span className="value">100</span>
          </div>
          <div className="info-field">
            <span className="title">Διαστάσεις</span>
            <span className="value">24x17 </span>
          </div>
        </div>
        <p className="quote">
          Ενώ φτερά σου δόθηκαν, ολάκερη ζωή πάνω στο χώμα χάλασες.
        </p>
        <div className="book-author">— "Επόμενη Συνάντηση", Εισαγωγή</div>
      </div>
      <Image src={birdBlackIcon} alt="Καρδερίνα" className="bird-black-image" />
    </section>
  );
}

export default QuoteSection;
