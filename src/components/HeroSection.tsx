import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

const HERO_SLIDES = [
  {
    title: "Vanquish Comp",
    highlight: "Carbon",
    oldPrice: 1495,
    price: 1195,
    description: "High-end road carbon frame premium aluminum fork carbon, fork: the ideal bike for premium speed racetrack.",
    video: "https://media.istockphoto.com/id/1466459662/video/tracking-shot-cyclist-cycling-uphill-on-road-in-sunrise-mountains.mp4?s=mp4-640x640-is&k=20&c=MYNO9eAvvgFRYc2jp1ReL6lfNAS-fwcalUm94UJOOV4=",
    poster: "/assets/hero-bike.png",
  },
  {
    title: "Singletrack Speed",
    highlight: "Pro",
    oldPrice: 1299,
    price: 999,
    description: "Built for speed and agility on mountain trails. Lightweight, durable, and ready for adventure.",
    video: "https://videos.pexels.com/video-files/4147906/4147906-hd_1920_1080_25fps.mp4", // Viresh Studio Pexels
    poster: "/assets/hero-bike.png",
  },
  {
    title: "Trail Power",
    highlight: "Elite",
    oldPrice: 1599,
    price: 1299,
    description: "Perfect balance of power and control for trail riding. Conquer any terrain with confidence.",
    video: "https://videos.pexels.com/video-files/4957761/4957761-hd_1920_1080_25fps.mp4", // Tima Miroshnichenko Pexels
    poster: "/assets/hero-bike.png",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [exit, setExit] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const slide = HERO_SLIDES[current];

  // Helper for animated transition
  const triggerExit = (callback: () => void) => {
    setExit(true);
    setTimeout(() => {
      callback();
      setExit(false);
    }, 700); // match animation duration
  };

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Scroll to bikes/products section
  const handleBuyNow = () => {
    triggerExit(() => {
      const el = document.getElementById("bikes-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  };
  const handleExplore = () => {
    triggerExit(() => {
      const el = document.getElementById("products-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  };

  const handlePrev = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
      setIsPlaying(false);
      setAnimating(false);
    }, 350);
  };
  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
      setIsPlaying(false);
      setAnimating(false);
    }, 350);
  };

  return (
    <section className={`relative min-h-screen bg-background pt-20 overflow-hidden transition-all duration-700 ${exit ? 'opacity-0 translate-y-16 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
      <div className="container mx-auto px-4 py-12 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-500 ${animating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`} key={current+"-left"}>
            <div className="animate-fade-in-down">
              <p className="text-muted-foreground uppercase tracking-wider text-sm mb-2 animate-fade-in">
                BEST BIKES 2024
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                {slide.title} <br />
                <span className="text-primary animate-fade-in-scale">{slide.highlight}</span>
              </h1>
            </div>
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-baseline space-x-2">
                <span className="text-muted-foreground line-through text-xl">${slide.oldPrice.toFixed(2)}</span>
                <span className="text-primary text-3xl font-bold animate-fade-in-scale">${slide.price.toFixed(2)}</span>
              </div>
              <p className="text-muted-foreground max-w-md animate-fade-in">
                {slide.description}
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="hero" onClick={handleBuyNow} className="transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg">
                BUY NOW
              </Button>
              <Button variant="hero-outline" onClick={handleExplore} className="transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg">
                EXPLORE PRODUCTS
              </Button>
            </div>
            {/* Navigation arrows */}
            <div className="flex space-x-4 pt-8">
              <Button variant="ghost" size="icon" className="border border-border rounded-none transition-transform duration-300 hover:scale-110" onClick={handlePrev}>
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="border border-border rounded-none transition-transform duration-300 hover:scale-110" onClick={handleNext}>
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          {/* Right Content - Video with Play Button */}
          <div className={`relative flex items-center justify-center transition-all duration-500 ${animating ? 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0'}`} key={current+"-right"}>
            <div className="absolute inset-0 bg-gradient-hero rounded-2xl opacity-20 pointer-events-none animate-fade-in" />
            <div className="relative bg-gradient-hero rounded-2xl p-4 flex items-center justify-center animate-fade-in-scale">
              <video
                ref={videoRef}
                src={slide.video}
                poster={slide.poster}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
                style={{ background: "#000" }}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
              />
              {/* Play/Pause button overlay */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/60 backdrop-blur border border-white/30 rounded-full w-16 h-16 hover:bg-background/80 z-10 animate-fade-in-scale"
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8 text-white" />
                ) : (
                  <Play className="h-8 w-8 text-white ml-1" />
                )}
              </Button>
            </div>
            {/* Carousel indicators */}
            <div className="flex justify-center space-x-2 mt-8 absolute bottom-0 left-1/2 -translate-x-1/2">
              {HERO_SLIDES.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === current ? "bg-primary scale-125" : "bg-muted scale-100"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Custom Animations */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;