import React, { useEffect } from "react";
import {
  Button,
  ButtonGroup,
} from "react-bootstrap";
function PostListItem({data}) {
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (data.length === 0) {
  //   return <div>No posts found.</div>;
  // }
  // console.log(error);
  // console.log(loading);
  const posts = data.map((post) => (
    <tr key={post.id}>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.description}</td>

      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success">Edit</Button>
          <Button variant="danger">Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  ));
  return (
  
    <>
     {posts}
      </>
    
  )
}

export default PostListItem