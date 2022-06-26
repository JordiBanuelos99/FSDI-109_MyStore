import "./quantityPicker.css";

const QuantityPicker = () => {
    return(
        <div className="quantityPicker">
            <button className="btn btn-outline-primary btn-sm">-</button>
            <label>#</label>
            <button className="btn btn-outline-primary btn-sm">+</button>
        </div>
    );
}

export default QuantityPicker;