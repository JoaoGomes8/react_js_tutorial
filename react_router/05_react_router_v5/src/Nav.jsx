import { Link } from "react-router-dom"

export default function Contact() {
    return(
        <>
            <Link to="/">Home</Link>&nbsp;|&nbsp;
            <Link to="/contact">Contact</Link>&nbsp;|&nbsp;
            <Link to="/about">About</Link>
        </>
    )
}