import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(cors());



// app.use('/',(req,res)=>{
//     console.log("home route");
// });


//config
//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTUyNDIxLCJpYXQiOjE3NDMxNTIxMjEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijk5NWUyNWJlLWZjMjItNGMyMS05OGRhLTNhMTM4MDZmYWJmMiIsInN1YiI6InBvcmFwdXBhdmFuc2FpLjIyLmNzbUBhbml0cy5lZHUuaW4ifSwiY29tcGFueU5hbWUiOiJBbml0cyIsImNsaWVudElEIjoiOTk1ZTI1YmUtZmMyMi00YzIxLTk4ZGEtM2ExMzgwNmZhYmYyIiwiY2xpZW50U2VjcmV0IjoiRVJXRktEV01LeWxlWmhZSiIsIm93bmVyTmFtZSI6IlBvcmFwdSBQYXZhbiBTYWkiLCJvd25lckVtYWlsIjoicG9yYXB1cGF2YW5zYWkuMjIuY3NtQGFuaXRzLmVkdS5pbiIsInJvbGxObyI6IkEyMjEyNjU1MjE3MiJ9.YVi-VTOP9IuxOar6_4jVx17ZWUeM5enRjpw7Ik1fO0U";
//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTUzOTY5LCJpYXQiOjE3NDMxNTM2NjksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijk5NWUyNWJlLWZjMjItNGMyMS05OGRhLTNhMTM4MDZmYWJmMiIsInN1YiI6InBvcmFwdXBhdmFuc2FpLjIyLmNzbUBhbml0cy5lZHUuaW4ifSwiY29tcGFueU5hbWUiOiJBbml0cyIsImNsaWVudElEIjoiOTk1ZTI1YmUtZmMyMi00YzIxLTk4ZGEtM2ExMzgwNmZhYmYyIiwiY2xpZW50U2VjcmV0IjoiRVJXRktEV01LeWxlWmhZSiIsIm93bmVyTmFtZSI6IlBvcmFwdSBQYXZhbiBTYWkiLCJvd25lckVtYWlsIjoicG9yYXB1cGF2YW5zYWkuMjIuY3NtQGFuaXRzLmVkdS5pbiIsInJvbGxObyI6IkEyMjEyNjU1MjE3MiJ9.X02CqQf2ZCiCFdf2JUzPA-3A8cMxFSzac_o8b--qrtc";


const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTU0MzM2LCJpYXQiOjE3NDMxNTQwMzYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijk5NWUyNWJlLWZjMjItNGMyMS05OGRhLTNhMTM4MDZmYWJmMiIsInN1YiI6InBvcmFwdXBhdmFuc2FpLjIyLmNzbUBhbml0cy5lZHUuaW4ifSwiY29tcGFueU5hbWUiOiJBbml0cyIsImNsaWVudElEIjoiOTk1ZTI1YmUtZmMyMi00YzIxLTk4ZGEtM2ExMzgwNmZhYmYyIiwiY2xpZW50U2VjcmV0IjoiRVJXRktEV01LeWxlWmhZSiIsIm93bmVyTmFtZSI6IlBvcmFwdSBQYXZhbiBTYWkiLCJvd25lckVtYWlsIjoicG9yYXB1cGF2YW5zYWkuMjIuY3NtQGFuaXRzLmVkdS5pbiIsInJvbGxObyI6IkEyMjEyNjU1MjE3MiJ9.hJbcEGlgjFsJN7uJNwnCGDa3krub1QOwLhT3mmYsMqU";
const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
};


//Top Users endpoint
app.get('/users',async (req,res)=>{
    try{
        let data = await axios.get("http://20.244.56.144/test/users",config);
        console.log(data);
        res.json({
           success:"true"
        });
    }catch(error){
        console.log(error.message);
        res.json({
            success:"false"
        })
    }  
});



app.listen(5000,()=>{
    console.log("server running at port number : 3000");
});