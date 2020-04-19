import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <Layout>
      <div className="container">
        <div className="textWrapper">
          <h2>Contact</h2>
          <p>Do not hesitate to share your opinion or suggestion with me!</p>
        </div>
        
        <form action="" method="POST" onSubmit={handleOnSubmit}>
          <div className="form-row firstrow">
            <div>
              <label htmlFor="senderName">Name</label>
              <input id="senderName" type="text" name="senderName" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={handleOnChange}
                required
                value={inputs.email}
              />
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              cols=""
              rows="10"
              name="message"
              onChange={handleOnChange}
              required
              value={inputs.message}
            />
          </div>
          <div className="form-row">
            <button type="submit" disabled={status.submitting}>
              {!status.submitting
                ? !status.submitted
                  ? 'Submit'
                  : 'Submitted'
                : 'Submitting...'}
            </button>
          </div>
        </form>
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && (
          <div className="success">{status.info.msg}</div>
        )}
        <style jsx>{`
          .textWrapper {
            margin-left: 31vw;
            margin-top: -2%;
          }
          .textWrapper h2 {
            font-size: 3em;
            font-weight: 400;
          }
          .textWrapper p {
            max-width: 35vw;
            font-size: 1.2em;
            margin-top: -2%;
          }

          form {
            padding: 40px;
            margin: 0 28vw;
            margin-top: -2%;
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
            display: inline;
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

          input[type='text'],
          input[type='email'] {
            display: inline;
          }

          textarea {
            height: 35vh;
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
            .textWrapper {
              margin-left: 27vw;
            }
            .textWrapper h2 {
              font-size: 3em;
              font-weight: 400;
            }

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
            .textWrapper {
              margin-left: 21.6vw;
            }
            .textWrapper h2 {
              font-size: 2.7em;
              font-weight: 400;
            }
            .textWrapper p {
              max-width: 49vw;
            }
            form {
              width: 70.5vw;
            }
            textarea {
              height: 31vh;
            }
          }
          @media (max-width: 460px) {
            .textWrapper {
              margin-left: 14.6vw;
            }
            .textWrapper h2 {
              font-size: 2.2em;
              font-weight: 400;
            }
            .textWrapper p {
              max-width: 58vw;
            }
            form {
              width: 90.5vw;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Contact;
