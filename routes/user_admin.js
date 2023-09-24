const express = require('express')
const router = express.Router()

const {
    // getAllUsers,
    createUser,
    getById
} = require('../services/user_admin.js')

// router.get('/getAll', getAllUsers);

router.get('/:rollno', getById);

router.post('/createUser', createUser);

// router.put('/:productID', updateProduct)

// router.delete('/:productID', deleteProduct)

module.exports = router