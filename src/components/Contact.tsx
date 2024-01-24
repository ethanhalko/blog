import React, {useState} from 'react';
import axios from 'axios';

export default function Contact() {
  const [contactForm, setContactForm] = useState({});

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    await axios.post('api/contact', {
      body: contactForm
    });
  }

  function updateFormData(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setContactForm({...contactForm, [e.currentTarget.name]: e.currentTarget.value});
    console.log(contactForm);
  }

  return (
    <>
      <form className={'flex flex-col'} name={'contact'} onSubmit={submit}>
        <label>Your Name:</label>
        <input type={'text'} name={'name'} onInput={updateFormData}/>
        <label>Your Email:</label>
        <input type={'text'} name={'email'} onInput={updateFormData}/>
        <label>Subject:</label>
        <input type={'text'} name={'subject'} onInput={updateFormData}/>
        <label>Body:</label>
        <textarea name={'text'} onChange={updateFormData}/>
        <button type={'submit'} className={'w-full py-2 bg-neutral-200 border rounded-lg text-base my-4 hover:bg-neutral-300 hover:shadow-sm transition-colors'}>Submit</button>
      </form>
    </>
  )
}
