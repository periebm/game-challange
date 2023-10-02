import { ApplicationError } from "../middlewares/error-handler";

export function unauthorizedError(message?: string): ApplicationError {
  const errorMsg = message || "Unauthorized";
  return {
    name: "UnauthorizedError",
    message: errorMsg
  }
}