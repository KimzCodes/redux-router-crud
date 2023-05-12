import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePosts } from "../state/postSlice";
function PostListItem({ data, deletePost }) {
  const dispatch = useDispatch();
  // const handelSubmit = (id) => {
  //   if (window.confirm("Do you really want to leave?")) {
  //     deletePost(id);
  //   }
  // };
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (data.length === 0) {
  //   return <div>No posts found.</div>;
  // }
  console.log(data);
  // console.log(loading);
  const posts = data.map((post, index) => (
    <tr key={post.id}>
      <td>{++index}</td>
      <td>{post.title}</td>
      <td>{post.description}</td>

      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success">Edit</Button>
          <Button variant="danger" onClick={() => dispatch(deletePosts(post))}>
            Delete
          </Button>{" "}
          {/*There is two ways to call deletePosts() you can call it in this file and use as I usedt it in this line or you can call it in the parent component and send it to the child as a props you can check the Index.js file to see anthor utilization by calling UseCallback Hooks */}
          {/* <Button variant="danger" onClick={()=>handelSubmit(post)}>Delete</Button>  There is two ways  you can call it in the parent component and send it to the child as a props you can check the Index.js file to see anthor utilization by calling UseCallback Hooks */}
        </ButtonGroup>
      </td>
    </tr>
  ));
  return (<>{posts}</>);
}

export default PostListItem;
