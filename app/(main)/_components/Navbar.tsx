import { User2Icon } from "lucide-react";
import Link from "next/link";




const NavBar = () => {
    return (

        <>
        
        <nav className="z-10 bg-primary px-3 h-[225px] w-full flex items-center flex-col ">
            <div className="text-[64px] font-bold p-5">ARCADIA</div>
            
            
            <div className="flex gap-x-[220px] text-[40px]"> 
                <Link href="/">Services</Link>
                <Link href="/">Habitats</Link>
                <Link href="/">Contact</Link>
                <Link href="/"><User2Icon height={50} width={61}/></Link>
            </div>
        </nav>
        </>
      );
}
 
export default NavBar;