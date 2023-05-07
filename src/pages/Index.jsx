import React, { useCallback, useEffect } from 'react'
import PostList from '../components/PostList'
import { useDispatch ,useSelector  } from 'react-redux';
import { fetchPosts, deletePosts } from '../state/postSlice';
import Loading from '../components/Loading';

function Index() {
  const dispatch = useDispatch()
  const {posts, error, loading} = useSelector((state)=> state.posts)
  useEffect(()=>{
    dispatch(fetchPosts())
  }, [])

  // const deletePosts = useCallback()
   // Define a callback function using useCallback
   const deletePost = useCallback((id) => {
    dispatch(deletePosts(id));
  }, [dispatch]);
  console.log(posts);
  return (
    <Loading error={error} loading={loading}>
    <PostList data={posts}   deletePosts={deletePost}/>
    </Loading>
    
  )
}

export default Index