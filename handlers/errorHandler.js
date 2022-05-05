class AppError extends Error {
    constructor(message = 'Internal server error', code = 500) {
        super(message);
        this.code = code;
    }
}

module.exports = AppError;