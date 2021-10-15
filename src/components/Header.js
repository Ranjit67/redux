import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store";
const Header = () => {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state);
  const login = () => {
    dispatch(authAction.login());
  };
  const logout = () => {
    dispatch(authAction.logOut());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authData.auth.auth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              {!authData.auth.auth ? (
                <button onClick={login}>logOut</button>
              ) : (
                <button onClick={logout}>logOut</button>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
