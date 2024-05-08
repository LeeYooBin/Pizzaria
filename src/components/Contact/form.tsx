"use client";

import { useState, ChangeEvent, FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    message: ""
  });

  const { toast } = useToast();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors: FormErrors = { ...errors };

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    } else {
      newErrors.name = "";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    } else {
      newErrors.email = "";
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
      valid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      toast({
        description: "Your message has been sent.",
        className: "bg-black text-white border-none"
      });
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } else {
      toast({
        description: "Form submission failed. Please correct the errors.",
        className: "bg-black text-white border-none"
      });
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Input
          className="w-full bg-transparent text-2xl py-8"
          placeholder="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
      </div>
      <div className="space-y-2">
        <Input
          className="w-full bg-transparent text-2xl py-8"
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
      </div>
      <div className="space-y-2">
        <Textarea
          className="w-full h-80 bg-transparent text-2xl py-4"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && (
          <p className="text-red-500 mt-1">{errors.message}</p>
        )}
      </div>
      <Button className="p-8 text-white text-2xl" type="submit">
        Submit
      </Button>
      <Toaster />
    </form>
  );
};

export default Form;
