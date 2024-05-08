"use client";

import { redirect } from "next/navigation";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { MoonLoader } from "react-spinners";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { AuthProvider, useAuth } from "data/context/authContext";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { login, isLoggedIn } = useAuth();
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoggedIn) redirect("/");
  }, [isLoggedIn]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: FormErrors = { ...errors };

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    } else {
      newErrors.email = "";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character";
      valid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      if (validateForm()) {
        await login(formData.email, formData.password);
        setLoading(false);
      } else {
        toast({
          description: "Failed to log in. Please check your credentials.",
          className: "bg-black text-white border-none"
        });
      }
    } catch (error) {
      toast({
        description: "An internal error ocurred. Please, try later",
        className: "bg-black text-white border-none"
      });
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="text-xl">
          Email
        </label>
        <Input
          id="email"
          placeholder="Enter your email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="py-6 text-xl bg-gray-50"
        />
        {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password" className="text-xl">
          Password
        </label>
        <Input
          id="password"
          placeholder="Enter your password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="py-6 text-xl bg-gray-50"
        />
        {errors.password && (
          <p className="text-red-500 mt-2">{errors.password}</p>
        )}
      </div>
      <Button
        className="w-full bg-primary text-white text-xl py-6"
        type="submit"
      >
        {loading ? <MoonLoader color={"#FFF"} size={15} /> : "Login"}
      </Button>
      <Toaster />
    </form>
  );
};

const Wrapper = () => (
  <AuthProvider>
    <LoginForm />
  </AuthProvider>
);

export default Wrapper;
