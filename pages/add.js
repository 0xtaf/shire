import React from 'react';

const Form = () => {
  return (
    <div>
      <form action="/add" method='POST'>
        <label for="title">title</label>
        <input type="textarea" name="title"></input>
        <label for="title">details</label>
        <input type="textarea" name="details"></input>
        <button type="submit"></button>
      </form>
    </div>  
  )
}

export default Form;