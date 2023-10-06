import {
  useState,
  type FormEventHandler,
  type ChangeEventHandler,
  type MouseEventHandler,
} from "react";

import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

import { useAuth } from "../auth-provider/use-auth";
import LoginForm from "../LoginForm";
import { useLoginFormReducer } from "../login-form.state";

import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";

import "./App.css";

const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [show, setShow] = useState(false);
  const auth = useAuth();
  const { state, dispatchEvent } = useLoginFormReducer();

  const toggleForm: MouseEventHandler = (event) => {
    if (!auth?.isAuthenticated) {
      event.preventDefault();

      setShow(!show);
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    dispatchEvent({
      type: "change",
      fieldName: target.name,
      fieldValue: target.value,
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    auth?.signin(
      {
        username: state.username.value,
        password: state.password.value,
      },
      () => {
        navigate("private", {
          state: {
            from: location,
            routeName: "Private Page",
          },
          replace: true,
        });
      }
    );
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/private" onClick={toggleForm}>
              Private Page
            </Link>
          </li>
        </ul>

        {!auth?.isAuthenticated && show ? (
          <LoginForm onSubmit={handleSubmit} onChange={handleChange} />
        ) : null}
      </div>

      <Outlet />
    </>
  );
};

export default Root;
