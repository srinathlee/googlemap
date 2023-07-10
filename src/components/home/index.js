import Header from '../header'
import MyMapComponent from '../myMap/map'
import './index.css'



const Home =()=>{


return(
    <div className='container'>

       <Header/>
       <MyMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%`,width:'100%'}} />}
        mapElement={<div style={{ height: `100%` }} />}
        />  
      

    </div>
)
    }
export default Home