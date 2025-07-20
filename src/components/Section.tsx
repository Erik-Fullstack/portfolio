import HeroText from './HeroText'
import ProfileCard from './ProfileCard'
import ProfilePic from "../assets/ProfilePic.png"


export default function Section() {
    return (
        <section className="flex justify-between pt-14 px-14 relative z-10">
            <HeroText />
            <div className="px-16 pb-14">
                <ProfileCard
                    avatarUrl={ProfilePic}
                    onContactClick={() => { window.open("https://www.linkedin.com/in/erik-fullstack/", "_blank") }}
                />
            </div>
        </section>
    )
}