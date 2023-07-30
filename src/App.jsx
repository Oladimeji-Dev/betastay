import './App.css'
import Navbar from './component/Navbar'
import FilterProperty from './component/FilterProperty'
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
    </div>
  )
}

export default App
