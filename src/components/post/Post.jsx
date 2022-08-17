import "./post.css"


export default function  Post  ()  {
  return (
    <div className="post">
        <img 
        className="postImg"
        src= "https://backiee.com/static/wpdb/wallpapers/1000x563/189000.jpg"
        alt=""
        />
        <div className="postInfo">
            <div className="postCat">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet
            </span>
            <hr />
            <span className="postDate">1 hour ago</span> 
        </div>
        <p className="postDes">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsum impedit similique ut sequi assum
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, harum voluptate. Amet fugiat dolorum alias pariatur et! Libero nemo, commodi reprehenderit rerum veritatis unde, nesciunt ratione illo mollitia saepe maxime.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur voluptatem harum esse labore, nulla ullam tempora minima eos reprehenderit? Minima fuga cupiditate deserunt illo quae excepturi, id aliquam dicta at.</p>
    </div>
  )
}
