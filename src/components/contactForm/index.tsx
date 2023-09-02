// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import './ContactForm.css';

export const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         'service_yggwauk',
//         'template_55jau9o',
//         form.current,
//         process.env.REACT_APP_PUBLIC_KEY
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//   };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-col gap-4">
    {/* <form ref={form} onSubmit={sendEmail} className="contact-form"> */}
      <input className="placeholder-[#999] focus:outline outline-paleGold border-0 rounded-lg p-4 bg-black text-paleGold text-xl" type="text" name="name" placeholder="Name" required />
      <input className="placeholder-[#999] focus:outline outline-paleGold border-0 rounded-lg p-4 bg-black text-paleGold text-xl" type="email" name="email" placeholder="Email" required />
      <input className="placeholder-[#999] focus:outline outline-paleGold border-0 rounded-lg p-4 bg-black text-paleGold text-xl" type="text" name="subject" placeholder="Subject" required />
      <textarea className="placeholder-[#999] focus:outline outline-paleGold border-0 rounded-lg p-4 bg-black text-paleGold text-xl" name="message" placeholder="Your message" required />
      <input className="border-0 rounded-lg p-4 bg-black text-paleGold text-xl hover:bg-paleGold hover:text-black self-center cursor-pointer font-medium rounded transition-all duration-300 ease-in-out" type="submit" value="Send message" />
    </form>
  );
};