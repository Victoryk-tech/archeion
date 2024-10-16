"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

const LogIn = () => {
  const initialValues = {
    email: "",
    password: "",
    checkbox: false,
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
    setFormErrors(validate({ ...formValues, [name]: value })); // Real-time validation
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    }

    if (!values.checkbox) {
      errors.checkbox = "You must accept the terms and conditions!";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formValues);
    setFormErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please correct the errors in the form.");
      return;
    }

    try {
      setLoading(true);
      const sanitizedValues = {
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        checkbox: formValues.checkbox,
      };
      const response = await axios.post("/api/users/login", sanitizedValues);
      console.log("Login successful", response.data);

      toast.success("Login successful!");
      setFormValues(initialValues);

      setTimeout(() => {
        router.push("/news");
      }, 1500); // Redirect after a short delay
    } catch (error) {
      console.error("Login failed", error.message);
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-xl font-semibold">
          {loading ? "Processing..." : "Login"}
        </h1>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email*
          </label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="e.g. silvia@gmail.com"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
          {formErrors.email && (
            <p className="text-sm text-red-600 mt-1">{formErrors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password*
          </label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="*******"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
          {formErrors.password && (
            <p className="text-sm text-red-600 mt-1">{formErrors.password}</p>
          )}
        </div>

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="checkbox"
            checked={formValues.checkbox}
            onChange={handleChange}
            className="mt-1"
          />
          <label htmlFor="checkbox" className="text-sm">
            Yes, I accept the Coderina University Challenge Terms and
            Conditions.
          </label>
        </div>

        {formErrors.checkbox && (
          <p className="text-sm text-red-600 mt-1">{formErrors.checkbox}</p>
        )}

        <div className="flex items-center justify-start text-sm space-x-2 text-sm">
          <p>Do not have an account?</p>{" "}
          <Link href="/signup" className="red cursor-pointer">
            signUp
          </Link>
        </div>

        <button
          type="submit"
          className={`w-full px-4 py-2 text-white rounded-md transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-900 hover:bg-green-700"
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Login"}
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default LogIn;
