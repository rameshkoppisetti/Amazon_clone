import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        interval={4000}
        showThumbs={false}
      >
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61zLzPoxv9L._SX3000_.jpg"
            alt="banner1"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/6ff"
            alt="banner2"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71i723QTb+L._SX3000_.jpg"
            alt="banner2"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/51PL6-WGyML._SX3000_.jpg"
            alt="banner2"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg"
            alt="banner3"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71l0LSU8I3L._SX3000_.jpg"
            alt="banner3"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
