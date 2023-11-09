import axios from "axios";


export async function actionGetHello() {
  let result;
  await axios.get("/api/app/hello")
    .then(res => {
      result = res.data
    })
  return result
}

export async function actionGetCodeList(data) {
  let result;
  await axios.get("/api/common/code-list" , data)
    .then(res => {
      result = res.data
    })
  return result
}

