import { useState } from 'react';

import arrow_left from './assets/img/arrow_left.svg';
import arrow_right from './assets/img/arrow_right.svg';

const OurClients = () => {
    const[reviewCount, setReviewCount] = useState(0);
    const[clients, setClients] = useState([
        {
            name: "Jane Smith, Director of ABC Foundation",
            review: `Werkn has been a great partner for our non-profit organization. 
            They have helped us with our bookkeeping, tax filing, and financial reporting. 
            They are always professional, responsive, and reliable. We highly recommend their services.`
        },
        {
            name: "John Doe, Freelance Graphic Designer",
            review: `I have been using Werkn for my freelance business for over a year now. 
            They have made my accounting so easy and stress-free. They handle everything from invoicing, expense tracking, to tax calculation. 
            They also provide me with valuable business advice and insights. 
            They are the best accounting platform for freelancers.`
        },
        {
            name: "Lisa Lee, Owner of L&L Catering",
            review: `
            Werkn is more than just an accounting software. It’s a community of like-minded entrepreneurs who want to grow their businesses and achieve their goals. 
            I have learned so much from their webinars, newsletters, and blog posts. 
            They also have a friendly and helpful support team who are always ready to assist me. I am very happy with Werkn.`
        }
    ]);
    const nextReview = () => {
        setReviewCount(reviewCount + 1);
        if(reviewCount >= clients.length){
            setReviewCount(0);
        }
    }
     const prevReview = () => {
        setReviewCount(reviewCount - 1);
        if(reviewCount < 1){
            setReviewCount(clients.length - 1);
        }
    }
    return(
        <>
            <div className='width-60 p-5 m-auto shadow rounded text-center position-relative bg-white'>
                <span className='arrow-left' onClick={ prevReview }>
                    <img src={ arrow_left} alt="arrow left"/>
                </span>
                <span className='arrow-right' onClick={ nextReview }>
                    <img src={ arrow_right} alt="arrow right"/>
                </span>
                <p className='h5 fw-normal mb-3'>
                   { clients[reviewCount]['review'] }
                </p>
                <h6 className="text-C">
                    { clients[reviewCount]['name'] }
                </h6>
            </div>
        </>
    )
}

export default OurClients;