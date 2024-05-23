import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css';

const Checkout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    toast.success('Checkout successful!', {
      position: toast.POSITION.TOP_RIGHT
    });
    console.log(data);
  };

  const validateExpiryDate = value => {
    const [month, year] = value.split('/').map(num => parseInt(num, 10));
    if (!month || !year || month < 1 || month > 12) {
      return "Invalid expiry date";
    }

    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();
    const expirationDate = new Date(year, month - 1);

    // Ensure the card does not expire in the next two months
    const twoMonthsFromNow = new Date();
    twoMonthsFromNow.setMonth(today.getMonth() + 2);

    if (expirationDate < twoMonthsFromNow) {
      return "Expiry date must be valid for at least the next two months";
    }

    return true;
  };

  return (
    <div className="checkout-container">
      <ToastContainer />
      <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Checkout</h2>

        <div className="form-section">
          <h3>Personal Information</h3>
          <label>
            Full Name
            <input className={errors.fullName ? 'error-input' : ''} type="text" {...register('fullName', { required: 'Full Name is required' })} />
            {errors.fullName && <p className="error">{errors.fullName.message}</p>}
          </label>
          <label>
            Email
            <input className={errors.email ? 'error-input' : ''} type="email" {...register('email', { required: 'Email is required' })} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </label>
          <label>
            Phone Number
            <input className={errors.phone ? 'error-input' : ''} type="tel" {...register('phone', { required: 'Phone number is required' })} />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </label>
        </div>

        <div className="form-section">
          <h3>Shipping Address</h3>
          <label>
            Address
            <input className={errors.address ? 'error-input' : ''} type="text" {...register('address', { required: 'Address is required' })} />
            {errors.address && <p className="error">{errors.address.message}</p>}
          </label>
          <label>
            City
            <input className={errors.city ? 'error-input' : ''} type="text" {...register('city', { required: 'City is required' })} />
            {errors.city && <p className="error">{errors.city.message}</p>}
          </label>
          <label>
            State
            <input className={errors.state ? 'error-input' : ''} type="text" {...register('state', { required: 'State is required' })} />
            {errors.state && <p className="error">{errors.state.message}</p>}
          </label>
          <label>
            ZIP Code
            <input className={errors.zip ? 'error-input' : ''} type="text" {...register('zip', { required: 'ZIP code is required' })} />
            {errors.zip && <p className="error">{errors.zip.message}</p>}
          </label>
        </div>

        <div className="form-section">
          <h3>Payment Information</h3>
          <label>
            Card Number
            <input className={errors.cardNumber ? 'error-input' : ''} type="text" {...register('cardNumber', { required: 'Card number is required', pattern: { value: /^[0-9]{16}$/, message: 'Invalid card number' } })} />
            {errors.cardNumber && <p className="error">{errors.cardNumber.message}</p>}
          </label>
          <label>
            Expiry Date (MM/YYYY)
            <input className={errors.expiryDate ? 'error-input' : ''} type="text" {...register('expiryDate', { required: 'Expiry date is required', validate: validateExpiryDate })} />
            {errors.expiryDate && <p className="error">{errors.expiryDate.message}</p>}
          </label>
          <label>
            CVV
            <input className={errors.cvv ? 'error-input' : ''} type="text" {...register('cvv', { required: 'CVV is required', pattern: { value: /^[0-9]{3,4}$/, message: 'Invalid CVV' } })} />
            {errors.cvv && <p className="error">{errors.cvv.message}</p>}
          </label>
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Items: 2</p>
          <p>Total Cost: $374.98</p>
        </div>

        <button type="submit" className="btn-submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
