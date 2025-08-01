export interface IUserLogin {
    username: string;
    password: string;
}

export interface IAuthResponse {
    user: {
        sub: number,
        username: string,
        roleId: number
    },
    accessToken: string
}