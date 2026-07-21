import { motion } from "motion/react";
export const AboutMe = () => {


    interface skills {
        id: number,
        text: string,
    }

    const skills: skills[] = [
        {
            id: 0,
            text: "HTML",
        },
        {
            id: 1,
            text: "CSS",
        },
        {
            id: 2,
            text: "JavaScript",
        },
        {
            id: 3,
            text: "Tailwind CSS",
        },
        {
            id: 4,
            text: "ReactJs"
        },
        {
            id: 5,
            text: "Typescript"
        },
        {
            id: 6,
            text: "AI Agentic Development"
        },
        {
            id: 7,
            text: "Google Stitch"
        },
    ]

    return (
        <section id="about" className="w-full h-screen 
         flex flex-col items-center justify-center">

            {/* about me text */}
            <div className=" w-[80%] mx-auto  lg:max-w-384">
                {/* contains header text */}
                <motion.div initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1.05}} transition={{duration: 1.5, type: "spring", stiffness: 100}}     className="flex  max-w-4xl mb-10 mx-auto justify-center flex-row gap-2 ">
                    <h1 className="font-space text-[#221A16] text-[72px] text-[clamp(2rem, 4vw+1rem,3.75rem)] font-bold">About</h1>
                    <h1 className="font-spacee text-[#635F40] text-[72px] text-[clamp(2rem, 4vw+1rem,3.75rem)] font-bold">Me</h1>
                </motion.div>

                {/* contains paragraph text */}
                <motion.div initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1.05}} transition={{duration: 1.5, type: "spring", stiffness: 100}}>
                    <p className="text-[#55433C] text-[clamp(1rem,1vw+0.5rem,1.5rem)] max-w-4xl mx-auto text-center">
                        I'm a multidisciplinary developer with a passion for creating tactile, organic digital spaces. I
                        believe in a "warm-cream-first" approach to interfaces—eschewing cold tech aesthetics for
                        something more human, approachable, and grounded. My process bridges the gap between
                        sophisticated design systems and robust technical implementation.
                    </p>
                </motion.div>

            </div>

            {/* skillsets */}
            <div className=" w-[80%] mx-auto flex flex-col gap-10 items-center mt-15 lg:max-w-384">

                <div className="uppercase text-[#8C7B6B]">
                    <h1>Technologies</h1>
                </div>
                <div className="flex gap-4 flex-wrap">
                    {skills.map((skill) => {
                        return (
                            <li key={skill.id} className="px-4 py-2 rounded-4xl list-none text-black border-[#E5E7EB] bg-[#F5E8DF]">
                                {skill.text}
                            </li>
                        )
                    })}
                </div>
            </div>
        </section>
    )

}