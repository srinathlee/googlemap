import About from '../about'
import MyMapComponent from '../myMap/map'
import './index.css'


const Home =()=>
{
    console.log(MyMapComponent)
return(
    <div className='container'>
       <About/>
       <h1>home</h1>

       <MyMapComponent
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `50%`,width:'50%'}} />}
      mapElement={<div style={{ height: `100%` }} />}
       />    

    </div>
)
    }
export default Home