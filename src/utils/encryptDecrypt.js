import CryptoJS from "crypto-js";
const key = CryptoJS.enc.Utf8.parse("1234567887654321");
const iv = CryptoJS.enc.Utf8.parse("1234567887654321");

//Fucntion for AES encryption
export const encrypt = (data) => {
  const encryptData = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), key, {
    keySize: 128 / 8,
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encryptData.toString();
};
