import axios from "axios";

const API_KEY = "AIzaSyD1LzpE1sMwVmzAc3je1hqIiOiHQA7Qu8g";

async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}

export default createUser;
