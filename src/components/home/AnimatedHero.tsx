
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';

// Hero images - in a production app, you would load these from a CMS or API
const heroImages = [
  '/lovable-uploads/micheile-henderson-lZ_4nPFKcV8-unsplash.jpg',
  'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070',
  'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070',
  'https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=2070',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
];

// Hero headlines - each one matches a service offering of GreenCity Financial
const heroHeadlines = [
  { title: "Build Your Financial Future Today", subtitle: "Innovative wealth solutions for lasting prosperity" },
  { title: "Secure Investments, Remarkable Returns", subtitle: "Treasury Linked Notes for stable growth" },
  { title: "Expert Portfolio Management", subtitle: "Tailored strategies aligned with your goals" },
  { title: "Fixed Income, Flexible Solutions", subtitle: "Reliable returns for peace of mind" },
  { title: "Your Journey to Financial Freedom", subtitle: "Start with as little as ₦10,000" },
];

const AnimatedHero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Animate text and button when slide changes
  useEffect(() => {
    if (textRef.current && subtitleRef.current && buttonRef.current) {
      // Clear any existing animations
      gsap.killTweensOf([textRef.current, subtitleRef.current, buttonRef.current]);
      
      // Reset
      gsap.set([textRef.current, subtitleRef.current, buttonRef.current], { 
        opacity: 0, 
      });
      
      // Create new timeline for smooth sequencing
      const tl = gsap.timeline();
      
      // Animate headline with typewriter effect
      tl.to(textRef.current, { 
        opacity: 1, 
        duration: 0.5, 
        delay: 0.3, 
        onStart: () => {
          // Split text animation logic
          const text = heroHeadlines[activeIndex].title;
          const element = textRef.current;
          
          if (element) {
            element.innerHTML = '';
            element.style.opacity = '1';
            
            // Animate each letter with a staggered delay
            let charIndex = 0;
            const typeInterval = setInterval(() => {
              if (charIndex < text.length) {
                if (text[charIndex] === ' ') {
                  element.innerHTML += '&nbsp;';
                } else {
                  element.innerHTML += text[charIndex];
                }
                charIndex++;
              } else {
                clearInterval(typeInterval);
              }
            }, 40);
          }
        }
      });
      
      // Animate subtitle with fade in
      tl.to(subtitleRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.7, 
        delay: 0.2,
      }, "-=0.2");
      
      // Animate button with scale effect
      tl.to(buttonRef.current, { 
        opacity: 1, 
        scale: 1, 
        duration: 0.5, 
        ease: "back.out(1.7)" 
      }, "-=0.3");
    }
  }, [activeIndex]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Main image carousel with parallax and fade effect */}
      <Swiper
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={800}
        loop={true}
        modules={[EffectFade, Autoplay, Thumbs]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className="w-full h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Parallax effect with CSS */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] ease-out"
              style={{ 
                backgroundImage: `url(${image})`,
                transform: `scale(1.05)`,
              }}
            ></div>
            
            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/30"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content overlay - text and buttons */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6 text-white">
            <span className="inline-block py-1 px-3 bg-greencity-500/90 text-white rounded-full text-sm font-medium">
              GreenCity Financial Limited
            </span>
            
            <div className="space-y-4">
              <h1 ref={textRef} className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-playfair min-h-[3.5rem]">
                {/* Text injected by JS animation */}
              </h1>
              
              <p ref={subtitleRef} className="text-lg md:text-xl opacity-0 transform translate-y-4 font-dm-sans">
                {heroHeadlines[activeIndex].subtitle}
              </p>
            </div>
            
            <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 opacity-0 transform scale-95">
              <Button asChild className="bg-greencity-500 hover:bg-greencity-600 text-white border border-white hover:shadow-lg transition-all duration-300 text-base h-12 px-8">
                <Link to="/signup">GET STARTED</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 text-base h-12 px-6">
                <Link to="/products" className="flex items-center">
                  Explore Products <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-start gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-greencity-500">₦50B+</p>
                <p className="text-sm text-white">Assets Managed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-greencity-500">20K+</p>
                <p className="text-sm text-white">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-greencity-500">15%</p>
                <p className="text-sm text-white">Avg Annual ROI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Thumbnail navigation at bottom */}
      <div className="absolute bottom-6 left-0 right-0 z-20 px-4">
        <div className="container mx-auto">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView={"auto"}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="thumbs-swiper max-w-3xl"
          >
            {heroImages.map((image, index) => (
              <SwiperSlide 
                key={`thumb-${index}`} 
                className="w-20 h-12 cursor-pointer rounded-md overflow-hidden opacity-50 hover:opacity-75 transition-opacity"
                style={{ width: 'auto' }}
              >
                <div 
                  className={`w-full h-full bg-cover bg-center border-2 ${activeIndex === index ? 'border-greencity-500 opacity-100' : 'border-transparent opacity-60'}`}
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;
