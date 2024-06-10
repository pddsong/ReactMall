import { createContext, useContext } from "react";
import { useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  isAuthenticated: localStorage.getItem("userInfo") ? true : false,
  isAdim: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    case "adimLogin":
      return { ...state, isAdim: true };
    case "adimLogout":
      return { ...state, isAdim: false };
    default:
      throw new Error("Unknown action");
  }
}

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [{ user, isAuthenticated, isAdim }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(username, password) {
    let user = JSON.parse(localStorage.getItem("users")).filter(
      (data) => data.username === username
    );
    user = user[0];
    console.log(user.username);

    console.log(
      username === user.username && Number(password) === user.password
    );
    if (username === user.username && Number(password) === user.password) {
      localStorage.setItem("userInfo", JSON.stringify(user));
      dispatch({ type: "login", payload: user });
      return 1;
    }
    return 0;
  }

  function adimLogin(username, password) {
    const user = JSON.parse(localStorage.getItem("adim"));

    if (username === user.username && Number(password) === user.password) {
      dispatch({ type: "adimLogin", payload: user });

      return 1;
    }
    return 0;
  }

  function logout() {
    dispatch({ type: "logout" });
    localStorage.removeItem("userInfo");
  }

  function adminLogout() {
    dispatch({ type: "adimLogout" });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        isAdim,
        adimLogin,
        adminLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("AuthContext was used outside");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
