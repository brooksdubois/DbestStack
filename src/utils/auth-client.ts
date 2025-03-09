// import { createAuthClient } from "better-auth/solid"
//
// export const authClient =  createAuthClient({
//   baseURL: "http://localhost:3000" // the base url of your auth server
// })
//
// const { error } = await authClient.signUp.email({
//   email: 'test@example.com',
//   password: 'TestPassword123!',
//   name: 'Brooks DuBois',
// });
//
// const { error } = await authClient.signIn.email({
//   email: "email@email.com",
//   password: "password1234",
// }, {
//   onSuccess(ctx) {
//     console.log("AUTH SUCCESS!", ctx)
//   }
// })
//
// if (error) {
//   console.error("Signup Error!", error)
// }
