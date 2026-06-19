import { AppError } from "./app.error.js";

export class DuplicateUserEmailError extends AppError {
  constructor(message: string, data?: unknown) {
    super({
      errorCode: "U001",
      statusCode: 409,
      message,
      data,
    });
  }
}

export class RestaurantNotFoundError extends AppError {
    constructor(message: string, data?: unknown) {
        super({
            errorCode: "R001",
            statusCode: 404,
            message,
            data,
        });
    }
}

export class MissionAddError extends AppError {
    constructor(message: string, data?: unknown) {
        super({
            errorCode: "M001",
            statusCode: 500,
            message,
            data,
        });
    }
}

export class AlreadyChallengingMissionError extends AppError {
    constructor(message: string, data?: unknown) {
        super({
            errorCode: "M002",
            statusCode: 409,
            message,
            data,
        });
    }
}

export class MissionStartError extends AppError {
    constructor(message: string, data?: unknown) {
        super({
            errorCode: "M003",
            statusCode: 500,
            message,
            data,
        });
    }
}