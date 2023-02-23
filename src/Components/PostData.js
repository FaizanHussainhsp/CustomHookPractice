import React, { useState } from "react";
import classes from "./PostData.module.css";
import { Input } from "./Input";
import { Button } from "./Button";
import useHttp from "../Hook/http-request";

export const PostData = () => {
  const [title, settitle] = useState("");
  const [id, setId] = useState("");
  const { data, request, Request } = useHttp();

  const titleHandler = (event) => {
    settitle(event.target.value);
  };
  const idHandler = (event) => {
    setId(event.target.value);
  };

  const upDateHandler = () => {
    alert(title, id);
    Request({
      url: `http://localhost:4000/posts/${id}`,
      method: "PATCH",
      body: { title, id },
    });
    settitle("");
    setId("");
  };
  console.log("=================================", data);
  return (
    <div className={classes.post}>
      Update-Data
      <Input
        type="text"
        placeholder="title"
        className={classes.input}
        value={title}
        onchange={titleHandler}
      />
      <Input
        type="number"
        placeholder="id"
        className={classes.input}
        value={id}
        onchange={idHandler}
      />
      <Button onClick={upDateHandler} className={classes.button}>
        Update
      </Button>
    </div>
  );
};
