import FirstScreen from '../FirstScreen'
import Slider from '../Slider'
import Info from '../Info'
import Blog from '../Blog'
import Community from '../Community'
import './main.scss'
import arrivals from './arrivals.json'

export default function Main() {
    return (
        <main>
            <FirstScreen/>
            <Slider title="New Arrivals" content={arrivals}/>
            {/* <Slider title="Best Sellers" content={slider.bestSellers.content}/> */}
            <Info/>
            <Blog/>
            <Community/>
        </main>
    )
}