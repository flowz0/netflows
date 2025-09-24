'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';
import ServiceSelector from './ServiceSelector';
import PhoneInput from "./PhoneInput";
import axios from "axios";

type FormData = {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  website: string;
  company: string;
  message: string;
  services: string[];
};

type FormErrors = {
  [K in keyof FormData]?: string;
};

export default function Booking() {
  const [formData, setFormData] = useState<FormData>({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    website: '',
    company: '',
    message: '',
    services: [],
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState('');

  const validateField = (field: keyof FormData, value: string | string[]) => {
    if (field === 'services') {
      return (value as string[]).length === 0 ? 'Please select at least one service.' : '';
    }

    if (typeof value === 'string') {
      switch (field) {
        case 'fname':
          return value.trim() === '' ? 'First name is required.' : '';
        case 'lname':
          return value.trim() === '' ? 'Last name is required.' : '';
        case 'email':
          if (value.trim() === '') {
            return 'Email is required.';
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            return 'Please enter a valid email address.';
          } else {
            return '';
          }
        case 'phone':
          if (value.trim() === '') {
            return 'Phone number is required.';
          } else {
            const digits = value.replace(/\D/g, '');
            if (digits.length !== 10) {
              return 'Please enter a valid 10-digit phone number.';
            }
          }
          return '';
        default:
          return '';
      }
    }

    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;

    setFormData(prev => ({ ...prev, [id]: value }));

    // Real-time validation if error already exists
    if (errors[id as keyof FormData]) {
      const errorMsg = validateField(id as keyof FormData, value);
      setErrors(prev => ({ ...prev, [id]: errorMsg || undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const errorMsg = validateField(id as keyof FormData, value);
    setErrors(prev => ({ ...prev, [id]: errorMsg || undefined }));
  };

  const handleServicesChange = (services: string[]) => {
    setFormData(prev => ({ ...prev, services }));

    const errorMsg = validateField('services', services);
    setErrors(prev => ({ ...prev, services: errorMsg || undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Run all validations
    const newErrors: FormErrors = {
      fname: validateField('fname', formData.fname),
      lname: validateField('lname', formData.lname),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      services: validateField('services', formData.services),
    };

    // Remove empty error messages
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key as keyof FormErrors]) {
        delete newErrors[key as keyof FormErrors];
      }
    });

    // If errors exist, prevent submission and don't update status
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear existing errors and show submitting status
    setErrors({});
    setStatus('Sending...');

    try {
      const res = await axios.post('/api/send-email', formData);

      if (res.status === 200) {
        setStatus('Email sent successfully!');
        setTimeout(() => setStatus(''), 5000);
        setFormData({
          fname: '',
          lname: '',
          email: '',
          phone: '',
          website: '',
          company: '',
          message: '',
          services: [],
        });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error submitting. Please try again later.');
    }
  };

  return (
    <form>
      <div>
        {/* First + Last Name */}
        <div className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-6">
          {/* First Name */}
          <div className="flex flex-col w-full">
            <label htmlFor="fname" className="text-sm font-inter text-black50">
              First Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="fname"
              autoComplete="off"
              value={formData.fname}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 text-p font-nunito text-black75 ring py-2 px-4 rounded-lg focus:outline-none focus:ring-primary ${errors.fname ? 'ring-primary' : 'ring-black10'}`}
              placeholder="Enter First Name"
            />
            {errors.fname && <p className="text-primary text-sm mt-1">{errors.fname}</p>}
          </div>

          {/* Last Name */}
          <div className="flex flex-col w-full">
            <label htmlFor="lname" className="text-sm font-inter text-black50">
              Last Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="lname"
              autoComplete="off"
              value={formData.lname}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 text-p font-nunito text-black75 ring py-2 px-4 rounded-lg focus:outline-none focus:ring-primary ${errors.lname ? 'ring-primary' : 'ring-black10'}`}
              placeholder="Enter Last Name"
            />
            {errors.lname && <p className="text-primary text-sm mt-1">{errors.lname}</p>}
          </div>
        </div>

        {/* Email + Phone */}
        <div className="flex flex-col gap-y-6 mt-6 sm:flex-row sm:gap-x-6">
          {/* Email */}
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-sm font-inter text-black50">
              Email <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 text-p font-nunito text-black75 ring py-2 px-4 rounded-lg focus:outline-none focus:ring-primary ${errors.email ? 'ring-primary' : 'ring-black10'}`}
              placeholder="email@example.com"
            />
            {errors.email && <p className="text-primary text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <PhoneInput
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors?.phone}
          />
        </div>

        {/* Website + Company (Optional) */}
        <div className="flex flex-col gap-y-6 mt-6 sm:flex-row sm:gap-x-6">
          <div className="flex flex-col w-full">
            <label htmlFor="website" className="text-sm font-inter text-black50">Website</label>
            <input
              type="text"
              id="website"
              autoComplete="off"
              value={formData.website}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-1 text-p font-nunito text-black75 ring ring-black10 py-2 px-4 rounded-lg focus:outline-none focus:ring-primary"
              placeholder="https://www.website.com"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="company" className="text-sm font-inter text-black50">Company Name</label>
            <input
              type="text"
              id="company"
              autoComplete="off"
              value={formData.company}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-1 text-p font-nunito text-black75 ring ring-black10 py-2 px-4 rounded-lg focus:outline-none focus:ring-primary"
              placeholder="Enter Company Name"
            />
          </div>
        </div>

        {/* Services */}
        <div className="mt-6">
          <ServiceSelector
            selected={formData.services}
            onChange={handleServicesChange}
          />
          {errors.services && <p className="text-primary text-sm mt-1">{errors.services}</p>}
        </div>

        {/* Message (Optional) */}
        <div className="flex flex-col mt-6">
          <label htmlFor="message" className="text-sm font-inter text-black50">
            Tell us about your project:
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="What are we solving for?"
            autoComplete="off"
            className="mt-1 text-p font-nunito text-black75 ring ring-black10 py-2 px-4 rounded-lg resize-none focus:outline-none focus:ring-primary"
            rows={4}
          />
        </div>

        {/* Terms */}
        <p className="mt-8 text-sm font-inter text-black50">
          By booking my free consultation I agree that I have read and accept the{' '}
          <Link href="/tos" className="underline transition-colors duration-300 ease-in-out hover:text-primary">Terms of Conditions</Link>{' '}
          and{' '}
          <Link href="/privacy" className="underline transition-colors duration-300 ease-in-out hover:text-primary">Privacy Policy</Link>.
        </p>

        {/* Submit Button */}
        <Button
          text={`${status ? status : "Book My Free Consultation"}`}
          className="mt-8 w-full sm:w-fit"
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
}