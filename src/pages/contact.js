import React, { useState } from "react";
import NavBar from "../components/nav";

const Contact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="container">
            <header>
                <NavBar />
            </header>
            <div className="contact-layout">
                <h1>Contact us</h1>
                <p>If you want to learn more about Ffrind, please fill out the form below and we will reply shortly.</p>
                <form className="contact-form">
                    <fieldset>
                        <div className="grid name-row">
                            <div className="form-row">
                                <label htmlFor="first-name">First name*</label>
                                <input id="first-name" name="first-name" type="text" placeholder="Jane" required value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                            </div>
                            <div className="form-row">
                                <label htmlFor="last-name">Last name*</label>
                                <input id="last-name" name="last-name" type="text" placeholder="Doe" required value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="company">Company</label>
                            <input id="company" name="company" type="text" placeholder="" required value={company} onChange={(e) => { setCompany(e.target.value) }} />
                        </div>
                        <div className="form-row">
                            <label htmlFor="position">Position</label>
                            <input id="position" name="position" type="text" value={position} onChange={(e) => { setPosition(e.target.value) }} />
                        </div>
                        <div className="form-row">
                            <label htmlFor="country">Country*</label>
                            <input id="country" name="country" type="text" placeholder="United Kingdom" required value={country} onChange={(e) => { setCountry(e.target.value) }} />
                        </div>
                        <div className="form-row">
                            <label htmlFor="email">Email*</label>
                            <input id="email" name="email" type="email" placeholder="jane.doe@placeholder.com" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="form-row">
                            <label htmlFor="phone">Phone number</label>
                            <input id="phone" name="phone" type="tel" placeholder="(+44) 987 654 321" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} />
                        </div>
                        <div className="form-row">
                            <label htmlFor="message">Message*</label>
                            <textarea id="message" name="message" type="text" placeholder="Type your message here..." required value={message} onChange={(e) => { setMessage(e.target.value) }} />
                        </div>
                        <div className="button-row">
                            <button type="submit" className="btn-submit">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Contact;