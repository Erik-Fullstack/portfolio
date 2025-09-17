import ProfileCard from '../components/ProfileCard'
import ProfilePic from "../assets/ProfilePic.png"
import linkedin from "../assets/linkedinIcon.svg"
import github from "../assets/githubIcon.svg"
import page from "../assets/pageIcon.svg"

export default function TestPage() {

    return (
        <div className="pt-4 pb-4 sm:pt-0 sm:pb-0 min-h-screen relative z-10 bg-gray-900 border-t-1 border-b-1 border-[#293c64] flex justify-center items-center" id='About'>
            <main className="w-full max-w-screen-2xl px-20">
                <section className="flex flex-col-reverse md:p-10 w-full justify-between items-center gap-5 relative md:flex-row md:gap-20">
                    <div className='md:max-w-140'>
                        <h3 className='text-center text-2xl md:text-left lg:text-5xl '>Erik Andersson</h3>
                        <p className='text-lg pt-4 md:pt-4 md:text-1xl lg:text-3xl'>I am a student based in Stockholm, currently enrolled in the Fullstack Javascript program at Chas Academy. </p>
                        <p className='text-lg pt-3 md:pt-2 md:text-1xl lg:text-3xl'>I am currently looking for an internship for the period December 2025 until May 2026.</p>
                        <p className='text-lg pt-3 md:pt-2 md:text-1xl lg:text-3xl'>Please feel free to reach out if this sounds interesting.</p>
                        <p className='text-lg pt-3 md:pt-2 md:text-1xl lg:text-3xl'>Erik.Andersson.Dev@Gmail.com</p>
                        <div className='flex gap-4 justify-evenly pt-2 lg:pt-15'>
                            <a href='https://www.linkedin.com/in/erik-fullstack/' target='_blank'><img src={linkedin} alt="Linkedin" /></a>
                            <a href='https://github.com/Erik-Fullstack' target='_blank'><img src={github} alt="Github" /></a>
                            <a href='https://drive.google.com/file/d/1gUxXTq5tFqFqpJCJsV8JbRy7ZTHZyReJ/view' target='_blank'><img src={page} alt="Resume" /></a>
                        </div>
                    </div>
                    <div className=''>
                        <ProfileCard
                            avatarUrl={ProfilePic}
                            onContactClick={() => { window.open("https://www.linkedin.com/in/erik-fullstack/", "_blank") }}
                            status='Send me a DM!'
                        />
                    </div>
                </section>
            </main>
        </div>
    )
}