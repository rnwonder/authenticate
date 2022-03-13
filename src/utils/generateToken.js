import jwt from "jsonwebtoken"

// takes 3 parameters user obj, jsonwebtoken secret and options
export const generateToken = (user) => {
    return jwt.sign({
        id: user.id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
    }, 
    
    process.env.JWT_SECRET || 'sjsjs', 
    
    {
        expiresIn: '30d'
    })
}