import { Sidebar } from "../../components/sidebar/Sidebar"
import "./single.css"
import SinglePost from "../../components/singlePost/SinglePost"

export const Single = () => {
  return (
    <div className="single">
        <SinglePost/>
   
        <Sidebar/>
    </div>
  )
}
