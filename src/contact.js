import { useState } from 'react';

const Contact = () => {
    const handleSubmit = () => {

    }
    return(
        <>
            <div className='form-wrapper  p-3'>
                <h3 className='text-EG'>Contact us.</h3>
                <p className='width-50'>
                    We would love to hear from you. 
                    Whether you have a question, feedback, or need our services, 
                    please feel free to <span className='text-C'>contact</span> us .
                </p>    
                <div className='row g-4'>
                    <div className='col-md-8  width-50'>
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
                                <textarea col='5' placeholder='Type your message here...'></textarea>
                                <span className="error"></span>
                            </div>
                            <div className="form-group">
                                <input type='submit' value='Send'/>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-4'>
                        <h3 className='text-EG'>
                            Get in touch with us.
                        </h3>
                        <ul className='p-0'>
                            <li className='list-group-item mb-3'>
                                <span className='text-C h6'>Contact centre operation hours:</span> 08:00 to 16:00 Monday to Friday<br />
                                Closed on weekends and public holidays
                            </li>
                            <li className='list-group-item mb-3'>
                                <span className='text-C h6'>For queries</span> help@werkn.co.za
                            </li>
                            <li className='list-group-item mb-3'>
                                <span className='text-C h6'>Phone:</span> +27 11 234 5678
                            </li>
                            <li className='list-group-item mb-3'>
                                <span className='text-C h6'>Email:</span> info@werkn.co.za
                            </li>
                            <li className='list-group-item mb-3'>
                                <span className='text-C h6'>Address</span> 123 Main Street, Johannesburg, Gauteng, 2000
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;