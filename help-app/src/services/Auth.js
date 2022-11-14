import client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await client.post('/user/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const SignUpUser = async (data) => {
  try {
    const res = await client.post('/user/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await client.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}
