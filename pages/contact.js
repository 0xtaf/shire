import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <form action="" method="POST">
        <div className="form-row firstrow">
          <div>
            <label for="name">Name</label>
            <input id="name" type="text" name="name" />
          </div>

          <div>
            <label for="email">Email</label>
            <input id="email" type="email" name="email" />
          </div>
        </div>

        <div className="form-row">
          <label for="message">Message</label>
          <textarea id="message" cols="" rows="10" name="message" />
        </div>
        <div className="form-row">
          <button type="submit">Send</button>
        </div>
      </form>

      <style jsx>{`
        form {
          padding: 40px;
          width: 48.5vw;
          margin-left: auto;
          margin-right: auto;
        }

        .form-row {
          margin-bottom: 20px;
        }

        .firstrow {
          display: inline-flex;
        }

        .form-row > label {
          display: block;
          margin-bottom: 6px;
        }

        .name,
        .email {
          display: inline-block;
        }

        input[type='text'],
        input[type='email'],
        button,
        textarea {
          width: 100%;
          border-radius: 5px;
          height: 42px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          padding-left: 2%;
          padding-right: 2%;
          font-size: inherit;
          font-family: inherit;
          background-color: white;
        }
        textarea {
          height: 55vh;
          padding-top: 1.5%;
          padding-bottom: 1.5%;
          min-height: 42px;
          resize: none;
        }
        button {
          display: inline-block;
          width: auto;
          border: 0;
          background-color: #eee;
        }

        button[type='submit'] {
          margin-left: 10px;
          color: white;
          background-color: rgb(68, 176, 255);
        }

        input[type='text']::placeholder,
        textarea::placeholder {
          color: rgb(175, 175, 175);
        }

        input[type='text']:focus,
        textarea:focus {
          border-color: rgb(68, 176, 255);
        }

        .form-row div:first-child {
          display: inline-block;
        }
        .form-row div:last-child {
          display: inline-block;
          margin-left: 1%;
        }

        @media (max-width: 1000px) {
          form {
            padding: 40px;
            width: 55.5vw;
            margin-left: auto;
            margin-right: auto;
          }
          .firstrow {
            display: block;
          }
          .form-row div:first-child {
            display: inline-block;
            width: 100%;
          }
          .form-row div:last-child {
            display: inline-block;
            margin-left: 0;
            width: 100%;
          }
          textarea {
            height: 41vh;
          }
        }

        @media (max-width: 760px) {
          form {
            width: 70.5vw;
          }
          textarea {
            height: 31vh;
          }
        }
        @media (max-width: 460px) {
          form {
            width: 90.5vw;
          }
        }
        
      `}</style>
    </div>
  );
};

export default ContactForm;
