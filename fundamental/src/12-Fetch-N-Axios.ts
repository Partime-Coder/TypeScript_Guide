import axios from "axios"
import type  { AxiosResponse } from "axios" // this give error need diffrent line and include type 

interface Todo {
    userID: number;
    id: number;
    title: string;
    completed: boolean;
}

const axiosData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log("Todo", response.data);

    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log("Axios Error", error.message);
        }
        if (error.response) {
            console.log(error.response.error);

        }
    }
}

const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        const data: Todo = await response.json();
        console.log("res: ",data);
        

    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        console.log("error is:", error);

    }
}