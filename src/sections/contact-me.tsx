import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { WhatsappContact } from "../links/WhatsappContact";
import { GmailContact } from "../links/GmailContact";
export const ContactMe = () => {
    return(
        <section className="w-full  min-h-screen flex flex-col items-center space-y-20 justify-center">

            <div className="flex mb-10 max-w-4xl">
                <h1 className="font-space text-[#221A16] text-[72px] text-[clamp(2rem, 4vw+1rem,3.75rem)] font-bold">Contact</h1>
                 <h1 className="font-space text-[#B55B37] text-[72px] text-[clamp(2rem, 4vw+1rem,3.75rem)] font-bold">Me</h1>
            </div>


            <div className="flex w-[80%] flex-col gap-10">
                <div>
                    <p className="text-[#55433C]">
                        Let's build something beautiful together. Reach out for
                        collaborations or just to say hello.
                    </p>
                </div>

                {/* gmail contact */}
                    <div className="flex flex-row items-center">
                        <div className="h-12 w-12 bg-[#F6E4DF] rounded-full flex items-center justify-center">< IoIosMail className="text-[#964322] h-6 w-6" /></div>
                        <div>
                            <p><GmailContact/></p>
                        </div>
                    </div>

                {/* location */}
                    <div className="flex flex-row items-center">
                        <div className="h-12 w-12 bg-[#F6E4DF] rounded-full flex items-center justify-center">< FaLocationDot className="text-[#964322] h-6 w-6" /></div>
                        <div className="text-[#635F40] p-3">
                            <p>Abia state, Umuahia</p>
                        </div>
                    </div>


                {/* whatsapp contact */}
                    <div className="flex flex-row items-center">
                        <div className="h-12 w-12 bg-[#F6E4DF] rounded-full flex items-center justify-center">< FaWhatsapp className="text-[#964322] h-6 w-6" /></div>
                        <div>
                            <p><WhatsappContact/></p>
                        </div>
                    </div>
            </div>


            {/*  */}



        </section>
    )
}