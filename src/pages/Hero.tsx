import Hyperspeed from '../components/Hyperspeed'
import Particles from '../components/Particles'
import DecryptedText from '../components/DecryptedText'

export default function Hero() {
    return (
        <div className='min-h-screen z-3 sticky top-0'>
            <Particles />
            <Hyperspeed />
            <div className="flex flex-col relative z-5 items-center mx-auto pt-60">
                <DecryptedText
                    encryptedClassName="text-7xl font-semibold"
                    className="text-7xl font-semibold"
                    text="<ERIK ANDERSSON/>"
                    animateOn="view"
                    sequential={true}
                    revealDirection="start"
                    speed={60}
                    useOriginalCharsOnly={false}
                />
                <DecryptedText
                    encryptedClassName="text-[3.4rem] font-semibold"
                    className="text-[3.4rem] font-semibold"
                    text="<Fullstack JS/>"
                    animateOn="view"
                    sequential={true}
                    revealDirection="start"
                    speed={60}
                    useOriginalCharsOnly={false}
                />
            </div>
        </div>
    )
}