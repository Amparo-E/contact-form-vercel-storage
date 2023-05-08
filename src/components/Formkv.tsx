'use client'
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { toast } from "sonner";

export const Form = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const { email, name, message } = Object.fromEntries(formData.entries())

    fetch('/api/kv-send-message', {
      method: 'POST',
      body: JSON.stringify({email, name, message}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      toast.success('Message sent succesfully')
      form.reset()
    }).catch(() => {
      toast.error('Error sending the message')
    })
  };

  return (
    <form onSubmit={handleSubmit} className="min-w-[400px] p-8 space-y-6 border rounded border-white/10">
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
