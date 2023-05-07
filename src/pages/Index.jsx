import React, { useEffect } from 'react'
import PostList from '../components/PostList'
import { useDispatch ,useSelector  } from 'react-redux';
import { fetchPosts } from '../state/postSlice';
import Loading from '../components/Loading';

function Index() {
  const dispatch = useDispatch()
  const {posts, error, loading} = useSelector((state)=> state.posts)
  useEffect(()=>{
    dispatch(fetchPosts())
  }, [])
  console.log(posts);
  return (
    <Loading error={error} loading={loading}>
    <PostList data={posts}  />
    </Loading>
    
  )
}

export default Index