import { TfiClose } from "react-icons/tfi";

function ImageSliderModal({ children, show, closeImageSlider }) {
  return (
    show && (
      <div className='slider-modal-bg' id='image-slider-modal'>
        <button
          onClick={closeImageSlider}
          className='absolute top-6 right-9 z-50 cursor-pointer drop-shadow-light hover:scale-125 hover:rotate-90 dark:hover:drop-shadow-glowYellow duration-200'>
          <TfiClose className='h-5 w-5' />
        </button>
        {children}
      </div>
    )
  );
}
export default ImageSliderModal;
