import DecryptedText from "./DecryptedText"

export default function HeroText() {
    return (
        <div className="flex flex-col px-16">
            <div>
                <DecryptedText
                    encryptedClassName="text-5xl font-semibold"
                    className="lato-regular text-5xl font-semibold"
                    text="Hello, I'm Erik Andersson."
                    animateOn="view"
                    sequential={true}
                    revealDirection="start"
                    speed={60}
                    useOriginalCharsOnly={false} />
            </div>
            <div className="pt-4">
                <DecryptedText
                    encryptedClassName="lato-regular text-2xl font-semibold"
                    className="lato-regular text-2xl font-semibold"
                    text="I'm an aspiring Fullstack JavaScript Developer"
                    animateOn="view"
                    sequential={true}
                    revealDirection="start"
                    speed={60}
                    useOriginalCharsOnly={false} />
            </div>
            <div>
                <DecryptedText
                    encryptedClassName="lato-regular text-2xl font-semibold"
                    className="lato-regular text-2xl font-semibold"
                    text="based in Stockholm and is currently looking for"
                    animateOn="view"
                    sequential={true}
                    revealDirection="start"
                    speed={60}
                    useOriginalCharsOnly={false} />
            </div>
            <div>
                <DecryptedText
                    encryptedClassName="lato-regular text-2xl font-semibold"
                    className="lato-regular text-2xl font-semibold"
                    text="an internship while studying at Chas Academy!"
                    animateOn="view"
                    sequential={true}
                    revealDirection="start"
                    speed={60}
                    useOriginalCharsOnly={false} />
            </div>
        </div>
    )
}