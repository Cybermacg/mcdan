export const TwitterContact = () => {

    const userName = "M_cdanJs";
    const TwitterUrl = `https://x.com/${userName}`;
    return(
        <p><a 
        href={TwitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#635F40] p-3">Twitter</a></p>
    )
}