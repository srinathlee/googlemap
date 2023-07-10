import React, { useState } from 'react'
import axios from 'axios'
import { withScriptjs, withGoogleMap, GoogleMap,Marker,InfoWindow } from "react-google-maps"



const locationData=[{id:1,country:"bahadurpally_xroad", Latitude :17.56028, Longitude:78.43092,img:"https://media.istockphoto.com/id/174662203/photo/pot-hole.jpg?s=612x612&w=is&k=20&c=pWERP1QChzKsocJz0M0AdPcg0I8UoOIxw2OpkVjUdBA="},
{id:2,country:"bahadurpally", Latitude :17.560372, Longitude:78.432370,img:"https://media.istockphoto.com/id/174662203/photo/pot-hole.jpg?s=612x612&w=is&k=20&c=pWERP1QChzKsocJz0M0AdPcg0I8UoOIxw2OpkVjUdBA="},
{id:3,country:"dhulapally",Latitude :17.560500, Longitude:78.433587,img:"https://media.istockphoto.com/id/533964313/photo/road-damage-pot-hole.jpg?s=612x612&w=is&k=20&c=iuQE7VIVQQE1JP5JoKIzrTmpYIox1P3WbmpGUr7VWMc="},
{id:4,country:"maisammaguda", Latitude :17.55986, Longitude:78.45107,img:"https://media.istockphoto.com/id/929942316/photo/old-highway-with-holes-and-snow-landscape-road-potholes-in-cloudy-winter-weather-concept.jpg?s=612x612&w=is&k=20&c=YWZzx3LYYLAMDe6xx5VfKFAK7hekuCbTeTuEKrRtJAw="},
{id:5,country:"kompally", Latitude :17.560252, Longitude:78.432178,img:"https://media.istockphoto.com/id/502561495/photo/pot-holed-road.jpg?s=612x612&w=is&k=20&c=4m0f8BuB31OFV9xKes6G1g7edlD7anAnVWWcDp5skcE="},
{id:6,country:"gundlapochampally", Latitude :17.560152, Longitude:78.432178,img:"https://media.istockphoto.com/id/174662203/photo/pot-hole.jpg?s=612x612&w=is&k=20&c=pWERP1QChzKsocJz0M0AdPcg0I8UoOIxw2OpkVjUdBA="},
{id:7,country:"bahadurpally road",Latitude :17.55984, Longitude:78.43783,img:"https://media.istockphoto.com/id/174662203/photo/pot-hole.jpg?s=612x612&w=is&k=20&c=pWERP1QChzKsocJz0M0AdPcg0I8UoOIxw2OpkVjUdBA="},
{id:8,country:"gandimaisamma", Latitude :17.57399, Longitude:78.42410,img:"https://media.istockphoto.com/id/174662203/photo/pot-hole.jpg?s=612x612&w=is&k=20&c=pWERP1QChzKsocJz0M0AdPcg0I8UoOIxw2OpkVjUdBA="},
{id:10,country:"gundlapochampally-2", Latitude :17.560252, Longitude:78.432178,img:"https://media.istockphoto.com/id/174662203/photo/pot-hole.jpg?s=612x612&w=is&k=20&c=pWERP1QChzKsocJz0M0AdPcg0I8UoOIxw2OpkVjUdBA="}]

const url="https://gmapserver.onrender.com/"



function Map(){ 
  const[select,setSelect]=useState(null)
  const [locationData,setData]=useState([])
  const getData=async()=>{
    try{
    const data=await axios.get(url)
    console.log(data.data.data)
    setData(data.data.data)
    }
    catch(e){
      console.log(e)
    }
  
  }

  getData()
  
   return (<GoogleMap
   
             defaultZoom={13}
             defaultCenter={{ lat: 17.560400, lng:78.432478 }}
            >
          
          {locationData.map((each)=><Marker
           icon={{url:"https://cdn.pixabay.com/photo/2012/04/28/20/06/drive-44344_1280.png",scaledSize:new window.google.maps.Size(25,25)}} key={each.id} position={{lat:each.latitude,lng:each.langitude
          }}
           onClick={()=>{setSelect(each)}} />)}
          
          {select&&
          <InfoWindow  position={{lat:select.latitude,lng:select.langitude}} onCloseClick={()=>{setSelect(null)}} >
          <div>
          <h1 className='heading'>{select.country}</h1>
          <img className="pothole_img" alt="pothole" src={select.uploadig}/> 
          </div>
          </InfoWindow>
          }
          </GoogleMap>
          
          );
           }

const MyMapComponent = withScriptjs(withGoogleMap(Map))

export default MyMapComponent