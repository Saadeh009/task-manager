class CustomApiError extends Error {
    constructor(errorMessage, statusCode) {
    super(errorMessage)
    this.statusCode = statusCode
    }
}

const CreateCustomError = (errorMessage, statusCode) => {
    return new CustomApiError(errorMessage, statusCode)
}

module.exports = { CreateCustomError, CustomApiError }