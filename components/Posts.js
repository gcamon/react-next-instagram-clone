import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import Post from './Post';

const Posts = () => {
    const [posts,setPosts] = useState([]);

    useEffect(
        // calls the implicitly returned subscribed function for clean up
        () => 
            onSnapshot(query(collection(db, 'posts'),orderBy('timestamp','desc'))
            ,snapshot => {
                setPosts(snapshot.docs)
            }),
        [db]
    );
    
    return (
        <div>
            {
                posts && posts.map(post => (
                    <Post 
                        key={post.id} 
                        id={post.id}
                        username={post.data().username} 
                        userImage={post.data().profileImg}
                        img={post.data().image}
                        caption={post.data().caption}
                    />
                ))
            }
        </div>
    );
};

export default Posts;
