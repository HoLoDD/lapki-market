export interface IUser {
    id: number;
    email: string;
    username: string;
    phone: number;
}

export interface IUserResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}
