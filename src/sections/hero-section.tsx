import image from '../assets/hero-image.png';
import { motion } from 'motion/react';
export const HeroSection = () => {
    return (
        <section className="w-full h-screen mb-10 flex items-center justify-center">
            <div className="flex h-screen items-center justify-center gap-30 flex-col w-[80%] lg:flex-row lg:max-w-384">
                {/* hero section text area */}
                <div className="w-[90%] md:w-[50%] flex items-center justify-center">
                    <div className="flex flex-col gap-8 ">
                        <motion.h1 whileInView={{ opacity: 1, scale: 1.1 }} initial={{ opacity: 0, scale: 0 }} transition={{ duration: 2, type: "spring", stiffness: 100 }} className="text-[#221A16] text-[60px] font-normal">Hi, I'm Mcdan</motion.h1>
                        <motion.h2 whileInView={{ opacity: 1, scale: 1.1 }} initial={{ opacity: 0, scale: 0 }} transition={{ duration: 2, type: "spring", stiffness: 100 }} className="text-[#635F40] font-space text-[28px] font-bold">Front-End Developer</motion.h2>
                        <motion.p whileInView={{ opacity: 1, scale: 1.1 }} initial={{ opacity: 0, scale: 0 }} transition={{ duration: 2, type: "spring", stiffness: 100 }} className="text-[#55433C] text-left font-medium text-[18px] lg:w-[450px] font-dm">I build accessible, inclusive products and digital
                            experiences that blend minimal design with solid
                            engineering. Grounded in a warm, organic aesthetic.</motion.p>
                    </div>
                </div>
                {/* hero section image area */}
                <div className=" flex items-center w-[90%] justify-center md:w-[50%]">
                    <motion.div
                        whileInView={{ opacity: 1, scale: 1.02 }} initial={{ opacity: 0, scale: 0 }} transition={{ duration: 3, type: "spring", stiffness: 200 }}
                        className="w-100 h-100
                    lg:w-120 lg:h-120 shadow-lg rounded-full bg-[#F0DFD9] flex items-center justify-center">
                        <div className="w-98 h-98
                        lg:w-118 lg:h-118 rounded-full overflow-hidden bg-white">
                            <img src={image} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}