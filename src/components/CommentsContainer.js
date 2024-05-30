import CommentList from "./CommentList";
import {dummyComments} from "../utils.js/dummyComments"
const CommentsContainer = ()=>{
    return (
        <div className=" m-2 p-2">
            <h1 className=" font-bold text-xl">Comments</h1>
            <CommentList comments={dummyComments}/>
        </div>
    )
};

export default CommentsContainer;