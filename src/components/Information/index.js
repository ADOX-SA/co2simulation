import React from "react";
import { infoList } from "./info-list";

export default function Information() {
  return (
    <div className="info-container">
      <h1>Información</h1>
      <Post post={infoList[0]} />
      <Post post={infoList[1]} />
      <Post post={infoList[2]} />
    </div>
  );
}

function Post(props) {
  return (
    <div className="post-container">
      <PostHeader subtitle={props.post.subtitle} title={props.post.title} />
      <PostContent content={props.post} />
    </div>
  );
}

function PostHeader(props) {
  return (
    <div className="post-header">
      <h2 className="post-subtitle">{props.subtitle}</h2>
      <h1 className="post-title">{props.title}</h1>
    </div>
  );
}

function PostContent(props) {
  return (
    <div className="post-content">
      {props.content.image !== "" ? (
        <img
          className="post-content-image"
          src={props.content.image}
          alt=""
        ></img>
      ) : (
        <></>
      )}

      {props.content.texts.map((text) => {
        return (
          <p className="post-content-text" key={text}>
            {text.text}
            {text.url !== "" || text.url ? <a href={text.url}> Link</a> : <></>}
          </p>
        );
      })}
    </div>
  );
}
