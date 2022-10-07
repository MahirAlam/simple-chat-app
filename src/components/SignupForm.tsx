/* eslint-disable jsx-a11y/label-has-associated-control */

import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { Props } from "../types/loginTypes";

function SignupForm({ changeWantLogin, addFormData }: Props) {
  const [passwordMatched, setPasswordMatched] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSign = (e: React.ChangeEvent<any>): void => {
    setErrorMessage("");
    console.dir(e.target[2].value === e.target[3].value);

    if (e.target[2].value === e.target[3].value) {
      addFormData({
        submitter: false,
        fullName: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
        remembering: e.target[4].checked,
      });
      setPasswordMatched(true);
    } else {
      setErrorMessage("Password Doesn't Match");
      setPasswordMatched(false);
    }
    e.preventDefault();
  };
  return (
    <div className="bg-base-200 flex items-center h-screen flex-col justify-center">
      <div className="mb-10">
        <h2 className="text-4xl text-base-content font-['Open_Sans']">
          Welcome Stranger&nbsp;
          <span className="text-[30px] -mt-1">😄</span>
        </h2>
        <p className="text-xs text-base-content/70 text-center font-mono">
          create an account to start chatting
        </p>
      </div>
      <form className="w-full p-4 space-y-3" onSubmit={handleSign}>
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text font-semibold tracking-wide font-serif text-base-content/80">
              What&apos;s your full name?
            </span>
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter Your Full Name"
            className="input input-bordered w-full focus:border-none focus:outline-none focus:ring-2"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text font-semibold tracking-wide font-serif text-base-content/80">
              What is your email?
            </span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            className="input input-bordered w-full focus:border-none focus:outline-none focus:ring-2"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text font-semibold font-serif tracking-wide text-base-content/80">
              Enter A Password
            </span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="A Rememberable Strong Password"
            className="input input-bordered w-full focus:border-none focus:outline-none focus:ring-2"
          />
        </div>
        <div className="form-control">
          <label htmlFor="conPassword" className="label">
            <span className="label-text font-semibold font-serif tracking-wide text-base-content/80">
              Confrom The Password
            </span>
          </label>
          <input
            type="password"
            name="conPassword"
            id="conPassword"
            placeholder="Re Enter The Password"
            className={`input ${
              passwordMatched ? "" : "input-error ring-error"
            } w-full focus:border-none focus:outline-none focus:ring-2`}
          />
        </div>
        <div className="flex flex-row items-center justify-between form-control">
          <label className="label w-fit cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox rounded checkbox-sm"
            />
            <span className="ml-2 label-text">Remember me</span>
          </label>
          <button
            type="button"
            onClick={(): void => {
              changeWantLogin(true);
            }}
            className="label-text-alt text-[15px] text-blue-600 font-sans underline active:text-indigo-700"
          >
            Already Have An Account?
          </button>
        </div>
        <div
          className={`${
            errorMessage !== "" ? "block" : "hidden"
          } border border-error p-4 text-lg text-center mb-2 text-red-400 font-semibold bg-red-100 rounded-lg w-full`}
        >
          {errorMessage}
        </div>
        <button
          className="btn text-base btn-primary btn-block mt-5"
          type="submit"
        >
          <FaUserPlus />
          &nbsp;Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
