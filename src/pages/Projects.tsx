import FlowingMenu from '../components/FlowingMenu'
import Particles from '../components/Particles'
import tpa from "../assets/TPA.webp"
import jobchaser from "../assets/JobChaser.png"
import portfolio from "../assets/PortfolioBild.png"
import quizApp from "../assets/QuizApp.png"
import DecryptedText from '../components/DecryptedText'
import reactionGame from "../assets/ReactionGame.png"

const items = [
    { link: 'https://github.com/Erik-Fullstack/theplayersacademy', text: 'The Players Academy', image: tpa },
    { link: 'https://github.com/Erik-Fullstack/portfolio', text: 'This Portfolio', image: portfolio },
    { link: 'https://github.com/Erik-Fullstack/u07-nextjs-jobchaser', text: 'Jobchaser', image: jobchaser },
    { link: 'https://reaction-test-game-omega.vercel.app/', text: 'Reaction Game', image: reactionGame },
    { link: 'https://github.com/FilipHans/u03-team-AW', text: 'quizzy', image: quizApp }
];
export default function SecondTest() {

    return (
        <div className="min-h-screen relative z-10 bg-black flex flex-col gap-10 justify-center items-center" id='Projects'>
            <Particles className='absolute' />
            <div className="flex flex-col relative z-5 items-center mx-auto">
                <DecryptedText
                    encryptedClassName="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold"
                    className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold"
                    text="PROJECTS"
                    animateOn="view"
                    sequential={true}
                    revealDirection="start"
                    speed={60}
                    useOriginalCharsOnly={false}
                />
            </div>
            <div className='flex justify-center items-center border-1 border-[#293c64] rounded-2xl w-4/5 pt-12 pb-12 bg-[#101828]'>
                <div className='w-full h-[320px]'>
                    <FlowingMenu items={items} />
                </div>
            </div>
        </div>
    )
}