import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { Layout, SEO } from '../components';

export default function IndexPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-2xl font-semibold text-gray-900">Home</h1>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          <div className="flex items-center justify-center text-3xl font-bold text-red-300 bg-red-700 h-96 keen-slider__slide">
            1
          </div>
          <div className="flex items-center justify-center text-3xl font-bold text-orange-300 bg-orange-700 h-96 keen-slider__slide">
            2
          </div>
          <div className="flex items-center justify-center text-3xl font-bold text-yellow-300 bg-yellow-700 h-96 keen-slider__slide">
            3
          </div>
          <div className="flex items-center justify-center text-3xl font-bold text-green-300 bg-green-700 h-96 keen-slider__slide">
            4
          </div>
          <div className="flex items-center justify-center text-3xl font-bold text-teal-300 bg-teal-700 h-96 keen-slider__slide">
            5
          </div>
          <div className="flex items-center justify-center text-3xl font-bold text-blue-300 bg-blue-700 h-96 keen-slider__slide">
            6
          </div>
          <div className="flex items-center justify-center text-3xl font-bold text-indigo-300 bg-indigo-700 h-96 keen-slider__slide">
            7
          </div>
          <div className="flex items-center justify-center text-3xl font-bold text-purple-300 bg-purple-700 h-96 keen-slider__slide">
            8
          </div>
          {slider && (
            <div className="absolute flex items-center justify-between pointer-events-none inset-4">
              <div className="p-3 bg-white bg-opacity-25 rounded-full">
                <Arrow
                  left
                  onClick={(e) => e.stopPropagation() || slider.prev()}
                  disabled={currentSlide === 0}
                  className="w-6 h-6 text-white transform -translate-x-0.5 pointer-events-auto fill-current"
                />
              </div>
              <div className="p-3 bg-white bg-opacity-25 rounded-full">
                <Arrow
                  right
                  onClick={(e) => e.stopPropagation() || slider.next()}
                  disabled={currentSlide === slider.details().size - 1}
                  className="w-6 h-6 text-white pointer-events-auto transform translate-x-0.5 fill-current"
                />
              </div>
            </div>
          )}
        </div>
        {slider && (
          <div className="absolute inset-x-0 flex items-center justify-center space-x-3 pointer-events-none bottom-4 dots">
            {[...Array(slider.details().size).keys()].map((index) => {
              return (
                <button
                  key={index}
                  type="button"
                  aria-label={`Set current slide to ${index + 1}`}
                  onClick={() => {
                    slider.moveToSlideRelative(index);
                  }}
                  className={`dot ${
                    currentSlide === index ? 'active' : 'bg-opacity-50'
                  } rounded-full h-3 w-3 bg-white pointer-events-auto`}
                />
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}

function Arrow({ disabled, onClick, left, right, className }) {
  const isDisabled = disabled ? ' arrow--disabled' : '';
  if (left)
    return (
      <svg
        onClick={onClick}
        className={`arrow arrow--left${isDisabled} ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    );
  if (right)
    return (
      <svg
        onClick={onClick}
        className={`arrow arrow--right${isDisabled} ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    );
}
