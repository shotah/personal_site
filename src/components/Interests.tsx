import React from 'react';

const Interests: React.FC = () => {
  const images = [
    '/climbing.jpg',
    '/surfing.jpg',
    '/snowboarding.jpg',
    '/hiking.jpg',
    '/scale.jpg',
    '/lantern.jpg',
    '/smile.jpg',
  ];

  return (
    <section id="interests" className="py-5 container">
      <h2 className="section-header mb-5">Personal Interests</h2>
      <div className="row">
        <div className="col-sm-6 col-md-6">
          <p>
            I'm passionate about building websites and experimenting with IoT
            devices, always looking for creative ways to blend technology with
            everyday life. Beyond coding, I thrive on outdoor adventures—whether
            it's climbing sheer rock faces, catching waves, or carving through
            fresh snow. I love the challenge, the rush, and the deep connection
            with nature that comes with each pursuit. No matter the season, I'm
            always seeking new experiences that push my limits and fuel my
            curiosity.
          </p>
        </div>
        <div className="col-sm-6 col-md-6">
          <div
            id="interestsCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                >
                  <img
                    src={image}
                    alt={`Interest ${index + 1}`}
                    className="d-block w-100 rounded"
                    style={{ objectFit: 'cover', height: '400px' }}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#interestsCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#interestsCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
