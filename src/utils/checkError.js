import users from "../data/users.js";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const checkError = ({
  username,
  email,
  firstName,
  lastName,
  password,
  login,
  register,
}) => {
  const error = {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  };

  const user = users.find((el) => 
    el.username === username
  );

  if (username.length < 3 && register) {
    error.username = "Username must have at least three(3) characters";
  }
  if (!username && login) {
    error.username = "Username cannot be empty";
  }
  if (username && user  && register) {
    error.username = "Username is already in use"
  }
  if (!firstName) {
    error.firstName = "First name cannot be empty";
  }
  if (!lastName) {
    error.lastName = "Last name cannot be empty";
  }
  if (!password) {
    error.password = "Password cannot be empty";
  }
  if (password && password.length < 6 && register) {
    error.password = "Password must have at least six(6) characters";
  }
  if (!email) {
    error.email = "Email cannot be empty";
  }
  if (email && !validateEmail(email)) {
    error.email = "Please enter a valid email";
  }

  if (register && Object.values(error).some((el) => el !== "")) {
    return error;
  }

  if ((login && error.username) || (login && error.password)) {
    return {
      username: error.username,
      password: error.password,
    };
  }

  return null;
};

export default checkError;
