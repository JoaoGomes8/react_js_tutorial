import React from "react";
import { useState} from "react";
import {Link, useParams} from "react-router-dom";

export default function About() {

    let {id, teste} = useParams()

    const [nomes] = useState([
        'João','Ana','Carlos'
    ])

    return(
        <section className="container">
            <div className="row justify-content-center mt-3">
                <div className="col-8 card bg-info text-center p-3">
                    <h5>Cliente:</h5>
                    <h4>{nomes[id]}</h4>
                    <p>{teste}</p>
                </div>
                <div className="col-12 text-center mt-3">
                    <Link to="/">Home</Link>
                </div>
            </div>
        </section>
    )
}