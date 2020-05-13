import React, { useState, useRef, useEffect } from 'react';
import AuthService from '../Services/AuthService';
import Message from '../components/Message/Message';

import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout';

const Signup = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [message, setMessage] = useState(null);
  const router = useRouter();
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser({ username: '', password: '' });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.register(user).then((data) => {
      const { message } = data;
      setMessage(message);
      resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          router.push('/panel-login');
        }, 2000);
      }
      
    });
  };

  return (
    <Layout>
      <div className="container">
        <div className="contactWrapper">
          <div className="textWrapper">
            <h4>Sign Up</h4>
          </div>
          <form onSubmit={onSubmit}>
            <div className="form-row firstrow">
              <div>
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className="form-row lastrow">
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={onChange}
                  required
                />
              </div>

              <button type="submit">Sign Up</button>
            </div>

            {message ? <Message message={message} /> : null}
          </form>

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
            .form-row {
              margin-bottom: 20px;
            }
            .firstrow {
              display: grid;
              grid-template-columns: 1fr;
            }
            .lastrow {
              display: grid;
              grid-template-columns: 1fr;
              grid-gap: 2rem;
            }

            .form-row > label {
              display: block;
              margin-bottom: 6px;
            }

            .name {
              display: inline;
            }

            input[type='text'],
            input[type='password'],
            button {
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
            input[type='password'] {
              display: inline;
              width: 100%;
            }

            button {
              display: inline-block;
              width: auto;
              border: 0;
              background-color: #232955;
            }

            button[type='submit'] {
              color: white;
            }

            input[type='text']::placeholder {
              color: rgb(175, 175, 175);
            }

            input[type='text']:focus {
              border-color: rgb(68, 176, 255);
            }

            .form-row div:first-child {
              display: inline-block;
            }
            .form-row div:last-child {
              display: inline-block;
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
            }

            @media (max-width: 760px) {
              form,
              .textWrapper {
                width: 70.5vw;
                font-size: 1.3rem;
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

export default Signup;
