

// export const signUpSchema = Yup.object({
//     name: Yup.string().min(3).max(20).matches(/^[A-Za-z\s]+$/).required("Please enter your name"),
//     email: Yup.string().email().required("Please enter your email"),
//     password: Yup.string()
//         .matches(
//             /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
//             "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 6 characters long"
//         )
//         .required("Please enter your password"),
//     confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Passwords must match"),
// });


import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string()
        .min(3, "Name must be at least 3 characters long")
        .max(20, "Name must be at most 20 characters long")
        .matches(
            /^[A-Za-z\s]+$/,
            "Name must contain only alphabetic characters and spaces"
        )
        .required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 6 characters long"
        )
        .required("Please enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Passwords must match"),
});



