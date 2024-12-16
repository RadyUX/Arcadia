import Image from "next/image";


const Hero = () => {
    return ( 
        <>
        
          <div className="flex flex-col items-center justify-center w-screen h-screen  relative" style={{ height: "1000px" }}>
          
          <div className="absolute inset-0 z-0">
          <Image
            src="/bear.jpg"
            alt="Bear"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-black opacity-15"></div> {/* Overlay sombre */}
        </div>
        <div className="absolute top-1/4 text-white text-center z-10  animate-fade-in">
          <h2 className="text-7xl font-bold ">Bienvenue à ARCADIA</h2>
        
        </div>
      </div>


 
        </>
     );
}
 
export default Hero;