import "./singlepost.css"


export default function SinglePost() {
  return (
    
    <>


<div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://free4kwallpapers.com/uploads/wallpaper/-neon-car-man-wallpaper-1024x768-wallpaper.jpg" alt="" 
        className="SinglePostImg">
        </img>
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i class="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Rahul</b>
          </span>
          <span className="singlePostDate">30 min ago </span>
        </div>
        <p className="singlePostDes">
          Lorem ipsum dolor sit amet consectetur
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere qui, ipsam enim blanditiis quia! Dolores eos quia placeat animi quod cupiditate itaque quibusdam corporis earum, commodi nobis adipisci repudiandae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, temporibus earum id velit aperiam nam qui in accusantium sint ullam incidunt deleniti iure ipsum aspernatur maiores, rem ducimus. Laborum, perspiciatis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum amet porro illo corrupti voluptate adipisci nam distinctio id laborum repellat, rerum sunt quasi neque totam facilis? Reprehenderit molestias delectus dolores?
        </p>
      </div>
    </div>
    </>
    
  )
}
