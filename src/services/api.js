const BASE_URL = "https://ipt71.kuno-schuerch.bbzwinf.ch"

export async function register(userData) {
    const response = await fetch(`${BASE_URL}/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    })
    return response
}

export async function login(credentials) {
    const response = await fetch(`${BASE_URL}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
    })
    return response
}

export async function getProducts() {
    const response = await fetch(`${BASE_URL}/product/list`)
    return response.json()
}