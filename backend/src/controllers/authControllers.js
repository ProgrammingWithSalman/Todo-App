export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password)
  } catch (error) {
    
  }
}

export const loginUser = async (req, res) => {

}