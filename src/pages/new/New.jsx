import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { useState } from "react";

const New = ({ inputs, title }) => {

  const [ file, setFile ] = useState("")
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
            src={file ? URL.createObjectURL(file) :
               "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id936182806?k=20&m=936182806&s=612x612&w=0&h=pTQbzaZhCTxWEDhnJlCS2gj65S926ABahbFCy5Np0jg="}
            alt="" />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file"> Image  <AddPhotoAlternateOutlinedIcon className="icon" /></label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{ display: "none" }}/>
              </div>

              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                )
              })}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New