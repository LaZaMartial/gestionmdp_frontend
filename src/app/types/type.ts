//Payload type sent for authenticate
export interface IUserLogin {
    username: string;
    password: string;
}

//Response type of authentication request
export interface IAuthResponse {
    user: {
        sub: number,
        username: string,
        roleId: number
    },
    accessToken: string
}

// Password response type
export interface IPassword {
    id: number,
    userId: number,
    login: string,
    description: string,
    lien: string,
    motdepasse: string,
    dateCreation: string,
    dateModification: string,
    dateExpiration: string,
    observation: string
}