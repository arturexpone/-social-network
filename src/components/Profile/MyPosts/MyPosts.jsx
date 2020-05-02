import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = ({addPost, posts}) => {
    let postsElements =
        posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (value) => {
        addPost(value.myPost);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <MyPostsReduxForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name='myPost' placeholder='Post added' validate={[required, maxLength10]}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({form: 'my post form'})(PostForm)

export default MyPosts;