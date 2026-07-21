import { GithubRepo } from "./links/GithubRepo"
import { LinkedInContact } from "./links/LinkedIn"
import { TwitterContact } from "./links/Twitter"

export const Footer = () => {
    return (
        <footer className="w-full mt-10 flex border-t border-gray-200 items-center justify-center bg-[#FFF8F6] ">

            <div className="flex w-[80%] m-5 flex-col lg:flex-row lg:justify-between gap-5 items-center max-w-384">
                <div>
                    <h1 className="text-[#635F40] font-extrabold">2026 Mcdan. Built with intention</h1>
                </div>

                <div className="flex flex-row">
                    <div><GithubRepo /></div>
                    <div><LinkedInContact /></div>
                    <div><TwitterContact /></div>
                </div>
            </div>
        </footer>
    )
}