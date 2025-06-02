import type { FC } from 'react';
import { testimonials } from '@/data/testimonials';
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
              <CarouselItem key={index} className="min-sm:basis-1/2 min-md:basis-1/3 px-4 select-none">
                <blockquote className="rounded-md px-4 h-full flex flex-col justify-between">
                  <p className="italic">"{testimonial.feedback}"</p>
                  <p className="text-muted-foreground text-end">- {testimonial.name} ({testimonial.role})</p>
                </blockquote>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden xl:flex" />
          <CarouselNext className="hidden xl:flex" />
        </Carousel>
      </Container>
    </section >
  );
};

export default Testimonials;