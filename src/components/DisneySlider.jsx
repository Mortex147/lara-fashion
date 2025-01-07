import React, { useState, useEffect } from "react";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();
const image =
  "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce40ce8b8ba365e5e6d06401e5485390";

const slides = [
  {
    id: 1,
    title: lorem.generateWords(3),
    description: lorem.generateSentences(2),
    date: "Until 9 January 2025",
    image: image,
    buttonText: "Find out more",
  },
  {
    id: 2,
    title: lorem.generateWords(4),
    description: lorem.generateSentences(2),
    date: "From 10 January 2025",
    image: image,
    buttonText: "Find out more",
  },
  {
    id: 3,
    title: lorem.generateWords(3),
    description: lorem.generateSentences(2),
    date: "Back on 17 May 2025",
    image: image,
    buttonText: "Find out more",
  },
  {
    id: 4,
    title: lorem.generateWords(3),
    description: lorem.generateSentences(2),
    date: "19 April to 7 September 2025",
    image: image,
    buttonText: "Find out more",
  },
];

const DisneySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 3.5;

  const infiniteSlides = [...slides, ...slides, ...slides, ...slides];

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      if (next >= slides.length) {
        return 0;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev - 1;
      if (next < 0) {
        return slides.length - 1;
      }
      return next;
    });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      <div className="max-w-[1400px] w-full mx-auto px-4 flex-1 flex flex-col">
        <h1 className="text-[#1f235e] text-2xl font-bold text-center mt-3 mb-2">
          The Disneyland Paris experience
        </h1>
        <p className="text-[#1f235e] text-base text-center mb-4 max-w-4xl mx-auto">
          Escape to the heart of the Disney, Pixar, MARVEL and Star Wars
          universes that you love so much.
          <br />
          Disneyland Paris is full of activities for all ages and all tastes!
        </p>

        <div className="relative flex-1 flex flex-col min-h-0">
          <div className="overflow-hidden relative flex-1">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / slidesToShow)
                }%)`,
                width: `${(100 * infiniteSlides.length) / slidesToShow}%`,
              }}
            >
              {infiniteSlides.map((slide, index) => {
                const cardWidth = 100 / slidesToShow;
                const cardPosition = index * cardWidth;
                const visibleArea = currentSlide * cardWidth;
                const isPartiallyVisible =
                  cardPosition >= visibleArea + cardWidth * 3 &&
                  cardPosition < visibleArea + cardWidth * 4;

                return (
                  <div
                    key={`${slide.id}-${index}`}
                    className={`px-2 h-full`}
                    style={{ width: `${100 / infiniteSlides.length}%` }}
                  >
                    <div
                      className={`bg-white rounded-[1rem] shadow-lg overflow-hidden relative transition-opacity duration-500 h-full flex flex-col ${
                        isPartiallyVisible ? "opacity-40" : ""
                      }`}
                    >
                      <div className="absolute top-0 left-0 z-10">
                        <div className="bg-[#8b4e9f] text-white font-semibold px-6 py-2 text-sm rounded-br-2xl">
                          {slide.date}
                        </div>
                      </div>

                      <div className="relative">
                        <div
                          className="h-44 overflow-hidden relative"
                          style={{ clipPath: "ellipse(100% 100% at 50% 0)" }}
                        >
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover transform scale-125"
                          />
                          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
                        </div>
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <div>
                          <h2 className="text-[#1f235e] text-base font-bold mb-2">
                            {slide.title}
                          </h2>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                            {slide.description}
                          </p>
                        </div>
                        <div className="mt-auto flex justify-center pb-3">
                          <button className="border-2 border-[#006cff] text-[#006cff] hover:bg-[#006cff] hover:text-white px-5 py-1.5 rounded-full transition-colors text-sm font-semibold inline-flex items-center group">
                            {slide.buttonText}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-xl z-10 hover:bg-gray-50 transition-colors flex items-center justify-center focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-xl z-10 hover:bg-gray-50 transition-colors flex items-center justify-center focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <div className="flex justify-center mt-4 mb-4 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-[#006cff]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisneySlider;
