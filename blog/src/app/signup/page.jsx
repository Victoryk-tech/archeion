"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const signIn = () => {
  const initialValues = {
    firstName: "",

    lastName: "",
    email: "",
    password: "",

    checkbox: false,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form values and update error state
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    const { email, firstName, lastName, password, checkbox } = formValues;

    // Check if any field is empty
    if (
      email === "" ||
      password === "" ||
      firstName === "" ||
      lastName === "" ||
      checkbox === false
    ) {
      toast.error("Please fill in all fields"); // Display error message
    } else {
      toast.success("Form submitted successfully!"); // Display success message
      setFormValues(initialValues);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "Your first name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Your last name is required!";
    }
    if (!values.password) {
      errors.password = "Your password is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
  };

  return (
    <div>
      <Toaster />
      <form action="form" onSubmit={handleSubmit} className="w-full md:w-3/4">
        <div className="w-full">
          <div className="py-14 lg:py-16 space-y-6">
            <div className="w-full flex flex-col md:flex-row items-start justify-start md:justify-between gap-3">
              <div className="space-y-3 ">
                <div className="flex flex-col items-start justify-start space-y-1">
                  <label htmlFor="">First name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleChange}
                    className="w-[20rem] md:w-80 text-[14px] pl-2 border-[1px] border-slate-300 rounded-md  py-1 outline-none"
                  />
                  <p className="text-sm text-red-600 pl-1 font-medium">
                    {formErrors.firstName}
                  </p>
                </div>

                <div className="flex flex-col items-start justify-start space-y-1">
                  <label htmlFor="">Last name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleChange}
                    className="w-[20rem] text-[14px] md:w-80   pl-2 border-[1px] border-slate-300 rounded-md py-1 outline-none"
                  />
                  <p className="text-sm text-red-600 pl-1 font-medium">
                    {formErrors.lastName}
                  </p>
                </div>

                <div className="flex flex-col items-start justify-start space-y-1">
                  <label htmlFor="">Email*</label>
                  <input
                    type="Email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="e.g silvia@gmail.com"
                    className="w-[20rem] text-[14px] md:w-80 outline-none   pl-2 border-[1px] border-slate-300 rounded-md py-1 placeholder:text-sm placeholder:pl-4"
                  />
                  <p className="text-sm text-red-600 pl-1 font-medium">
                    {formErrors.email}
                  </p>
                </div>

                <div className="flex flex-col items-start justify-start space-y-1">
                  <label htmlFor="">Password*</label>
                  <input
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    placeholder="*******"
                    className=" pl-2 border-[1px] border-slate-300 rounded-md w-[20rem] md:w-80 text-[14px]  py-1 placeholder:text-sm placeholder:pl-4 outline-none"
                  />
                  <p className="text-sm text-red-600 pl-1 font-medium">
                    {formErrors.password}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-[14px] items-start">
          <h3 className="">
            Coderina will use, process and store your personal data at all times
            in compliance with our Privacy Policy.
          </h3>
          <div
            className={`${
              formValues.checkbox === false ? " text-red-500 " : "text-black"
            }  flex items-center justify-start`}
            // className="space-x-3 flex items-center justify-start"
          >
            <input
              type="checkbox"
              name="checkbox"
              checked={formValues.checkbox}
              onChange={handleChange}
              className="w-6"
            ></input>
            <p className="text-[10.3px] md:text-[14px]">
              Yes, I accept the Coderina University Challenge Terms and
              Conditions.
            </p>
          </div>

          <button
            type="submit"
            className="px-8 py-3 text-sm cursor-pointer bg-green-900 text-white rounded-md hover:shadow-sm hover:scale-105 transition-all duration-500 ease-in-out hover:border-[1px] hover:border-green-900 hover:bg-transparent hover:text-green-900"
          >
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default signIn;
