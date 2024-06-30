import { ErrorRequestHandler } from "express";

const globalErrorhandler: ErrorRequestHandler = (error, req, res, next) => {
    let statusCode = 500;
    let message = error.message || "Something went wrong";
    let stack
  
    return res.status(statusCode).json({
      success:false,
      message:message,
      stack: stack,
    })
  };
  
  export default globalErrorhandler