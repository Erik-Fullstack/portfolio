import ProfileCard from './ProfileCard'
import ProfilePic from "../assets/ProfilePic.png"
import reactIcon from "../assets/react.svg"

export default function Section() {
    return (
        <section className="flex justify-between pt-14 px-14 relative">
            <div className='w-140'>
                <h3 className='text-5xl'>Erik Andersson</h3>
                <p className='text-3xl pt-4'>I am a student based in Stockholm, currently enrolled in the Fullstack Javascript program at Chas Academy. </p>
                <p className='text-3xl pt-2'>I am currently looking for an internship for the period December 2025 until May 2026.</p>
                <p className='text-3xl pt-2'>Please feel free to reach out if this sounds interesting.</p>
                <div className='flex gap-4 justify-evenly pt-30'>
                    <a href='https://www.linkedin.com/in/erik-fullstack/' target='_blank'><img width={"50px"} src={reactIcon} alt="" /></a>
                    <a href='https://www.linkedin.com/in/erik-fullstack/' target='_blank'><img width={"50px"} src={reactIcon} alt="" /></a>
                    <a href='https://www.linkedin.com/in/erik-fullstack/' target='_blank'><img width={"50px"} src={reactIcon} alt="" /></a>
                </div>
            </div>
            <div className="px-16 pb-14">
                <ProfileCard
                    avatarUrl={ProfilePic}
                    onContactClick={() => { window.open("https://www.linkedin.com/in/erik-fullstack/", "_blank") }}
                />
            </div>
        </section>
    )
}