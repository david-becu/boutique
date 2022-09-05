import './ContactForm.css';
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { BsChatRightTextFill } from "react-icons/bs";
import { BsFillPenFill } from "react-icons/bs";



const ContactForm = () => {

    // <formObj nameObj={e.nameObj.target.value} />
    
    
function formSubmit(event){
    event.preventDefault();
    const form =  event.target;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    // version en une ligne
    // const jsonData = Object.fromEntries(new FormData(event.target));
    console.log(jsonData);
};

    
return (
        <>
            <form className='ContactForm d-flex align-items-end bg-dark text-light p-4' onSubmit={formSubmit}
                     >
                                        
                <div className='divInputFormControl col-4 mb-1'>
                    <div className='divInput d-flex m-1'>
                        <div className="icon-xl me-2">
                            <BsFillPersonFill />
                        </div>
                        <input className="form-control obj" type="text" name='nameObj' placeholder="Nom, prénom" aria-label=".form-control " require="true" />
                    </div>
                    <div className='divInput d-flex m-1'>
                        <div className="icon-xl me-2">
                            <BsFillEnvelopeOpenFill />
                        </div>
                        <input className="form-control obj" type="text" name='addressObj' placeholder="adresse@email.com" aria-label="Saisie par défaut" require="true"/>
                    </div>
                    <div className='divInput d-flex m-1'>
                        <div className="icon-xl me-2">
                            < BsChatRightTextFill />
                        </div>
                        <input className="form-control obj" type="text" name='subjectObj' placeholder="Sujet" aria-label=".form-control" require="true"/>
                    </div>
                </div>
                <div className="divTextAreaFormControl d-flex col-8">
                    <label htmlFor="FormControlTextArea" className="form-label ">Contactez-nous ...</label>
                    <div className='d-flex m-1 '>
                        <div className="icon-xxl m-2">
                            < BsFillPenFill />
                        </div>
                        <textarea className="form-control obj" name='textObj' id="FormControlTextArea" rows="3" require="true"></textarea>
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