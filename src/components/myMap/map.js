import React, { useState } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap,Marker,InfoWindow } from "react-google-maps"



const locationData=[{id:1,country:"bahadurpally-3", Latitude :17.560252, Longitude:78.432178,img:"https://media.istockphoto.com/id/174662203/photo/pot-hole.jpg?s=612x612&w=is&k=20&c=pWERP1QChzKsocJz0M0AdPcg0I8UoOIxw2OpkVjUdBA="},
{id:2,country:"bahadurpally-1", Latitude :17.560372, Longitude:78.432370,img:"https://media.istockphoto.com/id/174662203/photo/pot-hole.jpg?s=612x612&w=is&k=20&c=pWERP1QChzKsocJz0M0AdPcg0I8UoOIxw2OpkVjUdBA="},
{id:3,country:"bahadurpally-2",Latitude :17.560500, Longitude:78.433587,img:"https://media.istockphoto.com/id/533964313/photo/road-damage-pot-hole.jpg?s=612x612&w=is&k=20&c=iuQE7VIVQQE1JP5JoKIzrTmpYIox1P3WbmpGUr7VWMc="},
{id:4,country:"bahadurpally-4", Latitude :17.560400, Longitude:78.4327,img:"https://media.istockphoto.com/id/929942316/photo/old-highway-with-holes-and-snow-landscape-road-potholes-in-cloudy-winter-weather-concept.jpg?s=612x612&w=is&k=20&c=YWZzx3LYYLAMDe6xx5VfKFAK7hekuCbTeTuEKrRtJAw="},
{id:5,country:"Germany", Latitude :17.560252, Longitude:78.432178,img:"https://media.istockphoto.com/id/502561495/photo/pot-holed-road.jpg?s=612x612&w=is&k=20&c=4m0f8BuB31OFV9xKes6G1g7edlD7anAnVWWcDp5skcE="},
{id:6,country:"India", Latitude :17.560152, Longitude:78.432178,img:"https://media.istockphoto.com/id/174662203/photo/pot-hole.jpg?s=612x612&w=is&k=20&c=pWERP1QChzKsocJz0M0AdPcg0I8UoOIxw2OpkVjUdBA="},
{id:7,country:"Japan",Latitude :17.560252, Longitude:78.432128,img:"https://media.istockphoto.com/id/174662203/photo/pot-hole.jpg?s=612x612&w=is&k=20&c=pWERP1QChzKsocJz0M0AdPcg0I8UoOIxw2OpkVjUdBA="},
{id:8,country:"South Africa", Latitude :17.560152, Longitude:78.432178,img:"https://media.istockphoto.com/id/174662203/photo/pot-hole.jpg?s=612x612&w=is&k=20&c=pWERP1QChzKsocJz0M0AdPcg0I8UoOIxw2OpkVjUdBA="},
{id:9,country:"Canada", Latitude :17.560252, Longitude:78.432028,img:"https://media.istockphoto.com/id/174662203/photo/pot-hole.jpg?s=612x612&w=is&k=20&c=pWERP1QChzKsocJz0M0AdPcg0I8UoOIxw2OpkVjUdBA="},
{id:10,country:"France", Latitude :17.560252, Longitude:78.432178,img:"https://media.istockphoto.com/id/174662203/photo/pot-hole.jpg?s=612x612&w=is&k=20&c=pWERP1QChzKsocJz0M0AdPcg0I8UoOIxw2OpkVjUdBA="}]


function Map(){ 
  const[select,setSelect]=useState(null)
  
   return (<GoogleMap
   
             defaultZoom={21}
             defaultCenter={{ lat: 17.560400, lng:78.432478 }}
            >
          
          {locationData.map((each)=><Marker
           icon={{url:"https://cdn.pixabay.com/photo/2012/04/28/20/06/drive-44344_1280.png",scaledSize:new window.google.maps.Size(25,25)}} key={each.id} position={{lat:each.Latitude,lng:each.Longitude}}
           onClick={()=>{setSelect(each)}} />)}
          
          {select&&
          <InfoWindow  position={{lat:select.Latitude,lng:select.Longitude}} onCloseClick={()=>{setSelect(null)}} >
          <div>
          <h1 className='heading'>{select.country}</h1>
          <img className="pothole_img" alt="pothole" src={select.img}/> 
          </div>
          </InfoWindow>
          }
          </GoogleMap>
          
          );
           }

const MyMapComponent = withScriptjs(withGoogleMap(Map))

export default MyMapComponent