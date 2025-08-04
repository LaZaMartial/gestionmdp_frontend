export const BASE_URL = 'http://localhost:3000'

//Authentication URL
export const AUTH_ENDPOINT_URL = `${BASE_URL}/auth/login`

//User's login password URL
export const USER_PASSWORD_ENDPOINT_URL = `${BASE_URL}/users/password`

//User's password URL
export const PASSWORD_ENDPOINT_URL = `${BASE_URL}/passwords`
export const BOOLEAN_EXPIRED_PASSWORD_ENDPOINT_URL = `${BASE_URL}/check/expired-password`
export const LIST_EXPIRED_PASSWORD_ENDPOINT_URL = `${BASE_URL}/list/expired-passwords`
export const LIST_SOON_TO_EXPIRED_PASSWORD_ENDPOINT_URL = `${BASE_URL}/list/soon-to-expire-passwords`

export function PASSWORD_ENDPOINT_WITH_PARAMS_URL(passwordId: number) {
    return `${BASE_URL}/passwords/${passwordId}`
}

export function GET_REMAINING_DAYS_ENDPOINT_URL(passwordId: number) {
    return `${BASE_URL}/passwords/${passwordId}/remaining-days`
}