const userService = require('../services/userService');

module.exports.createUser = async (data) => {
    return await userService.userServiceCreate(data);
}

module.exports.getAllUsers = async () => {
    return await userService.userServiceGetAll();
}

module.exports.getOneUser = async (id) => {
    return await userService.userServiceGetOne(id);
}

module.exports.updateUser = async (id, body) => {
    return await userService.userServiceUpdate(id, body);
}

module.exports.deleteUser = async (id) => {
    return await userService.userServiceDelete(id);
}
