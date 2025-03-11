import FirstScreen from '../firstScreen/FirstScreen'
import Slider from '../slider/Slider'
import Info from '../info/Info'
import Blog from '../Blog'
import Community from '../community/Community'
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