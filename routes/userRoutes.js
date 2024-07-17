const {test,addUser,getUsers,getById,deleteUser,updateUser,findName} = require('../controllers/userController');



const express = require('express');

const router = express.Router();



router.get('/test', test )

router.post('/add_user', addUser)

router.get('/get_users', getUsers);
router.get('/get_user_byid/:_id',getById)
router.get('/delete_user/:_id',deleteUser)
router.put('/update_user/:_id',updateUser)

router.get('/by_name',findName)



 

module.exports = router;



  