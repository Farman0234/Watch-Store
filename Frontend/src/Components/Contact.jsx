/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState, useRef } from 'react';
import img from './Accet/pics/contact.svg';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xrbzbkay");
  const [showAlert, setShowAlert] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      setShowAlert(true);
      if (formRef.current) {
        formRef.current.reset();
      }
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);
  return (
    <div className="container mx-auto px-4 dark:bg-slate-900 dark:text-white md:px-8 py-1">
      
      <div className="mt-28 text-left">
        <h1 className="text-2xl md:text-4xl font-bold text-center">CONTACT US</h1>
        <p className="mt-5 text-sm md:text-base">
          LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM ON THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 mb-9 gap-4 md:gap-8">
        <div className="w-full md:w-1/2">
          <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-4 rounded-lg w-full max-w-xl mx-auto md:max-w-3xl dark:bg-slate-900 dark:text-white">
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="name">Name:</label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="email">Email:</label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="phone">Phone:</label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  type="text"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="message">Message:</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                id="message"
                name="message"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300"
              type="submit" disabled={state.submitting}
            >
              SUBMIT
            </button>
            {showAlert && (
            <div className="toast toast-top toast-center top-10">
              <div className="alert alert-success">
                <span>Message sent successfully.</span>
              </div>
            </div>
          )}
          </form>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img src={img} alt="Contact Us" className="w-full h-auto object-cover rounded-lg dark:bg-slate-900 dark:text-white" />
        </div>
      </div>
    </div>
  );
}
export default Contact;
