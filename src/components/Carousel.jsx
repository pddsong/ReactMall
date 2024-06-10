import Slider from "react-slick";
import "./Carousel.scss";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide arrows if you prefer
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const data = localStorage.getItem("carousel")
    ? JSON.parse(localStorage.getItem("carousel"))
    : [];
  if (!data)
    return (
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <img src="imgs/QQ截图20240606215313.png" alt="slide 1" />
          </div>
        </Slider>
      </div>
    );

  return (
    <div className="carousel">
      <Slider {...settings}>
        {data.map((value) => (
          <div key={value}>
            <img src={`/imgs/carousel/${value}`} alt="slide 1" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
