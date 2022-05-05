const userRepository = require('../repositories/userRepository');

module.exports.userServiceCreate = (data) => {
    return userRepository.userRepositoryCreate(data);
}

module.exports.userServiceGetAll = () => {
    return userRepository.userRepositoryGetAll();
}

module.exports.userServiceGetOne = (id) => {
    return userRepository.userRepositoryGetOne(id);
}

module.exports.userServiceUpdate = (id, body) => {
    return userRepository.userRepositoryUpdate(id, body);
}

module.exports.userServiceDelete = (id) => {
    return userRepository.userRepositoryDelete(id);
}
