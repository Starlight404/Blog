import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import { Single } from "./pages/single/Single";
import Write from "./pages/write/Write";

import Settings from "./pages/settings/Settings"
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import Post from "./components/post/Post";



import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const user = false;
  return (
    <Router>
      <TopBar/>
    <Routes>Post
    <Route path="/" element={<Home />}/>
    <Route path="/register" element={user ? <Home/> : <Register />}/>
    <Route path="/login" element={user ? <Home/> : <Login />}/>
    <Route path="/write" element={user ? <Write/>:<Write />}/>
    <Route path="/settings" element={user ? <Settings /> : <Write/>  }/>
    <Route path="/post/:postId" element={<Single />} />
    <Route path="/post" element={<Post />} />
    <Route path="/singlepost" element={  <Single />} />
    </Routes>
    </Router>
  );
}

export default App;
