import axios from "axios";
import { encrypt } from '../../utiles/crypto';
import { getNowDateTime } from "../../utiles/date";


export async function actionGetHello() {
  let result;
  await axios.get("/api/app/hello")
    .then(res => {
      result = res.data
    })
  return result
}


//------------------------ [S3] -------------------------
// 다운로드
export async function actionDownloadS3Data(data) {
  const config = {
    responseType: 'blob',
    params: data
  };

  axios.get(`/api/common/s3`, config)
    .then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', data.originalFileNm); //or any other extension
      document.body.appendChild(link);
      link.click();
      link.remove();
      
    })
    .catch((error) => {
      console.log('File download failed.');
    });
}

export async function actionDownloadAllS3Data(data) {
  let { zipName ,boardId } =data
  let result
  let fileName = zipName.replace(/"."/gi, '_');

  await axios.post(`/api/common/s3/download-all/` + encrypt(boardId) )
      .then((res) => {
        let bytes = new Uint8Array(res.data.zipBuffer.data);
        let blob = new Blob([bytes], {type: "application/zip"});
        let link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `${fileName}_${getNowDateTime()}.zip`
        link.click();
        link.remove();
      }
  )

  return result
}

// 파일 데이터
export async function actionGetS3File(data) {
  let result;
  const config = {
    responseType: 'blob',
    params: data
  };

  let ext = data.fileName.slice( data.fileName.lastIndexOf('.')+1)
  
  await axios.get(`/api/common/s3`, config)
    .then((res) => {
      result = new File([res.data], data.fileName, {type: `application/${ext}`});
    })
    .catch((error) => {
      console.log('File download failed.');
    });

    return result;
}