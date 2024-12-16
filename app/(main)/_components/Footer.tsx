import Link from "next/link";

const Footer = () => {
    return ( 
        <>
        <div className="p-16 w-screen bg-[#33658A] h-1/3">
        <h1 className="text-4xl mb-8">ARCADIA</h1>
        <div className="flex gap-12">
          
            <div className="flex flex-col gap-6">
                <p className="text-2xl">Zoo d'Arcadia <br />Lorem Ipsumn <br/> 59600 rue Lorem</p>
                <p className="text-2xl">+33 02 34 53 65 67<br/>info@zoo-arcadia.com</p>

            </div>

            <div className="flex flex-col">
            <p  className="text-2xl"><Link href="/">Le Parc</Link></p>
            <p  className="text-2xl"><Link href="/">Le Animaux</Link></p>
            <p  className="text-2xl"><Link href="/">Les Services</Link></p>
            <p  className="text-2xl"><Link href="/">Les Habitats</Link></p>
            <p  className="text-2xl"><Link href="/">Contact</Link></p>
            </div>

        </div>

        <div className="flex mt-8 justify-end gap-12">
            <p className="text-2xl">Mention Légales</p>
            <p className="text-2xl">CSV</p>
            <p className="text-2xl">Réglement intérieur</p>
            <p className="text-2xl">Protection des données</p>
        </div>

        </div>


        </>
     );
}
 
export default Footer;