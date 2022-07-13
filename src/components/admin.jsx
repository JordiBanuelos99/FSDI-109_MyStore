import "./admin.css";
import { useState } from "react";

const Admin = () => {
    const [coupon, setCoupon] = useState({});
    const [product, setProduct] = useState({});
    const HandleCouponChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        let copy = {...coupon}; // create copy
        copy[name] = value; // modify copy
        setCoupon(copy); // set copy back
    }
    const SaveCoupon = () => {
        // Create copy of the coupon obj
        let copy = {...coupon};
        // Set the discount to be a number
        let discount = parseFloat(copy.discount);
        copy.discount = discount;
        // Console log the copy
        console.log(copy);
    }

    const HandleProductChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        let copy = {...coupon}; // create copy
        copy[name] = value; // modify copy
        setProduct(copy); // set copy back
    }
    const SaveProduct = () => {
        let copy ={...product};
        let price = parseFloat(copy.price);
        copy.price = price;
        console.log(copy);
    }

/*
    * git add .
    * git commit -m "name"
    * git push
*/

    return (
        <div className="admin-page">
            <h1>Store administration</h1>
            <div className="parent">
                <section className="products">
                    <h3>Product codes</h3>
                    <div className="form">
                        <div className="my-control">
                            <label>Title</label>
                            <input name="title" onChange={HandleProductChange} type="text"/>
                        </div>
                        <div className="my-control">
                            <label>Price</label>
                            <input name="price" onChange={HandleProductChange} type="number"/>
                        </div>
                        <div className="my-control">
                            <label>Image</label>
                            <input name="image" onChange={HandleProductChange} type="text"/>
                        </div>
                        <div className="my-control">
                            <label>Category</label>
                            <input name="category" onChange={HandleProductChange} type="text"/>
                        </div>
                        <div className="my-control">
                            <button onClick={SaveProduct} className="btn btn-primary">Save Product</button>
                        </div>
                    </div>
                </section>
                <section className="coupons">
                    <h3>Coupon codes</h3>

                    <div className="form">
                        <div className="my-control">
                            <label>Code</label>
                            <input name="code" onChange={HandleCouponChange} type="text"/>
                        </div>
                        <div className="my-control">
                            <label>Discount</label>
                            <input name="discount" onChange={HandleCouponChange} type="number"/>
                        </div>
                        <div className="my-control">
                            <button onClick={SaveCoupon} className="btn btn-primary">Save coupon</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Admin;