'use client'
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export const Form = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const { email, name, message } = Object.fromEntries(formData.entries())
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 mx-auto p-8 space-y-6 border rounded border-white/10">
      <Input
        id="email"
        name="email"
        label="Your email"
        type="email"
        placeholder="tuemail@gmail.com"
      />
      <Input
        id="name"
        name="name"
        label="Your name"
        type="text"
        placeholder="Amparo Escobar"
      />
      <Input
        id="message"
        name="message"
        label="Your message"
        type="textarea"
        placeholder=""
      />
      <Button>Send message</Button>
    </form>
  );
};
