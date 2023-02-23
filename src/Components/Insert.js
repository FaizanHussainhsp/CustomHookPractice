import React, { useState } from "react";
import useHttp from "../Hook/http-request";
import { Button } from "./Button";
import { Input } from "./Input";
import classess from "./Insert.module.css";
export const Insert = () => {
  const [title, settitle] = useState("");
  const [id, setId] = useState("");
  const { data, request, Request } = useHttp();
  const titleHandler = (event) => {
    settitle(event.target.value);
  };
  const idHandler = (event) => {
    setId(event.target.value);
  };
  function upDateHandler() {
    alert(title, id);
    Request({
      url: `http://localhost:4000/posts/`,
      method: "POST",
      body: { title, id },
    });
    settitle("");
    setId("");
  }
  return (
    <div className={classess.insert}>
      Insert
      <Input
        type="text"
        placeholder="title"
        value={title}
        onchange={titleHandler}
        className={classess.input}
      />
      <Input
        type="number"
        placeholder="id"
        value={id}
        onchange={idHandler}
        className={classess.input}
      />
      <Button onClick={upDateHandler} className={classess.button}>
        insert
      </Button>
    </div>
  );
};
