"use client";

import Image from "next/image";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("movvkjed");
  if (state.succeeded) {
    return (
      <section className="flex items-center justify-center h-[80vh]">
        <p className="text-2xl font-bold">
          Merci pour votre message !
        </p>
      </section>
    );
  }

  return (
    <main className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Contactez-nous
        </h1>
        <p className="text-center text-gray-600">
          Nous serions ravis de vous entendre
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg">
          <Image
            src="/path/to/your/image.jpg"
            alt="Contact"
            width={400}
            height={300}
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700 text-center">
            Nous sommes là pour répondre à toutes vos questions et
            préoccupations. N&apos;hésitez pas à nous contacter via le
            formulaire ci-contre.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Nom
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full p-2 border rounded border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full p-2 border rounded border-gray-300"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-2 border rounded border-gray-300 text-black"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </main>
  );
}
