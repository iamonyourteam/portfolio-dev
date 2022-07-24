import React from "react";
import { marked } from "marked";
import "./Blog.css"

const Post = ({article}) => { 
    
    const {title, date, photo, blogBody } = article.fields
    const postBlogBody = marked(blogBody)
    return(
        <div className="post" id={(title.split(" ")[0])+(title.split(" ")[1])}>
            <div className="postImg">
            {photo && <img className="photo" src={photo.fields.file.url} alt={title} title={title} />}
            </div>
            <div className="postText">
            <h2 className='title'>{title}</h2>
            <h3>{date.split("T")[0]}</h3>
            <div></div>
            <div dangerouslySetInnerHTML={{__html: postBlogBody}} />
            </div>
        </div>

    )

}
export default Post