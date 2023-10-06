import { useNavigate, useLocation, Link } from "react-router-dom";

import RedirectAuth from "../RedirectAuth";

import { useAuth } from "../auth-provider/use-auth";

const Private = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const auth = useAuth();

  const handleClick = () => {
    auth?.signout(() => {
      navigate("/", {
        state: {
          from: location,
          routeName: "Home Page",
        },
        replace: true,
      });
    });
  };

  return (
    <RedirectAuth>
      <h1>Private</h1>

      <div className="private-info">
        <div>
          User name: <b>{auth?.info?.username}</b>
        </div>

        <div>
          <button type="button" onClick={handleClick}>
            Logout
          </button>
        </div>
      </div>

      <div>
        Go to <Link to="/">Home Page</Link>
      </div>
    </RedirectAuth>
  );
};

export default Private;
