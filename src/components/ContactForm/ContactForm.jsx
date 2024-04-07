import React, { useState } from "react";

import './ContactForm.css';
import { submitFormToSheet } from "../../services/formService";

export default function ContactForm() {
    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            response: ''
        }
    )
    const [isFormSubmitClicked, setIsFormSubmitClicked] = useState(false);

    function onChange(event) {
        setFormData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    async function onSubmitClick(event) {
        event.preventDefault();
        if(formData.name.trim() == '' || formData.email.trim() == '' || formData.response.trim() == '') {
            window.alert('Enter data in all fields!')
            return;
        }
        setIsFormSubmitClicked(true);
        const formElement = document.querySelector('form');
        const formData1 = new FormData(formElement);
        const res = await submitFormToSheet(formData1);
        if(res) {
            setIsFormSubmitClicked(false);
            setFormData(
                {
                    name: '',
                    email: '',
                    response: ''
                }
            )
        } else {
            setIsFormSubmitClicked(false);
        }
    }

    return(
        <div className="contact-form-container">
            <form className="my-form">
                <input onChange={onChange} value={formData.name} type="text" name="name" id="name" placeholder="Your Name" required />
                <input onChange={onChange} value={formData.email} type="email" name="email" id="email" placeholder="Your Email" required />
                <textarea onChange={onChange} value={formData.response} placeholder="Tell us more..." name="response" id="response">
                </textarea>
                {
                    isFormSubmitClicked?
                        <button disabled>SUBMITING</button>
                        :
                        <button onClick={onSubmitClick}>SUBMIT</button>
                }
            </form>
        </div>
    )
}