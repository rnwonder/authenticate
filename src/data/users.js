import bcrypt from "bcryptjs"

const users = [
    {
        username: "rnwonder",
        email: "rnwonder@gmail.com",
        firstName: "Ruona",
        lastName: "Matthew",
        password: bcrypt.hashSync("123456", 8),
        id: "sjahsags6mm7a6s"
    }
]

export default users