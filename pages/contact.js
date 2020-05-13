import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [captcha, setCaptcha] = useState({
    isValue: false,
  });
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
    senderName: '',
    isHuman: false,
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
        senderName: '',
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
    if (captcha.isValue) {
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
    } else {
      alert('No robots are allowed. Sorry...');
    }
  };

  const onChangeHandler = (value) => {
    if (value) {
      setCaptcha({ isValue: true });
    } else {
      setCaptcha({ isValue: false });
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="contactWrapper">
          <div className="textWrapper">
            <h2>Contact</h2>
            <p>Do not hesitate to share your opinion or suggestion with me!</p>
          </div>
          <form action="" method="POST" onSubmit={handleOnSubmit}>
            <div className="form-row firstrow">
              <div>
                <label htmlFor="senderName">Name</label>
                <input
                  id="senderName"
                  type="text"
                  name="senderName"
                  onChange={handleOnChange}
                  value={inputs.senderName}
                />
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
            <div className="form-row lastrow">
              <button
                className={captcha.isValue ? 'notRobot' : 'robot'}
                type="submit"
                disabled={status.submitting || captcha.isValue === false}
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'Send'
                    : 'Sent'
                  : 'Sending...'}
              </button>
              <span className="captchav2">
                <ReCAPTCHA
                  sitekey="6LevZO0UAAAAADbm-Og3J3i8SJPv79vJYfqYB5O0"
                  onChange={onChangeHandler}
                />
              </span>
            </div>
          </form>

          {status.info.error && (
            <div className="error">Error: {status.info.msg}</div>
          )}
          {!status.info.error && status.info.msg && (
            <div className="success">{status.info.msg}</div>
          )}
          <style jsx>{`
            .contactWrapper {
              display: grid;
              grid-template-columns: 1fr;
            }

            form,
            .textWrapper {
              display: grid;
              grid-template-columns: 1fr;

              margin: 0 26vw;
            }
            .textWrapper {
              font-size: 1.3rem;
            }
            .textWrapper p {
              margin-top: -2%;
            }
            h2 {
              font-size: 2em;
            }
            .form-row {
              margin-bottom: 20px;
            }

            .firstrow {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            .lastrow {
              display: grid;
              grid-template-columns: 1fr 3fr;
              grid-gap: 2rem;
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
              width: 100%;
            }

            textarea {
              height: 28.5vh;
              padding-top: 1.5%;
              padding-bottom: 1.5%;
              min-height: 42px;
              resize: none;
              width: 100%;
            }
            button {
              display: inline-block;
              width: auto;
              border: 0;
              background-color: #eee;
            }

            button[type='submit'] {
              color: white;
            }

            .robot {
              background-color: #ddd;
            }
            .notRobot {
              background-color: rgb(68, 176, 255);
            }
            .captchav2 {
              overflow: hidden;
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
              form,
              .textWrapper {
                padding: 0 40px;
                width: 55.5vw;
                margin-left: auto;
                margin-right: auto;
              }
              .textWrapper {
                font-size: 1.4rem;
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
                height: 25vh;
              }
            }

            @media (max-width: 760px) {
              form,
              .textWrapper {
                width: 70.5vw;
                font-size: 1.3rem;
              }
              textarea {
                height: 24vh;
              }
              h2 {
                font-size: 1.3em;
              }
            }
            @media (max-width: 460px) {
              form,
              .textWrapper {
                width: 100.5vw;
                font-size: 1.2rem;
              }
              h2 {
                font-size: 1.3em;
              }
            }
          `}</style>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
