import React, { useState } from "react";
import useHttp from "../Hook/http-request";
import { Button } from "./Button";
import classes from "./DeleteData.module.css";
import { Input } from "./Input";
export const DeleteData = () => {
  const [id, setId] = useState("");
  const { data, request, Request } = useHttp();
  const idHandler = (event) => {
    setId(event.target.value);
  };

  function deleteHandler() {
    Request({
      url: `http://localhost:4000/posts/${id}`,
      method: "DELETE",
    });
  }
  return (
    <div className={classes.delete}>
      DeleteData
      <Input
        type="number"
        placeholder="id"
        value={id}
        onchange={idHandler}
        className={classes.input}
      />
      <Button onClick={deleteHandler} className={classes.button}>
        delete
      </Button>
    </div>
  );
};
