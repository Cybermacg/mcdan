export const GmailContact = () => {

    const email = "cybermac1234@gmail.com"
    const subject = encodeURIComponent("Collaboration Inquiry");
    const body = encodeURIComponent("Hi Mcdan, ive gone through your Portfolio and i would like to work with you");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    return(
        <p><a href={gmailUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#635F40] p-3">Cybermac1234@gmail.com</a></p>
    )
}