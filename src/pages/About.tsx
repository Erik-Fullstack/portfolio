import ProfileCard from '../components/ProfileCard'
import ProfilePic from "../assets/ProfilePic.png"
import reactIcon from "../assets/react.svg"

export default function TestPage() {

    return (
        <div className="min-h-screen relative z-10 bg-gray-900 border-t-1 border-b-1 border-[#293c64] flex justify-center items-center" id='About'>
            <main className="w-full max-w-screen-2xl px-20">
                <section className="flex flex-col-reverse p-10 w-full justify-between items-center gap-5 relative md:flex-row md:gap-20">
                    <div className='md:max-w-140 mx-auto'>
                        <h3 className='text-center text-3xl md:text-left lg:text-5xl '>Erik Andersson</h3>
                        <p className='text-lg md:pt-4 md:text-1xl lg:text-3xl'>I am a student based in Stockholm, currently enrolled in the Fullstack Javascript program at Chas Academy. </p>
                        <p className='text-lg md:pt-2 md:text-1xl lg:text-3xl'>I am currently looking for an internship for the period December 2025 until May 2026.</p>
                        <p className='text-lg md:pt-2 md:text-1xl lg:text-3xl'>Please feel free to reach out if this sounds interesting.</p>
                        <div className='flex gap-4 justify-evenly pt-2 lg:pt-15'>
                            <a href='https://www.linkedin.com/in/erik-fullstack/' target='_blank'><img width={"50px"} src={reactIcon} alt="" /></a>
                            <a href='https://www.linkedin.com/in/erik-fullstack/' target='_blank'><img width={"50px"} src={reactIcon} alt="" /></a>
                            <a href='https://www.linkedin.com/in/erik-fullstack/' target='_blank'><img width={"50px"} src={reactIcon} alt="" /></a>
                        </div>
                    </div>
                    <div className=''>
                        <ProfileCard
                            avatarUrl={ProfilePic}
                            onContactClick={() => { window.open("https://www.linkedin.com/in/erik-fullstack/", "_blank") }}
                        />
                    </div>
                </section>
            </main>
        </div>
    )
}