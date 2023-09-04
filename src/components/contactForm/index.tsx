'use client'

import { FormInputs } from '@/types/formInputs.interface';
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
  // REACT HOOK FORM
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitSuccessful},
    watch,
    reset } = useForm<FormInputs>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  });

  // EMAILJS
  const emailForm = useRef<any>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const submitForm = (data: FormInputs) => {
    emailjs
      .sendForm(
        'service_yggwauk',
        'template_55jau9o',
        emailForm.current,
        process.env.NEXT_PUBLIC_EMAILJS,
      )
      .then(
        (result) => {
          // success message
          console.log(result.text);
          setSubmitSuccess(true);
          reset();
          const timer = setTimeout(() => {
            setSubmitSuccess(false)
          }, 3000);
          return () => clearTimeout(timer);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // useEffect(() => {
  //   if(isSubmitSuccessful) {
  //     reset()
  //   }
  // }, [isSubmitSuccessful, reset]);

  return (
      <form
        ref={emailForm}
        onSubmit={handleSubmit(submitForm)}
        className="w-full flex flex-col gap-4"
      >
        <input
          className="placeholder-[#999] focus:outline outline-paleGold border-0 rounded-lg p-4 bg-black text-paleGold text-xl"
          type="text"
          {...register("name", {required: 'Name is required.' })}
          placeholder="Name"
        />
        <p className="text-red-500">
          {errors.name?.message}
        </p>
        <input
          className="placeholder-[#999] focus:outline outline-paleGold border-0 rounded-lg p-4 bg-black text-paleGold text-xl"
          type="email"
          {...register("email", {required: 'Email is required.'})}
          placeholder="Email"
        />
        <p className="text-red-500">
          {errors.email?.message}
        </p>
        <input
          className="placeholder-[#999] focus:outline outline-paleGold border-0 rounded-lg p-4 bg-black text-paleGold text-xl"
          type="text"
          {...register("subject", {required: 'Subject is required.'})}
          placeholder="Subject"
        />
        <p className="text-red-500">
          {errors.subject?.message}
        </p>
        <textarea
          className="placeholder-[#999] focus:outline outline-paleGold border-0 rounded-lg p-4 bg-black text-paleGold text-xl"
          {...register("message", {required: 'Message is required.', minLength: {value: 4, message: 'Min message length is 4.'}})}
          placeholder="Your message"
        />
        <p className="text-red-500">
          {errors.message?.message}
        </p>
        {
          submitSuccess && 
          <p className="text-center text-xl">
            Message sent successfully.
          </p>
        }
        <input
          className="border-0 rounded-md p-4 bg-black text-paleGold text-xl hover:bg-paleGold hover:text-black self-center cursor-pointer font-medium rounded transition-all duration-300 ease-in-out"
          type="submit"
          value="Send message"
        />
      </form>
  );
};