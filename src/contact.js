import { useState } from 'react';

const Contact = () => {
    const handleSubmit = () => {

    }
    return(
        <>
            <div className='form-wrapper m-auto width-50 p-3'>
                <h3>Contact us.</h3>
                <p>
                    Feel free to contact us.
                </p>
                <div>
                    <form onSubmit={ handleSubmit }>
                        <div className='form-group mb-4'>
                            <label for='name'>Name</label>
                            <input type='text' placeholder="John Doe"/>
                            <span className="error"></span>
                        </div>
                        <div className='form-group mb-4'>
                            <label for='email'>Email</label>
                            <input type='text' placeholder="johndoe@gmail.com"/>
                            <span className="error"></span>
                        </div>
                        <div className='form-group mb-4'>
                            <label for='message'>Your message</label>
                            <textarea placeholder='Type your message here...'></textarea>
                            <span className="error"></span>
                        </div>
                        <div className="form-group">
                            <input type='submit' value='Send'/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Contact;