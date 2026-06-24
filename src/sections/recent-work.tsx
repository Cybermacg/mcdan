import { FaCode } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import image from "../assets/image1.png";
import image2 from "../assets/project2.png";

export const RecentWork = () => {
    return(
        <section className="w-full  min-h-screen flex flex-col items-center space-y-20 justify-center">
            <div className="flex mb-10 max-w-4xl">
                 <h1 className="font-space text-[#221A16] text-[65px] text-[clamp(2rem, 4vw+1rem,3.2rem)] font-bold">Recent</h1>
                 <h1 className="font-space text-[#B55B37] text-[65px] text-[clamp(2rem, 4vw+1rem,3.2rem)] font-bold">Works</h1>
            </div>


            <div className="w-[80%] mx-auto flex flex-col lg:max-w-384">
                {/* first child */}
                <div className="w-[100%] mx-auto text-[clamp(1rem,1vw+0.5rem,1.2rem)] flex flex-col lg:flex-row items-center gap-15 ">
                    {/* first grand-child with writeup */}
                    <div className="w-full lg:w-[50%] flex flex-col space-y-5">
                        <p className="text-[#8C7B6B]">FEATURED PROJECT</p>
                        <h1 className="text-[#221A16] font-extrabold">Sunora Landing page</h1>
                        <p className="text-[#8C7B6B]">Under Dvelopment</p>
                        <p className="text-[#55433C]">
                            A clean, conversion-focused solar energy landing page built for modern homeowners and commercial clients. Built with React and styled to reflect the efficiency and clarity of renewable energy — featuring glassmorphic stat cards, smooth scroll animations, and a warm earthy palette that feels trustworthy and premium.
                        </p>
                        <div className="flex text-[#964322] flex-row gap-5">
                            <FaCode />
                            <FaExternalLinkAlt />
                        </div>
                    </div>

                    {/* second child with image about project */}
                    <div className="h-full w-full lg:w-1/2 bg-[#FFF8F6] rounded-4xl flex justify-center items-center ring ring-[#D1D5DB]">
                        <div className=" rounded-4xl w-full overflow-hidden aspect-video">
                            <img className=" h-auto w-full rounded-4xl object-center" src={image}/>
                        </div>
                    </div>
                </div>
            </div>



             {/* second project */}


             <div className="w-[80%] mx-auto flex flex-col lg:max-w-384">
                {/* first child */}
                <div className="w-[100%] mx-auto text-[clamp(1rem,1vw+0.5rem,1.2rem)] flex flex-col lg:flex-row-reverse items-center gap-15 ">
                    {/* first grand-child with writeup */}
                    <div className="w-full lg:w-[50%] flex flex-col space-y-5">
                        <p className="text-[#8C7B6B]">FEATURED PROJECT</p>
                        <h1 className="text-[#221A16] font-extrabold">Recipely</h1>
                        <p className="text-[#8C7B6B]">Under Dvelopment</p>
                        <p className="text-[#55433C]">
                          This platform uses curated collections to connect users with their next favorite dish, emphasizing simplicity and exploration. Built with React and styled with Tailwind CSS, the interface reflects the rustic-premium aesthetics all against a warm, light cream canvas that feels inviting and wholesome.

                        </p>
                        <div className="flex text-[#964322] flex-row gap-5">
                            <FaCode />
                            <FaExternalLinkAlt />
                        </div>
                    </div>

                    {/* second child with image about project */}
                    <div className="h-full w-full lg:w-1/2 bg-[#FFF8F6] rounded-4xl flex justify-center items-center ring ring-[#D1D5DB]">
                        <div className=" rounded-4xl w-full overflow-hidden aspect-video">
                            <img className=" h-auto w-full rounded-4xl object-center" src={image2}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[80%]  mb-5 ring ring-[#D1D5DB]"></div>
        </section>
    )
}