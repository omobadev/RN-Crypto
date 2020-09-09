import axios from "axios"

const uploadImageAsync = async (uri: string, json: any) => {
  fetch(uri)
    .then((res) => res.blob())
    .then(async (blob) => {
      const file = new File([blob], "capture.png", {
        type: "image/png",
      })
      let fd = new FormData()
      fd.append("image", file)
      fd.append("doc_input", json)

      return axios({
        method: "post",
        url: "https://cgc.capital/api_interface",
        data: fd,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          console.log(response)
        })
        .catch((response) => {
          console.log(response)
        })
    })
}

export default uploadImageAsync
