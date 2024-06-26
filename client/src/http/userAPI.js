import {$authHost, $host} from "./index"

export const registration = async(email, password) => {
    const response = await $host.port('api/auth,registration', { email, password, role: 'ADMIN'})
    return response
}

export const login = async(email, password) => {
    const response = await $host.port('api/auth,login', { email, password})
    return response
}

export const check = async() => {
    const response = await $host.port('api/auth,registration',)
    return response
}
