import { IoCode } from "react-icons/io5";
import '../index.css';
export const Navbar = () =>{


    interface navLinks{
        id: number,
        link: string,
    } 

    const links: navLinks[] =[
        {
            id: 0,
            link: "Work",
        },

        {
            id: 1,
            link: "About",
        },

        {
            id: 2,
            link: "experience",
        },
    ]

    return(
        <header className="w-full flex mb-30 lg:mb-0 sticky top-0">
            <nav className="w-[80%] max-w-384 border-[#E5E7EB] mt-10 py-1 px-6 rounded-4xl bg-[#FFF8F6] shadow-sm mx-auto h-auto flex flex-row items-center justify-between">
                <div className="flex flex-row gap-4 items-center">
                    <IoCode  className="text-[20px]" />
                    <h1 className="text-[#221A16] tracking-tighter font-space text-[28px] font-bold">MCDAN</h1>
                </div>

                <div>
                    <ul className=" hidden md:flex  flex-row text-[#55433C] font-dm text-[14px] uppercase gap-5">
                        {links.map((link) =>{
                            return <li key={link.id}>{link.link}</li>
                        })}
                    </ul>
                </div>

                <div>
                    <button className="px-6 py-1 bg-[#635F40] rounded-4xl text-white uppercase font-extralight text-sm  ">Contact</button>
                </div>
            </nav>
        </header>
    )
}