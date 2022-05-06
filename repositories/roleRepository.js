const db = require('../models');

module.exports.roleRepositoryCreate = async (data) => {
    return await db.Role.create(data);
}

module.exports.roleRepositoryGetAll = async () => {
    return await db.Role.findAll({
        attributes: ['name']
    });
}

module.exports.roleRepositoryGetOne = async (id) => {
    return await db.Role.findByPk(id, {
        attributes: ['name'],
        include: {
            model: db.User,
            as: 'user'
        }
    });
}

module.exports.roleRepositoryUpdate = async (id, data) => {
    const updatedRole = await db.Role.update({
        name: data.name,
    }, { where: {id:id} });
    return updatedRole;
}

module.exports.roleRepositoryDelete = async (id) => {
    const deletedRole = await db.Role.destroy({ where: {id: id} });
    return deletedRole;
}