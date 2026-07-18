import { IoCode } from "react-icons/io5";
import '../index.css';
import { WhatsappContact } from "./links/WhatsappContact";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const Navbar = () => {

    interface navLinks {
        id: number,
        link: string,
    }

    const links: navLinks[] = [
        { id: 0, link: "work" },
        { id: 1, link: "about" },
        { id: 2, link: "experience" },
    ]

    return (
        <header className="w-full flex mb-30 lg:mb-0 z-50 sticky top-0">
            <nav className="w-[90%] max-w-384 border-[#E5E7EB] mt-10 py-1 px-6 rounded-4xl bg-[#FFF8F6]  shadow-sm mx-auto h-auto flex flex-row items-center justify-between">

                {/* Logo */}
                <div className="flex flex-row gap-4 items-center">
                    <IoCode className="text-[20px]" />
                    <h1 className="text-[#221A16] tracking-tighter font-space text-[28px] font-bold">MCDAN</h1>
                </div>

                {/* Desktop nav links */}
                <ul className="hidden md:flex flex-row text-[#55433C] font-dm text-[14px] uppercase gap-5">
                    {links.map((link) => (
                        <li key={link.id}><a href={`#${link.link}`}>{link.link}</a></li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <button className="px-6 border border-[#635F40] py-1 bg-[#FFF8F6] rounded-4xl text-white uppercase font-extralight text-sm">
                        <WhatsappContact />
                    </button>
                </div>

                {/* Mobile hamburger dropdown */}
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="border-[#635F40] bg-[#FFF8F6] rounded-xl px-3 py-1">
                                <span className="flex flex-col gap-1">
                                    <span className="block w-4 h-0.5 bg-[#221A16]" />
                                    <span className="block w-4 h-0.5 bg-[#221A16]" />
                                    <span className="block w-4 h-0.5 bg-[#221A16]" />
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-44 bg-[#FFF8F6]">
                            <DropdownMenuLabel className="text-[#55433C] font-dm uppercase text-xs">Menu</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                {links.map((link) => (
                                    <DropdownMenuItem key={link.id} asChild>
                                        <a href={`#${link.link}`} className="text-[#55433C] font-dm uppercase text-sm w-full">
                                            {link.link}
                                        </a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <WhatsappContact />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </nav>
        </header>
    )
}