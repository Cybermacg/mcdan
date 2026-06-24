import image from '../assets/hero-image.png';
export const HeroSection = () =>{
    return(
        <section id='about' className="w-full h-screen flex items-center justify-center">
            <div className="flex h-screen items-center justify-center gap-30 flex-col w-[80%] lg:flex-row lg:max-w-384">
                {/* hero section text area */}
                <div className="w-[90%] md:w-[50%] flex items-center justify-center">
                    <div className="flex flex-col gap-8 ">
                        <h1 className="text-[#221A16] text-[60px] font-normal">Hi, I'm Mcdan</h1>
                        <h2 className="text-[#FFB59A] font-space text-[28px] font-bold">Front-End Developer</h2>
                        <p className="text-[#55433C] text-left font-medium text-[18px] lg:w-[450px] font-dm">I build accessible, inclusive products and digital
                        experiences that blend minimal design with solid
                        engineering. Grounded in a warm, organic aesthetic.</p>
                    </div>
                </div>
                {/* hero section image area */}
                <div className=" flex items-center justify-center md:w-[50%]">
                    <div className="w-100 h-100
                    lg:w-120 lg:h-120 shadow-lg rounded-full bg-[#F0DFD9] flex items-center justify-center">
                        <div className="w-98 h-98
                        lg:w-118 lg:h-118 rounded-full overflow-hidden bg-white">
                            <img src={image}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}