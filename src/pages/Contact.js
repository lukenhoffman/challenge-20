import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #61dafb; // Change color as per your theme
  color: #282c34; // Change color as per your theme
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #21a0fb; // Change color as per your theme
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin: 0;
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Here you can send the form data to an API or service.
      console.log('Form Data Submitted', formData);
    }
  };

  const validate = (data) => {
    const newErrors = {};
    if (!data.name) newErrors.name = 'Name is required!';
    if (!data.email) newErrors.email = 'Email is required!';
    if (data.email && !/\S+@\S+\.\S+/.test(data.email)) newErrors.email = 'Email is invalid!';
    if (!data.message) newErrors.message = 'Message is required!';
    return newErrors;
  };

  return (
    <ContactContainer>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

        <Label htmlFor="message">Message</Label>
        <TextArea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}

        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </ContactContainer>
  );
}

export default Contact;
