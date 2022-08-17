import { Sidebar } from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img 
            src="https://backiee.com/static/wpdb/wallpapers/v2/1000x563/335941.jpg" 
            alt="" 
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type= "file" id = "fileInput" style={{display:"none"}}/>
          </div>
          <label>UserName</label>
          <input type="text" placeholder="Rahul" />
          
          <label>Email</label>
          <input type="email" placeholder="rahul@gmail.com " />
          
          <label>Password</label>
          <input type="password"/>

          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
