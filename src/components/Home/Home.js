import React from 'react';
import Slider from 'react-slick';
import './Home.css';

const carouselItems = [
  { src: 'https://img.freepik.com/free-vector/gradient-national-sports-day-illustration_23-2148995776.jpg?t=st=1723004500~exp=1723008100~hmac=19c58a963298cf796607ba694b8b5d906af266339c9812ec26453e998d81af90&w=996', alt: 'Annual Sports Day', caption: 'Celebrating Excellence in Sports' },
  { src: 'https://img.freepik.com/premium-photo/heart-bustling-school-science-fair-kaleidoscope-creativity_1126694-12790.jpg?w=1060', alt: 'Science Exhibition', caption: 'Showcasing Student Innovations' },
  { src: 'https://as2.ftcdn.net/v2/jpg/07/74/33/89/1000_F_774338929_pVoRA2JPC3y3ViDC1WnrVVdEVl0e4w89.jpg', alt: 'Cultural Fest', caption: 'Embracing Diversity and Creativity' }
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true
  };

  return (
    <div className="home">
      <div className="carousel">
        <Slider {...settings}>
          {carouselItems.map((item, index) => (
            <div key={index} className="carousel-item">
              <img src={item.src} alt={item.alt} className="carousel-image" />
              <div className="carousel-caption">
                <h2>{item.caption}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <section className="intro">
        <h1>Welcome to Springdale Public School</h1>
        <p>Nurturing young minds for a brighter future.</p>
      </section>
      {/* <section className="quick-links">
        <div className="link-card">Admissions</div>
        <div className="link-card">Academics</div>
        <div className="link-card">Contact Us</div>
      </section> */}
    </div>
  );
};

export default Home;
