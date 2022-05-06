const roleRepository = require('../repositories/roleRepository');
const AppError = require('../handlers/errorHandler');

module.exports.roleServiceCreate = (data) => {
    return roleRepository.roleRepositoryCreate(data);
}

module.exports.roleServiceGetAll = async () => {
    const allRoles = await roleRepository.roleRepositoryGetAll();
    if (allRoles.length > 0) {
        return allRoles;
    }
    throw new AppError('Roles not found', 404);
}

module.exports.roleServiceGetOne = async (id) => {
    const roleFound = await roleRepository.roleRepositoryGetOne(id);
    if (roleFound) {
        return roleFound;
    }
    throw new AppError('Role not found', 404);
}

module.exports.roleServiceUpdate = async (id, body) => {
    const roleUpdated = await roleRepository.roleRepositoryUpdate(id, body);
    if(roleUpdated[0] === 1){
        return roleUpdated;
    }
    throw new AppError('Role not found', 404);
}

module.exports.roleServiceDelete = async (id) => {
    const roleDeleted = await roleRepository.roleRepositoryDelete(id);
    if (roleDeleted === 1) {
        return roleDeleted;
    }
    throw new AppError('Role not found', 404);
}
