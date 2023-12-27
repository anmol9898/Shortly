import React from "react";
import { useForm } from "react-hook-form";
const Shorten = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = () => {
    alert("form submitted");
  };
  return (
    <div className="bg-gray-100">
      {/* shorten container */}
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative  w-full p-10 bg-purple-900 rounded-lg  -mt-20"
        >
          <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4">
            <input
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter valid url",
                },
              })}
              type="text"
              className={`p-3 font-serif rounded-md placeholder:text-orange-300 placeholder:text-sm placeholder:text-thin focus:outline-none flex-1 ${
                errors?.email ? "border-red border-2" : ""
              } `}
              placeholder="Shorten a link here"
            />
            <button
              type="submit"
              className="text-white px-10 font-serif text-md bg-cyan rounded-md py-3 hover:bg-cyanLight focus:outline-none md:py-2"
            >
              Shorten It!
            </button>
          </div>
          {errors?.email?.type === "required" && (
            <p className="absolute text-xs mt-2 text-red ">
              * {errors?.email?.message}
            </p>
          )}
          {errors?.email?.type === "pattern" && (
            <p className="absolute text-xs mt-2 text-red ">
              * {errors?.email?.message}
            </p>
          )}
        </form>

        {/* link 1 */}
        <div className="flex flex-col bg-white rounded-lg px-6 py-3 justify-between items-center md:flex-row">
          <p className="text-black font-bold text-sm">
            https://frontendmentor.io
          </p>
          <div className="flex flex-col space-x-4 space-y-2 text-sm items-center md:flex-row md:space-x-3 md:space-y-0">
            <p className="text-sky-300">https://rel.ink/k41kyk</p>
            <a
              href="#"
              className="text-white px-3 py-2 md:px-6 md rounded-md bg-cyan hover:opacity-70"
            >
              Copy
            </a>
          </div>
        </div>
        {/* link 2 */}
        <div className="flex flex-col bg-white rounded-lg px-6 py-3 justify-between items-center md:flex-row">
          <p className="text-black font-bold text-sm">
            https://twitter.com/frontendmentor
          </p>
          <div className="flex flex-col space-x-4 space-y-2 text-sm items-center md:flex-row md:space-x-3 md:space-y-0">
            <p className="text-sky-300">https://rel.ink/k41kyk</p>
            <a
              href="#"
              className="text-white px-3 py-2 md:px-6 rounded-md bg-purple-900 hover:opacity-70"
            >
              Copy
            </a>
          </div>
        </div>
        {/* link 3 */}
        <div className="flex flex-col bg-white rounded-lg px-6 py-3 justify-between items-center md:flex-row">
          <p className="text-black font-bold text-sm">
            https://linkedin.com/frontend-mentor
          </p>
          <div className="flex flex-col space-x-4 space-y-2 text-sm items-center md:flex-row md:space-x-3 md:space-y-0">
            <p className="text-sky-300">https://rel.ink/k41kyk</p>
            <a
              href="#"
              className="text-white px-3 py-2 md:px-6  rounded-md bg-cyan hover:opacity-70"
            >
              Copy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shorten;
