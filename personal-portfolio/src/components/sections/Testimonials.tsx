import type { FC } from 'react';
import Container from '../layout/Container';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay'

const Testimonials: FC = () => {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'This portfolio is amazing! The design is sleek and the functionality is top-notch.',
      role: 'Software Engineer',
    },
    {
      name: 'Jane Smith',
      feedback: 'I love the creativity and attention to detail. Great work!',
      role: 'Product Manager',
    },
    {
      name: 'Alice Johnson',
      feedback: 'Impressive skills showcased here. Highly recommend checking this out!',
      role: 'UX Designer',
    },
    {
      name: 'Michael Brown',
      feedback: 'A truly inspiring portfolio. The projects are well-documented and visually appealing.',
      role: 'Data Scientist',
    },
    {
      name: 'Emily Davis',
      feedback: 'Fantastic work! The user experience is seamless and intuitive.',
      role: 'Frontend Developer',
    },
    {
      name: 'Chris Wilson',
      feedback: 'The attention to detail and professionalism is outstanding. Great job!',
      role: 'Project Manager',
    },
  ];

  return (
    <section id="testimonials" className='py-12'>
      <Container>
        <h2 className="section-title">Testimonials</h2>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2500,
            }),
          ]}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-1/3 px-4 select-none">
                <blockquote className="rounded-md px-4 h-full flex flex-col justify-between">
                  <p>"{testimonial.feedback}"</p>
                  <p className="text-muted-foreground text-end">- {testimonial.name} ({testimonial.role})</p>
                </blockquote>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </section >
  );
};

export default Testimonials;