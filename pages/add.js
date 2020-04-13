import React from 'react';

const Form = () => {
  return (
    <div>
      <form action="" method="POST">
        <div>
          <label for="title">Title</label>
          <input id="title" type="text" name="title"/>
        </div>
        <div>
          <label for="details">Blogpost</label>
          <textarea id="details" cols="" rows="10" name="details"/>
        </div>

        <button type="submit">Send</button>
      </form>

      <style jsx>{`
        label {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Form;
