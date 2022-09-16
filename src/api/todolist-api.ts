import axios from 'axios'
import {CreateTodolist, DeleteTodolist, GetTodolists, UpdateTodolistTitle} from "../stories/todolists-api.stories";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '523f3afc-9394-4d5e-8a49-5b44c559d911'
    }
})

export const todolistAPI = {
    GetTodolists() {
        return instance.get<TodolistType[]>('https://social-network.samuraijs.com/api/1.1/todo-lists')
    },
    UpdateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todolistId}`, {title})
    },
    CreateTodolist(title: string) {
        return instance.post<ResponseType<{item:TodolistType}>>('https://social-network.samuraijs.com/api/1.1/todo-lists', {title})
    },
    DeleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`)
    }
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

