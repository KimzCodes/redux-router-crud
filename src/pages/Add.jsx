import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../state/postSlice";
import { v4 as uuidv4 } from 'uuid';

function Add() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      description: description,
      id: uuidv4()
    };
    
    dispatch(addPosts(data));

    // Clear the input fields after submission
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <Form onSubmit={formHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" onChange={(e) => setDescription(e.target.value)} value={description} rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* <div>
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div> */}
    </>
  );
}

export default Add;
