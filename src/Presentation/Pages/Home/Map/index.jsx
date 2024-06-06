import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      const card = cardRef.current;

      const handleMouseMove = () => {
        const cardRect = card.getBoundingClientRect();
        const mouseX = (event.clientX - cardRect.left - cardRect.width / 2) / (cardRect.width / 2);
        const mouseY = (event.clientY - cardRect.top - cardRect.height / 2) / (cardRect.height / 2);

        gsap.to(card, {
          rotationY: 10 * mouseX,
          rotationX: -10 * mouseY,
          transformPerspective: 500,
          transformOrigin: "center",
          duration: 0.3,
          ease: "power2.out", 
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          transformPerspective: 500,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []); 

  return (
    <div className="w-full overflow-hidden h-full bg-rose-600 p-5 flex rounded-tr-[45px]">
      <div ref={cardRef} className="w-full flex justify-center items-center">
        <img src="/image/continent.png" alt="continent" className="lg:w-[600px] md:w-[400px]  w-[300px]  h-auto" />
      </div>
    </div>
  );
};

export default Index;
