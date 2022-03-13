import bcrypt from "bcryptjs";
import users from "../data/users.js";
import checkError from "../utils/checkError.js";
import { generateToken } from "../utils/generateToken.js";

const loginRequest = (req, res) => {
    
  const { username, password } = req.body;

  const error = checkError({
    username,
    password,
    login: true,
  });

  if(error) {
      return res.status(406).send({ message: error });
  }

  const user = users.find(el => 
     el.username === username
  );
  
  if (!user) return res.status(404).send({ message: "User not found" });
  if (!bcrypt.compareSync(req.body.password, user.password))
    return res.status(404).send({ message: "Password is invalid" });

  res.status(200).send({
    id: user.id,
    username: user.username,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    token: generateToken(user)
  })
};

export default loginRequest;
