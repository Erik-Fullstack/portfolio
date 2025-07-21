import './App.css'
import DecryptedText from './components/DecryptedText'

export default function TestPage() {

    return (
        <div className="bg-red-900 w-screen h-screen">
            <DecryptedText 
            text=
            {`ERIK ANDERSSON FULLSTACK
    
    
    
                JAVASCRIPT DEVELOPER`}
                    encryptedClassName="text-5xl font-semibold"
                    className="lato-regular text-5xl font-semibold"
                    animateOn="view"
                    sequential={true}
                    revealDirection="start"
                    speed={60}
                    useOriginalCharsOnly={false} />
        </div>
    )
}