import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "No token provided"));

  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) return next(createError(401, "Invalid token"));
      req.user = decoded;
      next();
    });
  } catch (error) {
    next(error);
  }
};

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next , () => {
        if(req.user.id === req.params.id || req.user.isAdmin) next();
        else return next(createError(403, "You are not authorized to perform this action"));
    });
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req,res,next, () => {
        if(req.user.isAdmin) next()
        else return next(createError(403, "You are not authorized to perform this action"));
    })
}