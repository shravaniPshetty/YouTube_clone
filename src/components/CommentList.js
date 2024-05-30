import { useState } from "react";

const Singlecomment = ({commentInfo})=>{
    return(
        <div className=" flex ">
            <img
            className=" w-6 m-2"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div className=" p-2">
                <p >@{commentInfo.name}</p>
                <p >{commentInfo.text}</p>
            </div>
        </div>
    )
};

const RecursiveComment = ({comment})=>{
    const [showReplies,setShowReplies]=useState(false);
    return(
       <div>
        {
            comment.map((commentIn,index)=>
            <div key={index}>
                <Singlecomment  commentInfo={commentIn}/>
                {commentIn.replies.length!=0 && <button onClick={()=>setShowReplies(!showReplies)} className="  rounded-lg text-blue-600  hover:bg-gray-300">{showReplies ?  '▲' : '▼'  + commentIn.replies.length} replies</button> }
                
                {showReplies && <div key={index} className=" pl-5 border border-l-black ml-5">
                    <RecursiveComment  comment={commentIn.replies}></RecursiveComment>
                </div>}
            </div>
            )
        }
       </div>
    );
}

const CommentList = ({comments})=>{
    return (
        <RecursiveComment comment={comments}/>
    )
};

export default CommentList;