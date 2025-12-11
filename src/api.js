// export const BASE_URL = "https://devtinder-4-lld2.onrender.com";

let BASE_URL = "";
if (window.location.hostname === "localhost") {
  BASE_URL = "http://localhost:4000";
} else {
  BASE_URL = "https://devtinder-5-j3fk.onrender.com";
  
             
}

export  {BASE_URL};
