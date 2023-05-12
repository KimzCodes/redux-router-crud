import React, { memo, useEffect } from "react";
import {
  Table,

} from "react-bootstrap";
import PostListItem from "./PostListItem";

function PostList({ data, deletePosts}) {
  

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "70%" }}>Title</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
      <PostListItem data={data} deletePost={deletePosts} />
      </tbody>
    </Table>
  );
}

export default memo(PostList);
