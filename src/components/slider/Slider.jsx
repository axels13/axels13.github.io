import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { slideImages } from "../../data";

const Slider = () => {
  return (
    <>
      <Fade autoplay transitionDuration={100} className='slider-fade'>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div className="slide-card">
              <img src={slideImage.url} width="80%" className="slide-img" />
            </div>
          </div>
        ))}
      </Fade>
    </>
  );
};

export default Slider;
