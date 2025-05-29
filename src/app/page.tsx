"use client";
import { JSX, useState } from "react";
import PurchaseModals from "@/components/PurchaseModals";
import Hero from "@/components/Hero";
import QuoteSection from "@/components/QuoteSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function App(): JSX.Element {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const closeModals = () => {
    setShowAddressModal(false);
    setShowPaymentModal(false);
  };

  return (
    <>
      <PurchaseModals
        showAddressModal={showAddressModal}
        showPaymentModal={showPaymentModal}
        setShowAddressModal={setShowAddressModal}
        setShowPaymentModal={setShowPaymentModal}
        closeModals={closeModals}
      />
      <Hero setShowAddressModal={setShowAddressModal} />
      <QuoteSection />
      <ContactSection />
      <Footer />
    </>
  );
}
