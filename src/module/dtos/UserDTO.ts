export interface CreateUserDTO {
    user_id?: string;
    name: string;
    email: string;
    password: string;
    login: string;
    createdAt?: Date;
}