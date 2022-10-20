import pool from "../connectdb/connectdb.js"
  
const createUser = (req, res) => {
    const user = req.body;
    let insertQuery = `insert into students(firstname, lastname, location) 
                       values( '${user.firstname}', '${user.lastname}', '${user.location}')`

    pool.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    pool.end;
}
  
export {createUser}

