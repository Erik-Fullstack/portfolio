export default function Header() {

    const scrollTo = (id: string) => {
        const section = document.querySelector(`#${id}`);
        if (section === null) return;
        section.scrollIntoView({behavior: "smooth"});
    }
    return (
        <header className='absolute h-16 w-full flex justify-center items-center gap-20 z-10'>
            <button onClick={() => scrollTo("About")} className="text-2xl">About</button>
            <button onClick={() => scrollTo("Projects")} className="text-2xl">Projects</button>
        </header>
    )
}