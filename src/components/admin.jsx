import "./admin.css";
import { useState } from "react";

const Admin = () => {
    const [coupon, setCoupon] = useState({});
    const [product, setProduct] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    
    const HandleCouponChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        let copy = {...coupon}; // create copy
        copy[name] = value; // modify copy
        setCoupon(copy); // set copy back
    };
    const SaveCoupon = () => {
        // Create copy of the coupon obj
        let coupon2beSaved = {...coupon};
        // Set the discount to be a number
        let discount = parseFloat(coupon2beSaved.discount);
        coupon2beSaved.discount = discount;
        // Console log the copy
        console.log(coupon2beSaved);
        // todo: send code to the server

        // add ti to the state array
        let copyCoupons = [...allCoupons];
        copyCoupons.push(coupon2beSaved);
        setAllCoupons(copyCoupons);
    };

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

        // todo: save prod o server

        // save prod on state array
        let copyAllProds = [...allProducts];
        copyAllProds.push(copy);
        setAllProducts(copyAllProds);
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
                    <div className="products-list">
                        <ul>
                            {allProducts.map((prod, index) => <li key={index}>{prod.title} - ${prod.price}</li>)}
                        </ul>
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
                    <div className="coupons-list">
                        <ul>
                        {allCoupons.map((coupon, index) => <li key={index}>{coupon.code} - {coupon.discount}% off</li> )}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Admin;