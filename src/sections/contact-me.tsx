import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { WhatsappContact } from "../components/links/WhatsappContact";
import { GmailContact } from "../components/links/GmailContact";
import { useForm, } from "react-hook-form"
export const ContactMe = () => {
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            defaultValues: {
                firstName: '',
                email: '',
                phoneNumber: '',
                message: '',
            }
        });

    const onSubmit = (data: any) => {
        const message = `
        New portfolio Contact
        Name: ${data.firstName}
        Email: ${data.email}
        Contact-Info: ${data.phoneNumber}
        Message: ${data.message}`;

        const phone = '2349063712315';

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };



    return (
        <section id="contact-me" className="w-full  min-h-screen flex flex-col items-center space-y-20 justify-center">

            <div className="flex mb-10 max-w-4xl">
                <h1 className="font-space text-[#221A16] text-[72px] text-[clamp(2rem, 4vw+1rem,3.75rem)] font-bold">Contact</h1>
                <h1 className="font-space text-[#635F40] text-[72px] text-[clamp(2rem, 4vw+1rem,3.75rem)] font-bold">Me</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-center">

                <div className=" w-[90%]">
                    <form className="flex flex-col px-5  bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-sm py-5 gap-3" onSubmit={handleSubmit(onSubmit)}>
                        <input className="p-3 outline-0 border rounded-xl" {...register('firstName', { required: ' Please your Name is required' })} type="text" placeholder="Name" />
                        <p className="text-red-800">{errors.firstName?.message}</p>
                        <input className="p-3 outline-0 border rounded-xl" {...register('email', { required: 'Please Your Email is required' })} type="email" placeholder="Email" />
                        <p className="text-red-800">{errors.email?.message}</p>
                        <input className="p-3 outline-0 border rounded-xl" {...register('phoneNumber', { required: 'Please enter you phone number' })} type="text" placeholder="Phone" />
                        <p className="text-red-800">{errors.phoneNumber?.message}</p>
                        <textarea className="p-5 outline-0 border rounded-xl" {...register('message', { required: 'Please Enter message' })} placeholder="Enter your message" />
                        <p className="text-red-800">{errors.message?.message}</p>
                        <input className="bg-[#8C7B6B] p-2 rounded-sm" type="submit" />
                    </form>
                </div>

                {/* contact area */}
                <div className="flex w-[90%] space-y-4 flex-col gap-10">
                    <div>
                        <p className="text-[#55433C]">
                            <span className="font-extrabold">Looking for a Frontend developer?</span> Whether you need a responsive website, a React application, or an API integration, I'd be happy tp discuss your project
                        </p>
                    </div>

                    {/* gmail contact */}
                    <div className="flex flex-row items-center">
                        <div className="h-10 w-10 bg-[#CDC3BF] rounded-xl flex items-center justify-center">< IoIosMail className="text-[#55433C] h-6 w-6" /></div>
                        <div>
                            <p><GmailContact /></p>
                        </div>
                    </div>

                    {/* location */}
                    <div className="flex flex-row items-center">
                        <div className="h-10 w-10 bg-[#CDC3BF] rounded-xl flex items-center justify-center">< FaLocationDot className=" text-[#55433C] h-6 w-6" /></div>
                        <div className="text-[#635F40] p-3">
                            <p>Abia state, Umuahia</p>
                        </div>
                    </div>


                    {/* whatsapp contact */}
                    <div className="flex flex-row items-center">
                        <div className="h-10 w-10 bg-[#CDC3BF] rounded-xl flex items-center justify-center">< FaWhatsapp className="text-[#55433C] h-6 w-6" /></div>
                        <div>
                            <p><WhatsappContact /></p>
                        </div>
                    </div>
                </div>
            </div>


            {/*  */}



        </section>
    )
}