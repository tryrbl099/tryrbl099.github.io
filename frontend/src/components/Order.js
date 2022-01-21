import React from "react";
import "../css/Order.css";

function Order() {
    return (
        <div className='order'>
            <div className='order__formContainer'>
                <form className='order__form was-validated'>
                    <h1 className='text-center'>Order Form</h1>

                    <div className='mb-3'>
                        <label className='form-label'>Date:</label>
                        <input type='date' className='form-control' required />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Customer Name</label>
                        <input type='text' className='form-control' required />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Customer Address</label>
                        <input type='text' className='form-control' required />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Food Item</label>
                        <input type='text' className='form-control' required />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Quantity</label>
                        <input
                            type='number'
                            className='form-control'
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Price</label>
                        <input
                            type='number'
                            className='form-control'
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <input
                            class='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault'
                        />
                        <label class='form-check-label' for='flexCheckDefault'>
                            Delivery
                        </label>
                    </div>
                    <div className='mb-3'>
                        <input
                            class='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault'
                        />
                        <label class='form-check-label' for='flexCheckDefault'>
                            Pickup
                        </label>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Total Amount</label>
                        <input
                            type='number'
                            className='form-control'
                            required
                        />
                    </div>

                    <button type='submit' className='btn btn-primary'>
                        Order
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Order;
