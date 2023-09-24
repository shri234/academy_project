const db = require('./db');

const config = require('../config');

// async function getAllUsers(page = 1) {
//     const offset = helper.getOffset(page, config.listPerPage);
//     const rows = await db.query(
//         `SELECT id, name, RollNo, pypl_rank, tiobe_rank 
//     FROM programming_languages LIMIT ${offset},${config.listPerPage}`
//     );
//     const data = helper.emptyOrRows(rows);
//     const meta = { page };
//     return {
//         data,
//         meta
//     }
// }

async function getById(id) {
    const rows = await db.query(
        `SELECT * FROM USERS WHERE ROLLNO=${id}`
    );
    let message = 'Error in logging in';
    if (rows) {
        message = 'Logged in successfully';
    }
    return {
        message
    }
}
async function createUser(user) {
    const result = await db.query(
        `INSERT INTO users 
      (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
      VALUES 
      ('${user.name}', ${user.released_year}, ${user.githut_rank}, ${user.pypl_rank}, ${user.tiobe_rank})`
    );

    let message = 'Error in creating user';

    if (result) {
        message = 'User created successfully';
    }

    return { message };
}

module.exports = {
    // getAllUsers,
    createUser,
    getById
}