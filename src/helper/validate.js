// import toast from "react-hot-toast";

// /* Login Function */
// export async function usernameValidate(values){
//     const errors = verifyUsername({}, values);

//     return errors;
// }
// export async function passwordValidate(values){
//     const errors = verifyPassword({}, values);

//     return errors;
// }


// /* ****************************************************************************** */

// /* Password Validation */
// function verifyPassword(error = {}, values){

//     const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"|,.<>/?~`]/;

//     if(!values.password){
//         error.password = toast.error("Password Required");
//     } else if(values.password.length < 8){
//         error.password = toast.error("Password must be at least 8 characters!");
//     } else if(values.password.includes(" ")){
//         error.password = toast.error("Wrong Password!");
//     } else if(!specialChars.test(values.password)){
//         error.password = toast.error("Password must contain special characters");
//     }
//     return error;
// }

// /* Username Validation */
// function verifyUsername(error = {}, values){
//     if(!values.username){
//         error.username = toast.error("Username Required!")
//     } else if(values.username.includes(" ")){
//         error.username = toast.error("Invalid Username!")
//     }
//     return error;
// }

