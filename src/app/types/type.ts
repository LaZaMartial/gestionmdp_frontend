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

// Password type
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

// Get all passwordType
export interface IPasswordListResponse {
    message: string;
    data: IPassword[];
}

// Posting password type
export interface IPasswordBody {
    login: string,
    description: string,
    lien: string,
    motdepasse: string,
    observation: string
}

// Get one password type
export interface IPasswordPostResponse {
    message: string;
    data: IPassword;
}

export interface IDialogData {
    action: 'add' | 'edit';
    password?: IPassword;
}