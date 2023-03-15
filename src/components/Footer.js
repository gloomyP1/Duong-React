import React from 'react';

function Footer() {
    return (
        <footer className="bg-primary text-white py-5 bg-black pt-2 pb-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-uppercase font-weight-bold">Cinema</h3>
                        <p className="my-3">
                            Created by Trần Hoàng Phúc. Student ID: SE161139. Mentor Nguyễn Minh Sang
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-uppercase font-weight-bold">Contact Us</h3>
                        <ul className="list-unstyled">
                            <li>
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                Lot E2a-7, Road D1, D. D1, Long Thanh My, Thu Duc City, Ho Chi Minh City 700000
                            </li>
                            <li>
                                <i className="fas fa-phone mr-2"></i>
                                (123) 456-7890
                            </li>
                            <li>
                                <i className="fas fa-envelope mr-2"></i>
                                
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="text-center mt-5">Copyright &copy; 2023 Cinema</p>
            </div>
        </footer>
    );
}

export default Footer;
