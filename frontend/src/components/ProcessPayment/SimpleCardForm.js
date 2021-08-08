import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

const SimpleCardForm = ({ handlePayment }) => {

  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
    } else {
      setPaymentSuccess(paymentMethod.id)
      setPaymentError(null)
      handlePayment(paymentMethod.id)

    }
  };

  return (
    <div className="mt-5">
      <form className="bg-light p-5 text-light" style={{ width: "500px" }} onSubmit={handleSubmit}>
        <h5 className="mb-5 text-dark">Pay With Card</h5>
        <CardElement />
        <button className="btn btn-primary btn-block mt-4" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
        paymentError && <p style={{ color: "red" }}>{paymentError}</p>
      }
      {
        paymentSuccess && <p style={{ color: "green" }}>Your payment was successful.</p>
      }
    </div>
  );
};

export default SimpleCardForm;