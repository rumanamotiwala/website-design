import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import './Testimonials.css';

const testimonials = [
  {
    name: 'Aspirants Classes',
    review: 'I purchase laptops and desktops both from A & T Services Inc. regularly...',
  },
  {
    name: 'Moses Jena',
    review: "I recently tried out their service, and honestly, they're pretty solid!...",
  },
  {
    name: 'Fatma Sara Khan',
    review: 'A& Tservices is very customer friendly and providing best quality products...',
  },
  {
    name: 'Inderdeep Kaur',
    review: "Quality is very good of laptops and desktops. It's really good products.",
  },
  {
    name: 'Yogesh Kumar',
    review: "I recently purchased a refurbished laptop from A&T Services Inc...",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h5 className="subheading">Customer's</h5>
      <h2 className="heading">TESTIMONIALS</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="review">{t.review}</p>
              <p className="name">– {t.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
