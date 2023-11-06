import axios from "axios";
import { LOGIN_MEMBER } from './actionTypes'

export async function actionLoginMember(data) {

  let result;
  await axios.post("/api/auth/login", data)
    .then(res => {
      result = res.data
    })
    return {
      type: LOGIN_MEMBER,
      payload: result
    }
}

