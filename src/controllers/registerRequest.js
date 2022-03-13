import bcrypt from "bcryptjs";
import users from "../data/users.js";
import checkError from "../utils/checkError.js";
import { generateToken } from "../utils/generateToken.js";
import { v4 } from "uuid";

const registerRequest = (req, res) => {
  const { username, email, firstName, lastName, password } = req.body;

  const error = checkError({
    username,
    email,
    firstName,
    lastName,
    password,
    register: true,
  });

  if (error) {
    return res.status(406).send({ message: error });
  }

  const newUser = {
    username,
    email,
    firstName,
    lastName,
    password: bcrypt.hashSync(password, 10),
    id: v4()
  };

  users.push(newUser)

  const user = {
    id: newUser.id,
    username: newUser.username,
    email: newUser.email,
    firstName: newUser.firstName,
    lastName: newUser.lastName,
  }

  res.status(201).send({
    ...user,
    token: generateToken(user)
  })
};

export default registerRequest;
