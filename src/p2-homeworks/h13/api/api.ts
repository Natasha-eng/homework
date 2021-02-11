import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export const API = {
    request(checkboxValue: boolean) {
        return instance.post<ResponseType>(`auth/test`, {success: checkboxValue})
    }
}

//type

export type ResponseType = {
    errorText: string
    response: {
        data: string
    }
}
