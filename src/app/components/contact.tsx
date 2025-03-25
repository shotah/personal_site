// src/app/components/Contact.tsx
"use client";

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    emailjs.init({
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
        // Do not allow headless browsers
        blockHeadless: true,
        blockList: {
            // Block the suspended emails
            list: ['foo@emailjs.com', 'bar@emailjs.com'],
            // The variable contains the email address
            watchVariable: 'email',
        },
        limitRate: {
            // Set the limit rate for the application
            id: 'app',
            // Allow 1 request per 5s
            throttle: 5000,
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // Manually trigger handleChange when the input loses focus, to check for autofill
        handleChange({ ...e, target: { ...e.target, value: e.target.value } } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsSuccess(false);
        setIsError(false);

        const templateParams = {
            name: formData.name,
            email: formData.email,
            time: new Date().toLocaleString(),
            message: formData.message,
        };
        try {
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
                templateParams,
            );
            console.log('Email sent successfully!', response);
            setIsSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending email:', error);
            setIsError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-5">
            <h2 className="section-header">Contact Me</h2> {/* Added section-header class */}
            <p className="lead">Feel free to reach out!</p>
            {isSuccess && (
                <div className="alert alert-success" role="alert">
                    Thank you! Your message has been sent.
                </div>
            )}
            {isError && (
                <div className="alert alert-danger" role="alert">
                    Oops! There was an error sending your message. Please try again later.
                </div>
            )}
            <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        Message:
                    </label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-custom" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </section>
    );
};

export default Contact;
