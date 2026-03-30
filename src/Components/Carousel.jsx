import React, { useState, useRef, useEffect, useCallback } from 'react';

const Carousel = ({ slides, autoPlay = false, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  const totalSlides = slides.length;

  // Sample slides data structure
  const defaultSlides = slides || [
    {
      id: 1,
      image: "https://picsum.photos/id/104/1200/600",
      title: "Alpine Serenity",
      description: "Breathtaking mountain views"
    },
    {
      id: 2,
      image: "https://picsum.photos/id/15/1200/600",
      title: "Coastal Dreams",
      description: "Where waves meet horizon"
    },
    {
      id: 3,
      image: "https://picsum.photos/id/96/1200/600",
      title: "Neon Pulse",
      description: "City that never sleeps"
    },
    {
      id: 4,
      image: "https://picsum.photos/id/13/1200/600",
      title: "Whispering Woods",
      description: "Mystical green canopy"
    }
  ];

  const currentSlides = slides || defaultSlides;

  // Scroll to specific slide
  const scrollToIndex = useCallback((index, smooth = true) => {
    if (!carouselRef.current) return;
    
    const slideWidth = carouselRef.current.clientWidth;
    const targetScroll = index * slideWidth;
    
    carouselRef.current.scrollTo({
      left: targetScroll,
      behavior: smooth ? 'smooth' : 'auto'
    });
    
    setCurrentIndex(index);
  }, []);

  // Next slide
  const nextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % totalSlides;
    scrollToIndex(nextIndex);
  }, [currentIndex, totalSlides, scrollToIndex]);

  // Previous slide
  const prevSlide = useCallback(() => {
    const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    scrollToIndex(prevIndex);
  }, [currentIndex, totalSlides, scrollToIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(autoPlayRef.current);
    }
  }, [autoPlay, autoPlayInterval, nextSlide]);

  // Pause auto-play on hover
  const pauseAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const resumeAutoPlay = () => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(nextSlide, autoPlayInterval);
    }
  };

  // Handle manual scroll to sync index
  const handleScroll = () => {
    if (!carouselRef.current) return;
    
    const scrollPosition = carouselRef.current.scrollLeft;
    const slideWidth = carouselRef.current.clientWidth;
    const newIndex = Math.round(scrollPosition / slideWidth);
    
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < totalSlides) {
      setCurrentIndex(newIndex);
    }
  };

  // Drag/Swipe functionality for mobile
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    pauseAutoPlay();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    resumeAutoPlay();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    pauseAutoPlay();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    resumeAutoPlay();
    handleScroll(); // Sync index after touch
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="carousel carousel-center w-full rounded-2xl overflow-hidden shadow-xl"
        style={{ scrollBehavior: 'smooth' }}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {currentSlides.map((slide, index) => (
          <div 
            key={slide.id || index} 
            className="carousel-item w-full relative"
          >
            <div className="relative w-full h-64 md:h-96 lg:h-[28rem]">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
                draggable="false"
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-1">
                  {slide.title}
                </h3>
                <p className="text-sm md:text-base opacity-90">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="btn btn-circle btn-primary absolute left-2 md:left-4 top-1/2 -translate-y-1/2 
                   opacity-0 group-hover:opacity-100 transition-all duration-300 
                   shadow-lg bg-white/90 hover:bg-white text-gray-800 border-0 
                   backdrop-blur-sm disabled:opacity-50"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="btn btn-circle btn-primary absolute right-2 md:right-4 top-1/2 -translate-y-1/2 
                   opacity-0 group-hover:opacity-100 transition-all duration-300 
                   shadow-lg bg-white/90 hover:bg-white text-gray-800 border-0 
                   backdrop-blur-sm disabled:opacity-50"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots Indicators */}
      <div className="flex justify-center gap-2 mt-4 md:mt-6">
        {currentSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400
                       ${currentIndex === index 
                         ? 'w-8 h-2.5 bg-blue-500' 
                         : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                       }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-2 text-xs text-gray-400 font-mono">
        {currentIndex + 1} / {totalSlides}
      </div>
    </div>
  );
};

export default Carousel;