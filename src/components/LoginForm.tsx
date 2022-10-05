/* eslint-disable jsx-a11y/label-has-associated-control */

import { BiLogInCircle } from "react-icons/bi";
import { Props } from "../types/loginTypes";

function LoginForm({ changeWantLogin, addFormData }: Props) {
  const handleLogin = (e: React.ChangeEvent<any>): void => {
    addFormData({
      submitter: true,
      email: e.target[0].value,
      password: e.target[1].value,
      remembering: e.target[2].checked,
    });
    e.preventDefault();
  };
  return (
    <div className="bg-base-200 flex items-center h-screen flex-col justify-center">
      <div className="mb-20">
        <h2 className="text-4xl text-base-content font-['Open_Sans']">
          Welcome Back&nbsp;
          <span className="text-[30px] -mt-1">🥳</span>
        </h2>
        <p className="text-xs text-base-content/70 text-center font-mono">
          login to your account and start chatting
        </p>
      </div>
      <form className="p-3 w-full space-y-3" onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text font-semibold tracking-wide font-serif text-base-content/80">
              What was your email?
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
              verify its you!
            </span>
            <span className="label-text-alt text-base text-blue-600 font-sans underline active:text-indigo-700">
              forgot your password?
            </span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            className="input input-bordered w-full focus:border-none focus:outline-none focus:ring-2"
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
              changeWantLogin(false);
            }}
            className="label-text-alt text-[15px] text-blue-600 font-sans underline active:text-indigo-700"
          >
            Don&apos;t Have An Account?
          </button>
        </div>
        <button
          className="btn text-base btn-primary btn-block mt-5"
          type="submit"
        >
          <BiLogInCircle className="stroke-1" />
          &nbsp;Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
