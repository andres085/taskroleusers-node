const roleService = require('../services/roleService');

module.exports.createRole = async (data) => {
    return await roleService.roleServiceCreate(data);
}

module.exports.getAllRoles = async () => {
    return await roleService.roleServiceGetAll();
}

module.exports.getRole = async (id) => {
    return await roleService.roleServiceGetOne(id);
}

module.exports.updateRole = async (id, body) => {
    return await roleService.roleServiceUpdate(id, body);
}

module.exports.deleteRole = async (id) => {
    return await roleService.roleServiceDelete(id);
}
