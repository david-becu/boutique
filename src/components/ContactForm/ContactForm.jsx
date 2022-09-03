import React from 'react';
import './ContactForm.css';
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { BsChatRightTextFill } from "react-icons/bs";
import { BsFillPenFill } from "react-icons/bs";



const ContactForm = () => {
    return (
        <>
            <form className='ContactForm d-flex align-items-end bg-dark text-light p-4'>
                <div className='divInputFormControl col-4 mb-1'>
                    <div className='divInput d-flex m-1'>
                        <div className="icon-xl me-2">
                            <BsFillPersonFill />
                        </div>
                        <input className="form-control" type="text" placeholder="Nom, prénom" aria-label=".form-control" />
                    </div>
                    <div className='divInput d-flex m-1'>
                        <div className="icon-xl me-2">
                            <BsFillEnvelopeOpenFill />
                        </div>
                        <input className="form-control" type="text" placeholder="adresse@email.com" aria-label="Saisie par défaut" />
                    </div>
                    <div className='divInput d-flex m-1'>
                        <div className="icon-xl me-2">
                            < BsChatRightTextFill />
                        </div>
                        <input className="form-control" type="text" placeholder="Sujet" aria-label=".form-control" />
                    </div>
                </div>
                <div class="divTextAreaFormControl d-flex col-8">
                    <label for="FormControlTextArea" className="form-label ">Contactez-nous ...</label>
                    <div className='d-flex m-1 '>
                        <div className="icon-xxl m-2">
                            < BsFillPenFill />
                        </div>
                        <textarea className="form-control " id="FormControlTextArea" rows="3"></textarea>
                    </div>
                    <div className="inputButton d-flex justify-content-end mt-1">
                        <input className='btn btn-primary ' type="submit" value="Envoyer" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default ContactForm