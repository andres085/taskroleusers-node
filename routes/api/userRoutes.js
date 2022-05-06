const router = require('express').Router();
const userController = require('../../controllers/userController');
const asyncHandler = require('../../handlers/asyncHandler');

router.post('/', asyncHandler(async (req, res) => {
    const body = req.body;
    const response = await userController.createUser(body);
    res.status(201).json({ response });
}));

router.get('/', asyncHandler(async (req, res) => {
    const response = await userController.getAllUsers();
    res.status(200).json({ response });
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const response = await userController.getUser(id);
    res.status(200).json({ response });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    await userController.updateUser(id, body);
    res.status(200).json({
        message: 'User updated successfully'
    });
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    await userController.deleteUser(id);
    res.status(204).json();
}));

module.exports = router;