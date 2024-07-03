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
    <div className='container font-karla py-5 px-8 mx-auto  max-w-lg rounded-xl bg-white *:border'>
      <div>
        <h1 className='text-xl font-bold text-left mb-3'>Contact Us</h1>{" "}
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div className='flex '>
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
         <Radio     />
          <button type='submit'>submit</button>
        </form>
      </div>
      <div className='attribution'>
        Challenge by{" "}
        <a href='https://www.frontendmentor.io?ref=challenge'>
          Frontend Mentor
        </a>
        . Coded by <a href='https://github.com/Stbs0'></a>.
      </div>
    </div>
  );
}

export default App;
