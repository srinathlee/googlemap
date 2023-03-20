import About from '../about'
import MyMapComponent from '../myMap/map'

const Home =()=>(
    <div>
       <About/>
       <h1>home</h1>

       <MyMapComponent
    
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDB57M6SZiPBM5Rp_aqI1hXdTFjuyOQtyc"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `50%`,width:'50%'}} />}
      mapElement={<div style={{ height: `100%` }} />}
    />    

    </div>
)
export default Home