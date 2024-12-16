import Image from "next/image";
import Hero from "./_components/Hero";
import NavBar from "./_components/Navbar";
import {ArrowRight } from "lucide-react";

import { avisVisiteurs } from "@/data/avis";
import AvisCarousel from "./_components/Avis";
import Footer from "./_components/Footer";


export default function Home() {
  return (
    <>
    <div className="font-[family-name:var(--font-geist-sans)]">
     <NavBar/>
     <Hero/>
  {/*HORAIRE SECTION*/}
  <div className="bg-[#D2B48C] min-h-[650px]   px-250  flex py-12 justify-center  relative">
  <Image src="/leaf.png" alt="leaf" width={320} height={384} className=" absolute top-0 right-0"/>
    <div className="h-[400px] w-[589px]">
    <Image
    src="/gorilla.jpg"
    alt="gorilla"
    width={400}
    height={589}
    className="rounded-lg object-cover"
  />
  </div>

  <div className="ml-10 max-w-lg">
    <h1 className="text-secondary text-2xl font-bold mb-4">HORAIRE D'OUVERTURE</h1>
    <p className="text-2xl mb-4" >Fermeture Hivernal :<br /> du 10 novembre 2024 au 30 mars 2025</p>

    <p className="text-2xl mb-4">En 2025 <br />Mars,Avril, Mai, Juin, Septembre : 10h a 20h <br />
    Juillet, août : de 10h à 19h<br></br>Octobre, novembre : de 10h à 17h30 <br/>
Les entrées sont suspendues 1h30 avant la fermeture du parc.<br></br>Pour des raisons de sécurité, les animaux de compagnie sont interdits à l’intérieur du Parc. </p>
    
  </div>
    
    
    
  </div>
    
  {/*EXPERIENCE SECTION*/}
  <div className="py-20 bg-[#D2B48C] min-h-[1444px] px-250 flex flex-col  items-center justify-center  relative">
  <Image src="/leaf.png" alt="leaf" width={320} height={384} className="rotate-180 absolute bottom-0 left-0"/>
  <h2 className="text-center text-5xl font-bold mb-10 text-white">
    EXPÉRIENCES IMMERSIVES
  </h2>

  {/* Grille */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
   
    <div className="bg-secondary w-[600px] h-[300px] md:h-[560px] rounded-lg mx-auto relative">
    
    <Image
    src="/train.jpg"
    alt="train"
    width={600}
    height={561}
    className="rounded-lg h-[560px] object-cover w-[600px] absolute top-4 left-4 cursor-pointer"
  />
    </div>

 
    <div className="bg-secondary w-[600px] h-[300px] md:h-[560px] rounded-lg mx-auto relative">
    <Image
    src="/resto.jpg"
    alt="resto"
    width={600}
    height={561}
    className="rounded-lg object-cover h-[560px] w-[600px] absolute top-4 left-4 cursor-pointer"
  />
    </div>

 
    <div className="bg-secondary col-span-2 w-[600px] h-[300px] md:h-[560px] rounded-lg mx-auto relative">
    <Image
    src="/visite.avif"
    alt="visite"
    width={600}
    height={561}
    className="rounded-lg h-[560px] object-cover w-[600px] absolute top-4 left-4 cursor-pointer"
  />
    </div>
  
 
  </div>
</div>


{/*voyage SECTION*/}
<div className="bg-secondary py-[7rem] flex flex-col  justify-center min-h-[548px] px-250 relative">
  {/* Image en haut à droite */}
  <Image
    src="/white.png"
    alt="leaf white"
    width={75}
    height={75}
    className="h-[75px] w-[75px] absolute top-16 right-16"
  />
  
  <h1 className="text-4xl md:text-5xl font-bold  mb-6 max-w-8xl">
    Voyagez autour du monde à la découverte des beautés de la Nature !
  </h1>


  <p className="text-xl md:text-3xl leading-relaxed  max-w-8xl">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>


{/*HABITAT SECTION*/}
<div className="bg-primary py-[7rem] flex flex-col  justify-center items-center min-h-[548px] px-250 ">
 <h1 className="text-4xl md:text-5xl font-bold  mb-8 max-w-8xl">LES INCOUTOURNABLES DE NOTRES VISITES</h1>
 
  <div className="flex justify-between gap-16 mb-8 py-[7rem]">
    <div className="h-[461px] w-[380px] relative cursor-pointer"><Image alt="marais" src="/marais.jpg" fill className="rounded-lg object-cover"/></div>
    <div className="h-[461px] w-[380px] relative cursor-pointer"><Image alt="jungle" src="/jungle.jpg" fill className="rounded-lg object-cover"/></div>
    <div className="h-[461px] w-[380px] relative cursor-pointer"><Image alt="savane" src="/savane.jpg" fill className="rounded-lg object-cover"/></div>
  </div>

  <div>
  <button className="bg-secondary rounded-xl p-3 text-[45px] flex items-center gap-4">
    Je Découvre Les Habitats
    <ArrowRight width={45} height={45} />
  </button>
</div>

</div>



{/*ANIMAUX SECTION*/}
<div className="bg-primary py-[7rem] flex flex-col  justify-center items-center min-h-[548px]
 ">
<h1 className="text-4xl md:text-5xl font-bold  mb-8 max-w-8xl">LES ANIMAUX D'ARCADIA</h1>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
      <div className="relative h-[502px] w-[549px]">
        <Image
          src="/lion.jpg"
          alt="lion"
          fill
          className="object-cover"/>
        </div> 
        <div className="relative h-[502px] w-[549px]">
        <Image
          src="/nounours.jpg"
          alt="nounours"
          fill
          className="object-cover"/>
          </div> 
      <div className="relative h-[502px] w-[549px] ">
        <Image
          src="/rhino.jpg"
          alt="rhino"
          fill
          className="object-cover"/>
        </div> 
        <div className="relative h-[502px] w-[549px] ">
        <Image
          src="/singe.jpg"
          alt="gorilla"
          fill
          className="object-cover"/>
        </div> 
        <div className="relative h-[502px] w-[549px] ">
        <Image
          src="/hippo.jpg"
          alt="rhino"
          fill
          className="object-cover"/>
        </div> 
        <div className="relative h-[502px] w-[549px] ">
        <Image
          src="/tigre.jpg"
          alt="tigre"
          fill
          className="object-cover"/>
        </div> 
        <div className="relative h-[502px] w-[549px] ">
        <Image
          src="/phoque.jpg"
          alt="phoque"
          fill
          className="object-cover"/>
        </div> 
        <div className="relative h-[502px] w-[549px] ">
        <Image
          src="/loup.jpg"
          alt="loup"
          fill
          className="object-cover"/>
        </div> 
        <div className="relative h-[502px] w-[549px] ">
        <Image
          src="/girafe.jpg"
          alt="girafe"
          fill
          className="object-cover"/>
        </div> 
</div>



</div>



<div className="bg-[#A5D8FF] py-[7rem] min-h-[548px] px-250 flex flex-col items-center ">
<h1 className="text-4xl md:text-5xl text-center font-bold  mb-8 max-w-8xl">AVIS VISITEURS</h1>
<div >

      <AvisCarousel avisVisiteurs={avisVisiteurs} />

</div>
<h1 className="text-4xl md:text-5xl text-center font-bold mt-8  max-w-8xl">ENVOYER UN AVIS</h1>
<form className="flex flex-col gap-7 mt-8">
  <input type="text" placeholder="name" className="text-black p-6"/>
  <textarea name="" id="" placeholder="message" className="text-black w-72 h-44 p-6"></textarea>
</form>
</div>

<Footer/>

</div>
  </>
  );
}
