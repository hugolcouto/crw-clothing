import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_TVTd3dM2RUBJni7XttzBblOJ00NdfjquFB';
  const onToken = token => {
    console.log(token);
    alert('Pagamento efetuado');
  }
  return (
    <div>
      <StripeCheckout 
        stripeKey={publishableKey}
        label="Pagar"
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`O total da compra é $${price}`}
        amount={priceForStripe}
        token={onToken}
      />  
    </div>
  );
};

export default StripeButton;
