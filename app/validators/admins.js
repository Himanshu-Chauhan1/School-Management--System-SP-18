import pool from "../connectdb/connectdb.js";
import isvalidBirthdate from 'is-valid-birthdate'
import validateDate from 'validate-date'


////////////////////////// -GLOBAL- //////////////////////
const isValid = function (value) {
    if (!value || typeof value != "string" || value.trim().length == 0)
        return false;
    return true;
};

//////////////// -FOR EMPTY BODY- ///////////////////////
const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0;
};

//////////////// -FOR FULLNAME- ///////////////////////
const isValidFullName = (fullName) => {
    return /^[a-zA-Z ]+$/.test(fullName);
};

//////////////// -FOR GENDER- ///////////////////////
const isValidGender = (gender) => {
    return /^(?:m|M|male|Male|f|F|female|Female|O|Other|other)$/m.test(gender);
};


//////////////// -FOR ADDRESS- ///////////////////////
const isValidAddress = (address) => {
    return /^[a-zA-Z0-9\s,'-]*$/m.test(address);
};

//////////////// -FOR EMAIL- ///////////////////////
const isValidEmail = (email) => {
    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
};

//////////////// -FOR MOBILE- ///////////////////////
const isValidMobile = (mobile) => {
    return /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/.test(mobile);
};

//////////////// -FOR CLASS SHIFT- ///////////////////////
const isValidShift = (shift) => {
    return /\b((?:1[0-2]|[1-9])[ap]m)-((?:1[0-2]|[1-9])[ap]m)$/gm.test(shift);
};

//////////////// -FOR SUBJECT CODE- ///////////////////////
const isValidSubjectCode = (subjectCode) => {
    return /([A-Z]{2,})(?:\s*)([0-9]{3,})?$/g.test(subjectCode);
};

//========================================CreateUser==========================================================//

const createTeacherValidation = async function (req, res, next) {
    try {
        const data = req.body

        const { fullname, gender, address, dob, email, mobile, joiningdate } = data

        if (!isValidRequestBody(data)) {
            return res.status(422).send({ status: 1002, message: "Please Provide Details" })
        }

        if (!isValid(fullname)) {
            return res.status(422).send({ status: 1002, message: "FullName is required" })
        }

        if (!isValidFullName(fullname)) {
            return res.status(422).send({ status: 1003, message: "Please provide a valid fullName" })
        }

        if (!isValid(gender)) {
            return res.status(422).send({ status: 1002, message: "Gender is required" })
        }

        if (!isValidGender(gender)) {
            return res.status(422).send({ status: 1003, message: "Invalid gender" })
        }

        if (!isValid(address)) {
            return res.status(422).send({ status: 1002, message: "Address is Required" })
        }

        if (!isValidAddress(address)) {
            return res.status(422).send({ status: 1003, message: "Invalid Address, Please enter address in a correct format" })
        }

        if (!isValid(dob)) {
            return res.status(422).send({ status: 1002, message: "Date of Birth is Required" })
        }

        if (!isvalidBirthdate(dob)) {
            return res.status(422).send({ status: 1003, message: "Please enter date of birth from the past Only, It cannot current year or greater from the current year" })
        }

        if (!isValid(email)) {
            return res.status(422).send({ status: 1002, message: "Email is required" })
        }

        if (!isValidEmail(email)) {
            return res.status(422).send({ status: 1003, message: "Email should be a valid email address" })
        }

        if (!isValid(mobile)) {
            return res.status(422).send({ status: 1002, message: "Phone No. is required" })
        }

        if (!isValidMobile(mobile)) {
            return res.status(422).send({ status: 1003, message: "Please enter a valid Phone no" })
        }

        if (!isValid(joiningdate)) {
            return res.status(422).send({ status: 1002, message: "Date of Joining is Required" })
        }

        if (!validateDate(joiningdate)) {
            return res.status(422).send({ status: 1003, message: "Invalid Joining Date or Please enter date of joining in the correct format" })
        }
        
        next()

    } catch (error) {
        console.log(error.message);
        return res.status(422).send({ status: 1001, msg: "Something went wrong Please check back again" })
    }
}

//========================================CreateClass==========================================================//

const createClassValidation = async function (req, res, next) {
    try {
        const data = req.body

        const { name, departmentname, shift } = data

        if (!isValidRequestBody(data)) {
            return res.status(422).send({ status: 1002, message: "Please Provide Details" })
        }

        if (!isValid(name)) {
            return res.status(422).send({ status: 1002, message: "Class Name is required" })
        }

        if (!isValidFullName(name)) {
            return res.status(422).send({ status: 1003, message: "Please provide a valid Class Name" })
        }

        if (!isValid(departmentname)) {
            return res.status(422).send({ status: 1002, message: "Department is required" })
        }

        if (!isValid(shift)) {
            return res.status(422).send({ status: 1002, message: "Class Shift is required" })
        }

        if (!isValidShift(shift)) {
            return res.status(422).send({ status: 1003, message: "Please enter class shift in a format of like 9am-5pm" })
        }

        next()

    } catch (error) {
        console.log(error.message);
        return res.status(422).send({ status: 1001, msg: "Something went wrong Please check back again" })
    }
}

//========================================CreateSubject==========================================================//

const createSubjectValidation = async function (req, res, next) {
    try {
        const data = req.body

        const { subjectCode, subjectName} = data

        if (!isValidRequestBody(data)) {
            return res.status(422).send({ status: 1002, message: "Please Provide Details" })
        }

        if (!isValid(subjectCode)) {
            return res.status(422).send({ status: 1002, message: "Subject Code is required" })
        }

        // if (subjectCode.match(isValidSubjectCode)) {
        //     var splitted = subjectCode.split(isValidSubjectCode);
        //     console.log(splitted.length);
        //     if (splitted.length > 1) {
        //       splitted.forEach(function(value, index) {
        //         if ((value != '') && (value != undefined))
        //           console.log(value, index);
        //       });
        //     }
        //   } else {
        //     return res.status(422).send({ status: 1003, message: "Please enter a valid subject code" })
        //   }

        if (!isValid(subjectName)) {
            return res.status(422).send({ status: 1002, message: "Subject name is required" })
        }

        if (!isValidFullName(subjectName)) {
            return res.status(422).send({ status: 1003, message: "Please enter a valid subject name" })
        }

        next()

    } catch (error) {
        console.log(error.message);
        return res.status(422).send({ status: 1001, msg: "Something went wrong Please check back again" })
    }
}

export {
    createTeacherValidation,
    createClassValidation,
    createSubjectValidation
}
