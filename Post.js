import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, deletePost, updatePost,setSelectedTask} from '../redux/postsSlice';
import Table from 'react-bootstrap/Table';


export default function Post() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedDesc, setUpdatedDesc] = useState("");

    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(null);

    const posts = useSelector((state) => state.posts.items)
    // const {SelectedTask} = useSelector((state) => state.posts.items)
    // console.log(title,desc);



    const dispatch = useDispatch()

    // useEffect(() => {
    //     if(Object.keys(SelectedTask).length !== 0){
    //     setTitle(SelectedTask.title)
    //     setDesc(SelectedTask.desc)
    //     setId(SelectedTask.id)
    //     }
    // },[SelectedTask])


    return (
        <div className='asd'>

            <div className='form'>
                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <td> <input
                                    type="text"
                                    className="no-outline"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                /></td>

                                <td> <input
                                    type="text"
                                    value={desc}
                                    className="no-outline"
                                    onChange={(e) => setDesc(e.target.value)}
                                /></td>
                                <td>  <button onClick={() => {
                                    if (!title || !desc) {
                                        return
                                    }
                                    dispatch(addPost({ id: posts.length + 1, title: title, desc: desc }))
                                    setTitle("");
                                    setDesc("");
                                }}>
                                    Add post</button></td>
                            </tr>
                        </thead>
                    </Table>
                </Container>

            </div>
            <div className='posts'>

                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>

                            {posts.length > 0 ? posts.map(post =>
                                <tr key={post.id}>

                                    <td>{post.title}</td>
                                    <td>{post.desc}</td>
                                    <td> <button onClick={() => {
                                        setEdit(true)
                                        setId(post.id)
                                    }}>Edit</button></td>
                                    <td><button onClick={() => dispatch(deletePost({ id: post.id }))}>Delete</button></td>
                                    {edit && id == post.id && (

                                        <>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>

                                                        <td> <input
                                                        className="no-outline"
                                                            type="text"
                                                            onChange={(e) => setUpdatedTitle(e.target.value)}
                                                        /></td>
                                                        <td><input
                                                            type="text"
                                                            className="no-outline"
                                                            onChange={(e) => setUpdatedDesc(e.target.value)}
                                                        /></td>
                                                        <td> <button onClick={() => {
                                                            dispatch(updatePost({ id: post.id, title: updatedTitle, desc: updatedDesc }))
                                                            setEdit(false)
                                                        }}>Update</button></td>
                                                    </tr>
                                                </thead>
                                            </Table>
                                        </>
                                    )}
                                </tr>


                            ) : "there is no posts"}
                        </tbody>
                    </Table>

                </Container>



            </div>
        </div >
    )
}

