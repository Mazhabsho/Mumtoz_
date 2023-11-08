import React from 'react'

const Post = ({posts, loading}) => {
    if(loading){return <h2>Laoding ...</h2>}
  return (
    <ul>
        {posts.map((elem,id)=>{
            return(
                <>
                 <li key={id}>{elem.title}</li>
                </>
            )
        })}
    </ul>
  )
}

export default Post