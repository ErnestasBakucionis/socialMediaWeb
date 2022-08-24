import React, { useContext } from 'react'

import { AuthContext } from "../context/auth";
import PostForm from "../components/PostForm";

function CreatePost() {
    const { user } = useContext(AuthContext);

    return (
        user && (
            <PostForm />
        )
    )
}

export default CreatePost