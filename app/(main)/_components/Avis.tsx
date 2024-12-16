"use client"

import { ArrowLeft , ArrowRight} from 'lucide-react';
import { useState } from 'react'



interface avisType {
    name: string,
    comment: string
}
const Avis = ({name, comment}: avisType) => {
    return ( 
        <div className="bg-[#33658A] p-8 w-[500px] rounded-2xl h-[500px] flex flex-col items-center justify-center">
        <div>{name}</div>
        <p>{comment}
        </p>
        </div>
     );
}
 

  
const AvisCarousel = ({ avisVisiteurs }: { avisVisiteurs: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? avisVisiteurs.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === avisVisiteurs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
    <div className="mt-11 relative flex justify-center items-center w-screen mx-auto overflow-hidden">
      {/* Bouton Précédent */}
      <button
        className="absolute left-0 text-[#33658A]  rounded-full p-2 z-10"
        onClick={prevSlide}
      >
        <ArrowLeft width={90} height={40} />
      </button>

      {/* Carousel Content */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {avisVisiteurs.map((avis, index) => {
           const isCenter = index === currentIndex + 1;

            return (
              <div
                key={index}
                className={`flex-shrink-0 w-1/3 flex justify-center items-center p-4 ${
                  isCenter ? "scale-100 rounded-xl" : "scale-90"
                } transition-transform duration-300`}
              >
                <div className="bg-[#33658A] flex flex-col items-center text-white p-20 rounded-lg shadow-lg max-w-[561px] h-[561px]">
                  <h3 className="text-xl font-bold mb-4">{avis.nom}</h3>
                  <p className="text-3xl ">{avis.commentaire}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bouton Suivant */}
      <button
        className="absolute right-0  text-[#33658A]  rounded-full p-2 z-10"
        onClick={nextSlide}
      >
        <ArrowRight width={90} height={40} />
      </button>
    </div>
    
          </>
      );
}

export default AvisCarousel;