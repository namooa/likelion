import React, { useState } from 'react'
import fullheart from "../assets/img/fullheart.png"
import comment from "../assets/img/comment.png"
import emptyheart from "../assets/img/emptyheart.png"

const Article = ({ title, content }) => {
    const [liked, setLiked] = useState(false)
    return (
    <div>
        <div id="Article_Wrap">
            <div className="article">
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
            <div className="icon_group">
                <div className="comment">
                    <img src={comment} alt="" />
                    0
                </div>
                <div onClick={() => setLiked(!liked)}>
                    <img src={liked ? fullheart : emptyheart} alt="" />
                    {liked ? 1 : 0}
                </div>
            </div>
            <footer>
                <input type="text" placeholder="댓글을 입력해 주세요!" />
                <button>등록</button>
            </footer>
        </div>
    </div>
  )
}

export default Article
