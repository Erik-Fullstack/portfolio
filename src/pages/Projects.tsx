import FlowingMenu from '../components/FlowingMenu'
import Particles from '../components/Particles'
import tpa from "../assets/TPA.webp"
import jobchaser from "../assets/JobChaser.png"
import portfolio from "../assets/PortfolioBild.png"
import quizApp from "../assets/QuizApp.png"

const items = [
    { link: 'https://github.com/Erik-Fullstack/theplayersacademy', text: 'The Players Academy', image: tpa },
    { link: 'https://github.com/Erik-Fullstack/portfolio', text: 'denna Portfolio', image: portfolio },
    { link: 'https://github.com/FilipHans/u03-team-AW', text: 'quizzy', image: quizApp },
    { link: 'https://github.com/Erik-Fullstack/u07-nextjs-jobchaser', text: 'Jobchaser', image: jobchaser }
];
export default function SecondTest() {

    return (
        <div className="min-h-screen relative z-10 bg-black flex justify-center items-center" id='Projects'>
            <Particles className='absolute' />
            <div className='flex justify-center items-center border-1 border-[#293c64] rounded-2xl w-4/5 pt-12 pb-12 bg-[#101828]'>
                <div className='w-full h-[320px]'>
                    <FlowingMenu items={items} />
                </div>
            </div>
        </div>
    )
}