import axios from "axios"

//const URL = "http://localhost:8080/taskPlanner";
const URL = "https://todo-task-planner-back.herokuapp.com/taskPlanner"
const AUTH_TOKEN ='Bearer '

axios.defaults.baseURL = URL;
function authorization (token) {
    const jwtToken = 'Bearer ' + token;
    axios.defaults.headers['Authorization'] = jwtToken;
}



export async function loginUser(email,password) {
    await axios.post("/user/login",{
        name: 'daniel',
        email: email,
        password:password
    })
        .then(function (response) {
            console.log(axios.defaults.headers)
            localStorage.setItem('isLoggedIn','true');
            localStorage.setItem('token', response.data.accessToken);
            authorization(response.data.accessToken)
            console.log(response)
        }).catch(function (error) {
            console.log(error);
        });
}

export async function registerUser(name,email,password) {
    await axios.post("/user/register",{
        name: name,
        email: email,
        password:password
    })
        .then(function (response) {
            console.log(response)
        }).catch(function (error) {
            console.log(error);
        });

}

export async function getUser(email) {
    const result = await axios.get("/users/"+email)
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
        console.log(error);
    });
    console.log(result);
    return result;
}

export async function getTasks(email) {
    console.log(axios.defaults.headers);
    const result = axios.get("/users/"+email+"/tasks")
        .then(function (response) {
            console.log(response);
            return response.data;
        }).catch(function (error) {
            console.log("fail charge the tasks");
    })
    return result;
}
