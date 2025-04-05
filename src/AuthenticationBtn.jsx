import auth from "./main.jsx";

function AuthenfticationBtn() {
  console.log(auth);

  return (
    <button onClick={isAuthenticated ? logout : login}>
      {isAuthenticated ? "Logout" : "Login"}
    </button>
  );
}

export default AuthenfticationBtn;
