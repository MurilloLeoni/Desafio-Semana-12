import React from 'react'
import { useFormsContact } from '../hooks/useFormsContact';
import { FormSchemaContact } from '../schemas/formSchemaContact';

const FormContact = () => {
    const { register, handleSubmit, errors } = useFormsContact();

    const onSubmit = (data: FormSchemaContact) => {
        console.log(data);
      };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="font-poppins w-[530px] px-12 mb-16">
    <div className='flex flex-col gap-9'>
        <div className="flex flex-col">
          <label className="font-medium mb-6" htmlFor="name">
            Your name
          </label>
          <input
            className="border border-#9F9F9F rounded-[10px] pr-8 pl-2 py-6"
            type="text"
            id="name"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-500 italic">{errors.name.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-6" htmlFor="email">
            Email address
          </label>
          <input
            className="border border-#9F9F9F rounded-[10px] pr-8 pl-2 py-6"
            type="text"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 italic">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-6" htmlFor="subject">
            Subject
          </label>
          <input
            className="border border-#9F9F9F rounded-[10px] pr-8 pl-2 py-6"
            type="text"
            id="subject"
            {...register("subject")}
          />
          {errors.subject && (
            <span className="text-red-500 italic">{errors.subject.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-6" htmlFor="message">
            Message
          </label>
          <input
            className="border border-#9F9F9F rounded-[10px] pr-8 pl-2 py-6"
            type="text"
            id="message"
            {...register("message")}
          />
          {errors.message && (
            <span className="text-red-500 italic">{errors.message.message}</span>
          )}
        </div>
    </div>
    <button className="px-24 py-4 bg-#B88E2F rounded-md text-white mt-12" type="submit">
            Submit
          </button>
    </form>
  )
}

export default FormContact