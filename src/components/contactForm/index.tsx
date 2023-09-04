'use client'

import { usePortfolioStore } from '@/store';
import { FormInputs } from '@/types/formInputs.interface';
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
  const store = usePortfolioStore();
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

  const submitForm = () => {
    store.setLoading(true);

    emailjs
      .sendForm(
        'service_yggwauk',
        'template_55jau9o',
        emailForm.current,
        process.env.NEXT_PUBLIC_EMAILJS,
      )
      .then(
        (result) => {
          store.setLoading(false);
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

  return (
      <form
        ref={emailForm}
        onSubmit={handleSubmit(submitForm)}
        className={`${store.loading && 'cursor-wait'} w-full flex flex-col gap-2 sm:gap-4`}
      >
        <input
          className={`${store.loading && 'cursor-wait'} placeholder-[#999] focus:outline outline-paleGold border-0 rounded sm:rounded-lg p-2 sm:p-4 bg-black text-paleGold text-base sm:text-xl`}
          type="text"
          {...register("name", {required: 'Name is required.' })}
          placeholder="Name"
        />
        <p className="text-red-500">
          {errors.name?.message}
        </p>
        <input
          className={`${store.loading && 'cursor-wait'} placeholder-[#999] focus:outline outline-paleGold border-0 rounded sm:rounded-lg p-2 sm:p-4 bg-black text-paleGold text-base sm:text-xl`}
          type="email"
          {...register("email", {required: 'Email is required.'})}
          placeholder="Email"
        />
        <p className="text-red-500">
          {errors.email?.message}
        </p>
        <input
          className={`${store.loading && 'cursor-wait'} placeholder-[#999] focus:outline outline-paleGold border-0 rounded sm:rounded-lg p-2 sm:p-4 bg-black text-paleGold text-base sm:text-xl`}
          type="text"
          {...register("subject", {required: 'Subject is required.'})}
          placeholder="Subject"
        />
        <p className="text-red-500">
          {errors.subject?.message}
        </p>
        <textarea
          className={`${store.loading && 'cursor-wait'} placeholder-[#999] focus:outline outline-paleGold border-0 rounded sm:rounded-lg p-2 sm:p-4 bg-black text-paleGold text-base sm:text-xl`}
          {...register("message", {required: 'Message is required.', minLength: {value: 4, message: 'Min message length is 4.'}})}
          placeholder="Your message"
        />
        <p className="text-red-500">
          {errors.message?.message}
        </p>
        {
          submitSuccess && 
          <p className="text-center text-base sm:text-xl">
            Message sent successfully.
          </p>
        }
        <input
          className={`${store.loading && 'cursor-wait'} border-0 rounded sm:rounded-md p-2 sm:p-4 bg-black text-paleGold text-base sm:text-xl hover:bg-paleGold hover:text-black self-center cursor-pointer font-normal sm:font-medium rounded transition-all duration-300 ease-in-out`}
          type="submit"
          value="Send message"
        />
      </form>
  );
};