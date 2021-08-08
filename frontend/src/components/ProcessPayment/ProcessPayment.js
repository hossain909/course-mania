import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IeGlrFZnntujlZTAykqXPhuHJipNt2Vxn8szSvtcmncOpiJIKTRWeiFRKhsTWiNeU5x9ixSXcOZy2dltYBM7JQV00f11IqhXg');

const ProcessPayment = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
    </Elements>
  );
};
export default ProcessPayment