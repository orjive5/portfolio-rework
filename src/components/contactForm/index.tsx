'use client'

// import emailjs from '@emailjs/browser';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitSuccessful},
    watch,
    reset } = useForm<Inputs>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  // console.log(errors);
  //subscribe to form - every keystroke triggers re-render
  // console.log(watch());
  // console.log('Name', watch('name'));

  const submitForm = (data: Inputs) => {
    console.log('Form submitted', data);
    setSubmitSuccess(true)
    const timer = setTimeout(() => {
      setSubmitSuccess(false)
    }, 3000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if(isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset]);

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
      <form onSubmit={handleSubmit(submitForm)} className="w-full flex flex-col gap-4">
        <input
          className="placeholder-[#999] focus:outline outline-paleGold border-0 rounded-lg p-4 bg-black text-paleGold text-xl"
          type="text"
          {...register("name", {required: 'Name is required.' })}
          placeholder="Name"
        />
        <p className="text-red-500">{errors.name?.message}</p>
        <input
          className="placeholder-[#999] focus:outline outline-paleGold border-0 rounded-lg p-4 bg-black text-paleGold text-xl"
          type="email"
          {...register("email", {required: 'Email is required.'})}
          placeholder="Email"
        />
        <p className="text-red-500">{errors.email?.message}</p>
        <input
          className="placeholder-[#999] focus:outline outline-paleGold border-0 rounded-lg p-4 bg-black text-paleGold text-xl"
          type="text"
          {...register("subject", {required: 'Subject is required.'})}
          placeholder="Subject"
        />
        <p className="text-red-500">{errors.subject?.message}</p>
        <textarea
          className="placeholder-[#999] focus:outline outline-paleGold border-0 rounded-lg p-4 bg-black text-paleGold text-xl"
          {...register("message", {required: 'Message is required.', minLength: {value: 4, message: 'Min message length is 4.'}})}
          placeholder="Your message"
        />
        <p className="text-red-500">{errors.message?.message}</p>
        {
          submitSuccess && 
          <p className="text-center text-xl">
            Message sent successfully.
          </p>
        }
        <input
          className="border-0 rounded-lg p-4 bg-black text-paleGold text-xl hover:bg-paleGold hover:text-black self-center cursor-pointer font-medium rounded transition-all duration-300 ease-in-out"
          type="submit"
          value="Send message"
        />
      </form>
  );
};