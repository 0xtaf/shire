import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const AddForm = (jsonx) => { 
  if (JSON.stringify(jsonx.json.message.msgError)){
    return (
      <div>
        <h2>You're not allowed to write posts</h2>
        <Link href="/">
          <a>Go Home</a>
        </Link>
      </div>
    )
  } else {
    return (
      <div>
        <form action="/api/posts/blogCreate" method="POST">
          <div className="form-row">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="2412 steps to become a good blog writer"
            />
          </div>
          <div className="form-row">
            <label htmlFor="details">Blogpost</label>
            <textarea
              id="details"
              cols=""
              rows="10"
              name="details"
              placeholder="The earth is flat and the ones who deny that are ignorant..."
            />
          </div>
          <div className="form-row">
            <button type="submit">Send</button>
          </div>
        </form>
  
        <style jsx>{`
          form {
            padding: 40px;
            width: 65vw;
            margin-left: auto;
            margin-right: auto;
          }
  
          .form-row {
            margin-bottom: 20px;
          }
  
          .form-row > label {
            display: block;
            margin-bottom: 6px;
          }
  
          input[type='text'],
          button,
          textarea {
            width: 100%;
            border-radius: 5px;
            height: 42px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            padding-left: 15px;
            padding-right: 15px;
            font-size: inherit;
            font-family: inherit;
            background-color: white;
          }
          textarea {
            height: 55vh;
            padding-top: 10px;
            padding-bottom: 10px;
            min-height: 42px;
            resize: none;
          }
          button {
            display: inline-block;
            width: auto;
            border: 0;
            background-color: #ccc;
          }
  
          button[type='submit'] {
            margin-left: 10px;
            color: white;
          }
  
          input[type='text']::placeholder,
          textarea::placeholder {
            color: rgb(175, 175, 175);
          }
  
          input[type='text']:focus,
          textarea:focus {
            border-color: rgb(68, 176, 255);
          }
        `}</style>
      </div>
    );
  };
  }
  

AddForm.getInitialProps = async(ctx) => {
  const cookie = ctx.req.headers.cookie
  const resp = await fetch('http://www.tayfunsur.com/api/authenticate', {
    headers: {
      'Cookie' : cookie
    }
  });
  const json = await resp.json();
  return {
    json
  };
}

export default AddForm;
