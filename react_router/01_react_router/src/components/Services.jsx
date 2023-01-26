import React from "react";
import {Link, Route, Routes} from "react-router-dom";

export default function Services() {
    return (
        <section className="container">
            <div className="row justify-content-center mt-3">
                <div className="col-8 card bg-light text-center p-3">
                    <h3>Services</h3>

                    <Routes>
                        <Route path="/service1" element={<h3>Servico 1</h3>} />
                        <Route path="/service2" element={<h3>Servico 2</h3>} />
                        <Route path="/service3" element={<h3>Servico 3</h3>} />
                    </Routes>

                    <Link to="/about">About</Link>
                </div>
                
            </div>
        </section>
    )
}