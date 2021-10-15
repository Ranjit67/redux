import classes from "./Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store";

const Auth = () => {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state);
  const login = () => {
    dispatch(authAction.login());
  };
  const logOut = () => {
    dispatch(authAction.logout());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <button onClick={login}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
