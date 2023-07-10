import {useState} from "react"
import {useFormik} from 'formik'
import avatar from '../assets/avatar.png'
import axios from 'axios'
import './index.css'

const convertBase64=(file)=>{
  return new Promise((resolve,reject)=>{
   const filereader=new FileReader()
   filereader.readAsDataURL(file)
   filereader.onload=()=>{
       resolve(filereader.result)
   }
   filereader.onerror=(e)=>{
       reject(e)
   }
  })
}

  const url="https://gmapserver.onrender.com/post"

const Form =()=>{

  navigator.geolocation.getCurrentPosition((cods)=>{console.log(cods)})


    const [file,setfile]=useState("")
   
    const onupload=async(event)=>{
      const f=await convertBase64(event.target.files[0])
      setfile(f)
    }
  
    const formik=useFormik({
      initialValues:{
        // uploading:"",
        latitude:"",
        langitude:"",
        message:""
      },
      enableReinitialize:true,
      validateOnBlur:false,
      validateOnChange:false,
      // validationSchema:uploadSchema,
      onSubmit:async (values,actions)=>{
        values=await Object.assign(values,{uploadig:file})
        console.log("this is form value",values.uploadig)
        const result=await axios.post(url,values)
        alert("submitted successfully")
        actions.resetForm()
        setfile("")
      }
      
    })
    console.log(formik.values)
   
  
    return (
      <div className="App">
       
        <form onSubmit={formik.handleSubmit}>
          <div className="img-div">
            <label htmlFor='uploading'><img  className="img-container" src={file||avatar} alt="upplog img"/> </label>
            <input onChange={onupload} type="file" id="uploading"/>
          </div>
  
          <div className="widget">
            {/* <label className="latitude" htmlFor="latitude">Latitude</label> */}
            <input {...formik.getFieldProps("latitude")} placeholder='Latitude' type="text" className='profile-input'/>
          </div>
          
          <div className="widget">
            {/* <label htmlFor="langitude">Latitude</label> */}
            <input {...formik.getFieldProps("langitude")} placeholder='Longitude' type="text" className='profile-input'/>
          </div>

  
  
  
          <div className="widget">
            {/* <label  htmlFor="message">Message</label> */}
            <textarea  {...formik.getFieldProps("message")} placeholder="enter your message"></textarea>
          </div>
          <div>
  
            <button className='submit-upload' type="submit">Submit</button>
          </div>
        </form>
      
      </div>
    );
  }

  export default Form