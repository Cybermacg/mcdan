export const GithubRepo = () => {

    const userName = "Cybermacg";
    const githubUrl = `https://github.com/${userName}`;
    return(
        <p><a 
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#635F40] p-3">GitHub</a></p>
    )
}