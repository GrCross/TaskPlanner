import axios from "axios"

//const URL = "http://localhost:8080/taskPlanner";
const URL = "https://todo-task-planner-back.herokuapp.com/taskPlanner"

axios.defaults.baseURL = URL;

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
    const result = axios.get("/users/"+email+"/tasks")
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log("fail charge the tasks");
    })

    return result;
}
