import React, { useState } from "react";

function Main() {
  const [imageSrc, setImageSrc] = useState("img/first.jpg");
  const [description, setDescription] = useState("Just like a sunflower, turn your face to the sun and let the shadows fall behind you");

  function first() {
    setImageSrc("img/summer.jpg");
    setDescription ("Summer: Sunny Splendor");
  }

  function second() {
    setImageSrc("img/winter.jpg");
    setDescription("Winter: Frosty Elegance");
  }

  function third() {
    setImageSrc("img/rain.jpg");
    setDescription("Rain: Refreshing Showers");
  }

  function four() {
    setImageSrc("img/autumn.jpg");
    setDescription("Autumn: Golden Tranquility");
  }

  function five() {
    setImageSrc("img/spring.jpg");
    setDescription("Spring: Blooming Renewal");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>SEASON</h3>
          <div>
            <button onClick={first} className="btn-block mb-2 custom-btn">
              Summer
            </button>
          </div>
          <div>
            <button onClick={second} className="btn-block mb-2 custom-btn">
              Winter</button>
          </div>
          <div>
            <button onClick={third} className="btn-block mb-2 custom-btn">
              Rain
            </button>
          </div>
          <div>
            <button onClick={four} className="btn-block mb-2 custom-btn">
              Autumn
            </button>
          </div>
          <div>
            <button onClick={five} className="btn-block mb-2 custom-btn">
              Spring
            </button>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={imageSrc}
                  className="img-fluid rounded-start"
                  alt="Seasonal Image"
                />
              </div>
              <div className="col">
                <div className="card-body">
                  <h5 className="card-title">Follow the Sun, Leave Shadows Behind</h5>
                  <p className="card-text" id="firstpara">
                    {description}
                  </p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;