

export const WhatsappContact = () => {

    const phoneNumber = '2349063712315';
    const message = encodeURIComponent('Hi, i saw your portfolio and would love to chat.')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    return(
        <p><a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#635F40] p-3">WhatsApp</a></p>
    )
}