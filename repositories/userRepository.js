const db = require('../models');

module.exports.userRepositoryCreate = async (data) => {
    return await db.User.create(data);
}

module.exports.userRepositoryGetAll = async () => {
    return await db.User.findAll();
}

module.exports.userRepositoryGetOne = async (id) => {
    return await db.User.findByPk(id);
}

module.exports.userRepositoryUpdate = async (id, data) => {
    const updatedUser = await db.User.update({
        username: data.username,
        email: data.email,
        password: data.password
    }, { where: id });
    return updatedUser;
}

module.exports.userRepositoryDelete = async (id) => {
    const deletedUser = await db.User.destroy({ where: id });
    return deletedUser;
}