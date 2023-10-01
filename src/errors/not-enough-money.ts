import { ApplicationError } from "../middlewares/error-handler";

export function notEnoughMoneyError(message?: string): ApplicationError {
  const errorMsg = message || "Not Enough Money";
  return {
    name: "notEnoughMoneyError",
    message: errorMsg
  }
}