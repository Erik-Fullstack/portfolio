import Hyperspeed from '../components/Hyperspeed'
import Particles from '../components/Particles'
import DecryptedText from '../components/DecryptedText'

export default function Hero() {
    return (
        <div className='w-screen h-screen'>
            <Particles />
            <Hyperspeed />
            <div className="container flex relative z-10 justify-center mx-auto pt-60">
                <DecryptedText
                    encryptedClassName="text-7xl font-semibold"
                    className="lato-regular text-7xl font-semibold"
                    text="<ERIK ANDERSSON/>"
                    animateOn="view"
                    sequential={true}
                    revealDirection="start"
                    speed={60}
                    useOriginalCharsOnly={false} />
            </div>
        </div>
    )
}