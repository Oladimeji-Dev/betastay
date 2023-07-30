import './App.css'
import Navbar from './component/Navbar'
import FilterProperty from './component/FilterProperty'
import HouseCard from './component/HouseCard'
import houses from './data/houses.json'
import imageVideo from './assets/imagevideo.png'
import TestimonyCard from './component/TestimonyCard'
import { ReactComponent as LeftArrow } from './assets/left-arrow.svg'
import { ReactComponent as RightArrow } from "./assets/right-arrow.svg"
function App() {
  return (
    <div className='app'>
      <Navbar />
      <section className='explore'>
        <article className="exploreContent">
          <h1>Experience Luxury, Discover Adventure</h1>
          <p>With luxurious accommodations, top-notch amenities, and a prime location, we strive to exceed your expectations and create a memorable stay tailored to your needs.</p>
          <button className='btn btnExplore'>Explore Now</button>
        </article>
        <FilterProperty />
      </section>
      <section className=' container house'>
        <nav className='houseNav'>
          <h1>HOUSE TYPES</h1>
          <input type="text" placeholder='Search here ....'/>
        </nav>
        <div className="houseCards">
          {
            houses.map((item,index)=>(
              <HouseCard 
                title= {item.title} 
                img = {item.image} 
                alt={item.alt} 
                price = {item.price}
              />
            ))

          }
        </div>
        <span className='moreHouse'>
          <a href="#">More {">"}</a>
        </span>
      </section>
      <section className="container videoImage">
          <img src={imageVideo} alt="" />
      </section>
      <section className='container testimonials'>
          <h1 className='testHeader'>TESTIMONIALS</h1>
          <TestimonyCard />

          <nav className='testNav'>
            <LeftArrow />
            <RightArrow />
          </nav>
      </section>
      <footer className='appFooter'>
      {/* <div className="navBarBrand">
          <h1>BETASTAY</h1>
      </div> */}
      </footer>
    </div>
  )
}

export default App