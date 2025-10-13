import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;

export default function Contact(): React.JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error when the user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const validateField = (name: string, value: string): boolean => {
    if (name === 'email') {
      if (!emailRegex.test(value)) {
        setErrors({ ...errors, [name]: 'Invalid email format' });
        return false;
      }
    }
    if (!value) {
      setErrors({ ...errors, [name]: `${name} is required` });
      return false;
    }
    return true;
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = event.target;
    validateField(name, value);
  };

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setIsSuccess(null);

    // Validate all fields before submitting
    let isValid = true;
    for (const key in formData) {
      if (!validateField(key, formData[key as keyof ContactFormData])) {
        isValid = false;
      }
    }

    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Get EmailJS credentials from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xxxxx';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xxxxx';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      // Check if EmailJS is properly configured
      if (serviceId === 'service_xxxxx' || templateId === 'template_xxxxx' || publicKey === 'your_public_key') {
        // Development mode: Log the form data
        console.log('Contact Form Submission (Development Mode):', formData);
        console.log('To enable email sending, configure EmailJS credentials in GitHub Secrets.');
        
        // Simulate successful submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setSubmitMessage('Thank you for your message! (Development Mode - Email not sent)');
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        // Use EmailJS if properly configured
        const emailData = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        };

        const result = await emailjs.send(
          serviceId,
          templateId,
          emailData,
          publicKey
        );

        if (result.status === 200) {
          setSubmitMessage('Thank you for your message!');
          setIsSuccess(true);
          setFormData({ name: '', email: '', message: '' });
          setErrors({});
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('An unexpected error occurred. Please try again.');
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-5 container">
      <h2 className="section-header mb-5">Contact</h2>
      <form onSubmit={handleSubmit} autoComplete="on">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            required
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            required
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            required
          />
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-custom"
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
      {submitMessage && (
        <div
          className={`alert mt-3 ${
            isSuccess ? 'alert-success' : 'alert-danger'
          }`}
          role="alert"
        >
          {submitMessage}
        </div>
      )}
    </section>
  );
}
