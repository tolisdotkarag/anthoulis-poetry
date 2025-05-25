import React, { type FormEvent, type JSX } from "react";

type AddressData = {
  name: string;
  email: string;
  address: string;
  city: string;
  zip: string;
};

type PaymentData = {
  cardNumber: string;
  expiry: string;
  cvv: string;
};

type PurchaseModalsProps = {
  showAddressModal: boolean;
  showPaymentModal: boolean;
  setShowAddressModal: (show: boolean) => void;
  setShowPaymentModal: (show: boolean) => void;
  closeModals: () => void;
};

function PurchaseModals({
  showAddressModal,
  showPaymentModal,
  setShowAddressModal,
  setShowPaymentModal,
  closeModals,
}: PurchaseModalsProps): JSX.Element {
  const [addressData, setAddressData] = React.useState<AddressData | null>(
    null
  );

  const addressFormFields: {
    label: string;
    type: string;
    placeholder?: string;
  }[] = [
    { label: "Ονοματεπώνυμο", type: "text" },
    { label: "Email", type: "email" },
    { label: "Διεύθυνση Αποστολής", type: "text" },
    { label: "Πόλη", type: "text" },
    { label: "Ταχυδρομικός Κώδικας", type: "text" },
  ];
  const paymentFormFields: {
    label: string;
    type: string;
    placeholder?: string;
  }[] = [
    {
      label: "Αριθμός Κάρτας",
      type: "text",
      placeholder: "XXXX XXXX XXXX XXXX",
    },
    { label: "Ημερομηνία Λήξης", type: "text", placeholder: "MM/YY" },
    { label: "CVV", type: "text", placeholder: "XXX" },
  ];

  const handleAddressSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data: AddressData = {
      name: form.name,
      email: form.email,
      address: form.address,
      city: form.city,
      zip: form.zip,
    };
    setAddressData(data);
    setShowAddressModal(false);
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const payment: PaymentData = {
      cardNumber: form.cardNumber,
      expiry: form.expiry,
      cvv: form.cvv,
    };
    console.log("Address:", addressData);
    console.log("Payment:", payment);
    alert("Η παραγγελία σας ολοκληρώθηκε!");
    closeModals();
  };

  return (
    <>
      {/* Address Modal */}
      {showAddressModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModals}>
              &times;
            </span>
            <h2>Στοιχεία Αποστολής</h2>
            <form onSubmit={handleAddressSubmit} className="purchase-form">
              {addressFormFields.map(({ label, type, placeholder }) => (
                <div className="form-group" key={label}>
                  <label className="form-label">{label}</label>
                  <input
                    type={type}
                    className="form-input"
                    placeholder={placeholder}
                    required
                  />
                </div>
              ))}
              <button className="submit-button">Συνέχεια στην Πληρωμή</button>
            </form>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModals}>
              &times;
            </span>
            <h2>Στοιχεία Πληρωμής</h2>
            <form onSubmit={handlePaymentSubmit} className="purchase-form">
              {paymentFormFields.map(({ label, type, placeholder }) => (
                <div className="form-group" key={label}>
                  <label className="form-label">{label}</label>
                  <input
                    type={type}
                    className="form-input"
                    placeholder={placeholder}
                    required
                  />
                </div>
              ))}
              <button className="submit-button">Ολοκλήρωση Αγοράς</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default PurchaseModals;
