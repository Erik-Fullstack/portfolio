import FlowingMenu from '../components/FlowingMenu'
import Particles from '../components/Particles'

const demoItems = [
    { link: '#', text: 'Players academy', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'den här sidan', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'TodoList?', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];
export default function SecondTest() {

    return (
        <div className="min-h-screen relative z-10 bg-black">
            <Particles />
            <div className='min-h-screen flex items-center'>
                <FlowingMenu items={demoItems} />
            </div>
        </div>
    )
}