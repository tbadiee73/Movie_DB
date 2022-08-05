import { Background } from "./style"
import image from "../assets/img.jpg"
import Navbar from "../Nav"
import Footer from "../Footer"


export default function MovieDetail (){

return (
    <>
    <Navbar/>
    <Background>
    <div class="container flex">
        <img class="poster_ui" src={image}/>
        <div class="movie_info">
            <h2><a href="">SPY x FAMILY</a> <span>(2022)</span></h2>
            <div class=""></div>
            <div>
                <h3>overview</h3>
                <p>Master spy Twilight is the best at what he does when it comes to going undercover on dangerous missions in the name of a better world. But when he receives the the child he's adopted is a telepath!</p>

                <div><h5>Tatsuya Endo</h5><span>Creator</span></div>

            </div>
        </div>

    </div>
</Background>
<Footer/>
    
    
    </>
)

}