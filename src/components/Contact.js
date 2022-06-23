// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = ({ data }) => {
    // const { name, phone, email, photo } = data;
    return (
        <div className='Content'>
        <div className='Contact'>
            <img src={data.photo} alt={data.name} />
            <div className='Contact-data'>
                <h2> {data.name} </h2>
                <p> {data.phone} </p>
                <p> {data.email} </p>
            </div>
        </div>
        </div>
    )
}

export default Contact;