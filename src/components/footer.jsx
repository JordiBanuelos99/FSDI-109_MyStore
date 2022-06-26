import "./footer.css";

function Footer() {
    return (
        <div className="nav footer bg-dark">
            <div className="container">
                <div className="row container">
                    <div className="col left-side">
                        <img src="https://i.ibb.co/5KgGnZw/Website-logo.png"/>
                        <p>Copyright 2022 © - All Rights Reserved</p>
                    </div>
                    <div className="col right-side">
                        <div>
                            <a href="#">About</a>
                        </div>
                        <div>
                            <a href="#">Contact</a>
                        </div>
                        <div>
                            <a href="#">Information</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;