import { Radio } from "./components/Radio";
import { Input } from "./components/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className='container font-karla py-5 px-8 mx-auto  max-w-lg rounded-xl bg-white '>
      <div>
        <h1 className='text-xl font-bold text-left mb-3'>Contact Us</h1>{" "}
        <form
          className='space-y-3'
          onSubmit={handleSubmit(onSubmit)}>
          <div className='flex gap-4'>
            <Input
              type='text'
              register={register}
              label={"First Name"}
            />
            <Input
              type='text'
              label={"Last Name"}
              register={register}
            />
          </div>
          <div>
            <Input
              type='email'
              label={"Email Address"}
              register={register}
            />
          </div>
          {/* fix the radio components --- think about extracting the the outer elements of radio component in here */}
          <Radio />
          <div className='flex flex-col'>
            <label
              className='text-sm text-left mb-2'
              htmlFor='message'>
              Message
            </label>
            <textarea
              name='message'
              className='border border-slate-400  rounded-lg   text-sm px-3 py-2'
              id='message'
              cols={"3"}
              rows={"3"}></textarea>
          </div>
          <div className='flex '>
            <input
              className='mr-2 w-4 border-none'
              id='consent'
              type='checkbox'
            />
            <label
              className='text-sm'
              htmlFor='consent'>
              I consent to being contacted by the team <span>*</span>
            </label>
          </div>
          <button
            className='bg-primary-green600 w-full text-white rounded-lg px-3 py-2'
            type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
