import pool from "../connectdb/connectdb.js"

//========================================POST/CreateTeacher==========================================================//

const createTeacher = async function (req, res) {
    try {

        const data = req.body;
        const { fullname, gender, address, dob, email, mobile, joiningdate } = data
        let insertQuery = `insert into teachers(fullname, gender, address, dob, email, mobile, joiningdate,timestamp) 
                           values( '${data.fullname}', '${data.gender}', '${data.address}','${data.dob}',
                           '${data.email}','${data.mobile}','${data.joiningdate}',current_timestamp) ON CONFLICT DO NOTHING`


        pool.query(insertQuery, (err, result) => {
            if (!err) {
                res.status(201).send({
                    status: 1009, message: "Your Teacher has been created successfully", data: {
                        teacher: { fullname, gender, address, dob, email, mobile, joiningdate }
                    }
                })
            }
            else { console.log(err.message) }
        })
        pool.end;
    }
    catch (err) {
        return res.status(422).send({ status: 1001, msg: "Something went wrong Please check back again" })
    }
};

const createClass = async function (req, res) {
    try {

        const data = req.body;
        const { name, departmentname, shift } = data
        let insertQuery = `insert into classes (name, departmentname, shift,timestamp) 
                           values( '${data.name}', '${data.departmentname}','${data.shift}',current_timestamp)`


        pool.query(insertQuery, (err, result) => {
            if (!err) {
                res.status(201).send({ status: 1009, message: "Your Class has been created successfully", data: { class: { name, departmentname, shift } } })
            }
            else { console.log(err.message) }
        })
        pool.end;
    }
    catch (err) {
        return res.status(422).send({ status: 1001, msg: "Something went wrong Please check back again" })
    }
};

const createSubject = async function (req, res) {
    try {

        const data = req.body;
        const { subjectCode, subjectName} = data
        let insertQuery = `insert into subjects (subjectCode, subjectName,timestamp) 
                           values( '${data.subjectCode}','${data.subjectName}',current_timestamp)`


        pool.query(insertQuery, (err, result) => {
            if (!err) {
                res.status(201).send({ status: 1009, message: "Your Subject has been created successfully", data: { Subject: { subjectCode, subjectName} } })
            }
            else { console.log(err.message) }
        })
        pool.end;
    }
    catch (err) {
        return res.status(422).send({ status: 1001, msg: "Something went wrong Please check back again" })
    }
};


export {
    createTeacher,
    createClass,
    createSubject
}