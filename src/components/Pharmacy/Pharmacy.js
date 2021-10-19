import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


let totalPrice = 0;
const Pharmacy = () => {
    const [medicines, setMedicines] = useState([]);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        fetch('./medicine.json')
            .then(res => res.json())
            .then(data => setMedicines(data))
    }, [])

    const handleCartBtn = (item) => {
        const addedMedicine = medicines.find(medi => medi.drugId === item.drugId);
        if (addedMedicine.quantity) {
            totalPrice = totalPrice + item.price * item.quantity;
            item.quantity = item.quantity + 1;
        }
        else {

            item.quantity = 1;
            totalPrice = totalPrice + item.price * item.quantity;
        }
        setPrice(totalPrice);
    }


    return (
        <div className="container">
            <h2 className="fst-italic fw-light">Pharmacy</h2>
            <div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div>
                            <h4>Location</h4>
                            <p>Set your location please...</p>
                        </div>
                        <div>
                            {
                                <div>
                                    <h3>Cart</h3>
                                    <p>Price: {(price).toFixed(2)} Tk.</p>
                                    <p>Tax: {(price * 0.05).toFixed(2)} Tk.</p>
                                    <p>Delivery: {price ? 20 : 0} Tk.</p>
                                    <p>Total: {(price + (price * 0.05) + (price ? 20 : 0)).toFixed(2)} Tk.</p>
                                    <Link to="/confirmation"><button className="btn btn-info">Confirm Order</button></Link>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            {
                                medicines.map(medi => (
                                    <div key={medi.drugId} className="col-12 col-md-6 border p-2">
                                        <h3>{medi.title}</h3>
                                        <h5>{medi.name}</h5>
                                        <h6>{medi.brand}</h6>
                                        <h5>Price: {medi.price} Tk.</h5>
                                        <button onClick={() => handleCartBtn(medi)} className="btn btn-info">Buy</button>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pharmacy;