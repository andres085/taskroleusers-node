const userRepository = require('../repositories/userRepository');
const AppError = require('../handlers/errorHandler');

module.exports.userServiceCreate = (data) => {
    return userRepository.userRepositoryCreate(data);
}

module.exports.userServiceGetAll = async () => {
    const allUsers = await userRepository.userRepositoryGetAll();
    if (allUsers.length > 0) {
        return allUsers;
    }
    throw new AppError('Users not found', 404);
}

module.exports.userServiceGetOne = async (id) => {
    const userFound = await userRepository.userRepositoryGetOne(id);
    if (userFound) {
        return userFound;
    }
    throw new AppError('User not found', 404);
}

module.exports.userServiceUpdate = async (id, body) => {
    const userUpdated = await userRepository.userRepositoryUpdate(id, body);
    if(userUpdated[0] === 1){
        return userUpdated;
    }
    throw new AppError('User not found', 404);
}

module.exports.userServiceDelete = async (id) => {
    const userDeleted = await userRepository.userRepositoryDelete(id);
    if (userDeleted === 1) {
        return userDeleted;
    }
    throw new AppError('User not found', 404);
}
