// import { useState } from 'react'

// const Profile = () => {
//   const initialState = {
//     oldPassword: '',
//     newPassword: '',
//     confirmNewPassword: ''
//   }

//   const [formState, SetFormState] = useState(initialState)

//   const handleChange = (e) => {
//     SetFormState({ ...formState, [e.target.id]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (formState.newPassword !== formState.confirmNewPassword) {
//       alert('Passwords must match!')
//       setSignUpState(initialState)
//       return
//     } else {
//       await updatePassword({
//         password: signUpState.confirmNewPassword
//       })
//       console.log(signUpState)

//       SetFormState(initialState)
//       navigate('/')
//     }
//   }

//   return
//   ;<div>
//     <form className="profileform" onSubmit={handleSubmit}>
//       <label htmlFor="username">Old Password:</label>
//       <input
//         id="password"
//         type="text"
//         placeholder="create your password"
//         onChange={handleChange}
//         value={passwordState.password}
//       />
//       <br />

//       <label htmlFor="username">New Password:</label>
//       <input
//         id="confirmPassword"
//         type="text"
//         placeholder="confirm your password"
//         onChange={handleChange}
//         value={passwordState.newPassword}
//       />
//       <br />
//       <label htmlFor="username">Confirm New Password:</label>
//       <input
//         id="confirmPassword"
//         type="text"
//         placeholder="confirm your password"
//         onChange={handleChange}
//         value={passwordState.confirmNewPassword}
//       />
//       <button type="submit">Update Password!</button>
//     </form>
//   </div>
// }

// export default Profile
