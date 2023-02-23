import React, { useEffect } from "react";
import useHttp from "../Hook/http-request";
import classes from "./GetData.module.css";

export const GetData = () => {
  const { data, request, Request } = useHttp(); //one time call //
  return (
    <>
      <div className={classes.get}>
        GetData
        {data.length &&
          data.map((data, index) => <h6 key={index}>{data.title}</h6>)}
      </div>
    </>
  );
};
