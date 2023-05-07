import React, { useEffect } from "react";
import {
  Table,

} from "react-bootstrap";
import PostListItem from "./PostListItem";

function PostList({ data}) {
  

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "70%" }}>Title</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <PostListItem data={data} />
    </Table>
  );
}

export default PostList;
