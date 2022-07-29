import axios from 'axios';

const Instance = axios.create({
    baseURL: 'http://3.39.53.3:3000',
    header:{
        'content-type':'application/json',
        port:3000,
        Authorization:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJidWRkeSIsImV4cCI6MTY5MDIxMTY1MywidXNlcm5hbWUiOiJhZG1pbiJ9.J_gyUVVYCY8ckO8i6ub-BNPAV6SC0A_-XjLrCOctvCw',
    },
    type:'post',
    dataType:'json',
});

export default Instance;