const db = require('../models');

module.exports.userRepositoryCreate = async (data) => {
    return await db.User.create(data);
}

module.exports.userRepositoryGetAll = async () => {
    return await db.User.findAll({
        attributes: ['username', 'email']
    });
}

module.exports.userRepositoryGetOne = async (id) => {
    return await db.User.findByPk(id, {
        attributes: ['username', 'email'],
        include: {
            model: db.Task,
            as: 'tasks'
        }
    });
}

module.exports.userRepositoryUpdate = async (id, data) => {
    const updatedUser = await db.User.update({
        username: data.username,
        email: data.email,
        password: data.password
    }, { where: {id:id} });
    return updatedUser;
}

module.exports.userRepositoryDelete = async (id) => {
    const deletedUser = await db.User.destroy({ where: {id: id} });
    return deletedUser;
}