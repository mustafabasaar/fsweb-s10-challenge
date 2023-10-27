import axios from "axios";

export const NOT_EKLE = "NOT_EKLE";
export const NOT_SIL = "NOT_SIL";
export const GET_FROM_LOCAL_STORAGE = "storagedan al";
export function notEkle(not) {
  const notObj = JSON.parse(not);
  return { type: NOT_EKLE, payload: notObj };
}

export function notSil(notId) {
  return { type: NOT_SIL, payload: notId };
}
export function getFromLocal() {
  return { type: GET_FROM_LOCAL_STORAGE };
}
export const notEkleAPI = (yeniNot) => (dispatch) => {
  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      console.log("cevap", res);
      if (res.status === 200) {
        dispatch(notEkle(res.data.json));
      }
    })
    .catch((error) => console.log(error));
};

export const notSilAPI = (id) => (dispatch) => {
  console.log(id);
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      if (res.status === 200) {
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notSil ile dispatch edin
        dispatch(notSil(id));
      }
    })
    .catch((error) => console.log(error));
};
