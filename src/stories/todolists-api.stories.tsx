import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "./../api/todolist-api";

export default {
    title: 'API'
}
const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '523f3afc-9394-4d5e-8a49-5b44c559d911'
    }
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.GetTodolists()
           .then(response => setState(response.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = '1'
        todolistAPI.CreateTodolist(title)
            .then( (response) => {
            setState(response.data);
        } )

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '697a36bc-e1ba-4d34-8350-523b33139eaa';
        todolistAPI.DeleteTodolist(todolistId)
            .then( (res) => {
            setState(res.data);
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'fd6c00ce-dcaa-483e-adf9-c3f5c5bdbb01'
        const title = 'Test3'
      todolistAPI.UpdateTodolist(todolistId,title)
          .then(resolve => setState(resolve.data))

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
