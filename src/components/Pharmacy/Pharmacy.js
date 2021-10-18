import React, { useEffect, useState } from 'react';


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
        <div>
            <h2>Pharmacy</h2>
            <div style={{ display: 'flex' }}>
                <div>
                    {
                        medicines.map(medi => (
                            <div key={medi.drugId}>
                                <h2>{medi.title}</h2>
                                <h3>{medi.name}</h3>
                                <h4>{medi.brand}</h4>
                                <h5>Price: {medi.price} Tk.</h5>
                                <button onClick={() => handleCartBtn(medi)}>Buy</button>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <div>
                        <h4>location</h4>
                    </div>

                    <div>
                        {
                            <div>
                                <p>price: {(price).toFixed(2)} Tk.</p>
                                <p>tax: {(price * 0.05).toFixed(2)} Tk.</p>
                                <p>delivery: {price ? 20 : 0} Tk.</p>
                                <p>Total: {(price + (price * 0.05) + (price ? 20 : 0)).toFixed(2)} Tk.</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pharmacy;