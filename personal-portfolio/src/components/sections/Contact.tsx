import type { FC } from 'react';
import Container from "../layout/Container";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '../ui/dialog';
import { Button } from '../ui/button';

const Contact: FC = () => {
  return (
    <section id="contact" className="py-12">
      <Container>
        <h2 className="section-title">Contact Me</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Contact Form</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Let's connect!</DialogTitle>

              <DialogDescription>
                Fill out the form below to get in touch. I'll get back to you as soon as possible.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); }}>
              <input type="text" name="name" autoComplete="name" placeholder="Name" className="w-full border px-4 py-2 rounded" />
              <input type="email" name="Email" autoComplete="email" placeholder="Email" className="w-full border px-4 py-2 rounded" />
              <textarea name="message" placeholder="Message" className="w-full border px-4 py-2 rounded"></textarea>
              <DialogTrigger asChild>
                <Button type="submit">Send</Button>
              </DialogTrigger>
            </form>
          </DialogContent>
        </Dialog>
      </Container>
    </section>
  );
};

export default Contact;