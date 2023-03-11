import {React, useState } from 'react';
import * as vars from '../styleVars';

const styles = {
    contactBody: {
        height: `${vars.v.bodyHeight}vh`,
        backgroundColor: `${vars.v.accent}`,
        overflow: `hidden`,
        display: `flex`,
        justifyContent: `center`,
    },
    contactMobile: {
        height: `${100 - vars.v.footerHeight}vh`,
        backgroundColor: `${vars.v.headerColor}`,
        overflow: `hidden`,
    },
    contact: {
        fontSize: `1.5em`,
    },
    link: {
        color: `black`,
        textDecoration: `none`,
    },
    form: {
        width: `80%`,
        display: `flex`,
        alignItems: `center`,
        flexDirection: `column`,
    },
    input: {
        marginTop: `.5em`,
        border: `none`,
        width: `80%`,
        resize: `none`,
        boxShadow: `none`,
        outline: `none`
    },
    textarea: {
        height: `35vh`,
        marginTop: `.5em`,
        border: `none`,
        width: `80%`,
        resize: `none`,
        boxShadow: `none`,
        outline: `none`
    },
    title: {
        marginBottom: `0`,
    },
    button: {
        marginTop: `.5em`,
        width: `12vh`,
        border: `none`,
        borderRadius: `5px`,
    },
    validatorError: {
        color: `red`,
    }
}

export default function Contact(props) {
    const [name, setContactName] = useState('');
    const [email, setContactEmail] = useState('');
    const [message, setContactMessage] = useState('');


    const handleChange = (e) => {
        const {name, value} = e.target;

        if(name === `contactName`) {
            return setContactName(value);
        } else if(name === `contactEmail`) {
            return setContactEmail(value);
        } else if(name === `contactMessage`) {
            return setContactMessage(value);
        }
    }

    const validateField = (e) => {
        const {name, value} = e.target;
        const nameError = document.querySelector(`#name-error`)
        const emailError = document.querySelector(`#email-error`);
        const messageError = document.querySelector(`#message-error`);

        const emailValidatorRgx = /[\w-.]+@([\w-]+\.)+[\w-]{2,4}/gi

        if(name === `contactName`) {
            if(value === ''){
                nameError.innerText = `This field is required.`
            } else {
                nameError.innerText = ``
            }
        } else if(name === `contactEmail`) {
            const eValError = (emailValidatorRgx.test(value))
            if(value === ''){
                emailError.innerText = `This field is required.`
            } else if(eValError === false){
                emailError.innerText = `Please provide a valid email address.`
            } else {
                emailError.innerText = ``
            }
        } else if(name === `contactMessage`) {
            if(value === ''){
                messageError.innerText = `This field is required.`
            } else {
                messageError.innerText = ``
            }
        }
    }

    const handleFormSubmission = (e) => {
        e.preventDefault();
    }

    return(
        <div 
            id='Contact' 
            className={`col-lg-4 col-md-4 col-sm-12 order-lg-0 order-md-0 order-sm-1 px-0 d-flex flex-column align-items-center`} 
            style={props.isMobile === true ? styles.contactMobile : styles.contactBody}
        >
            <p style={styles.title}>Contact Me:</p>
            <form className={`contact-form`} style={styles.form}>
                <input 
                    value={name}
                    name='contactName'
                    onChange={handleChange}
                    onBlur={validateField}
                    type='text'
                    placeholder='Name'
                    style={styles.input}
                />
                <p id={`name-error`} style={styles.validatorError}></p>
                <input 
                    value={email}
                    name='contactEmail'
                    onChange={handleChange}
                    onBlur={validateField}
                    type='text'
                    placeholder='Email'
                    style={styles.input}

                />
                <p id={`email-error`} style={styles.validatorError}></p>
                <textarea 
                    value={message}
                    name='contactMessage'
                    onChange={handleChange}
                    onBlur={validateField}
                    placeholder='Message'
                    style={styles.textarea}

                />
                <p id={`message-error`} style={styles.validatorError}></p>
                <button
                    type='submit'
                    onClick={handleFormSubmission}
                    style={styles.button}
                >Send</button>
            </form>
        </div>
    )
}