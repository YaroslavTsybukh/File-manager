import { AxiosResponse } from 'axios';

export interface IAuthForm {
    email: string;
    password: string;
}

export interface ITemplateData {
    title: string;
    subtitle: string;
    button: string;
    question: {
        text: string;
        span: string;
    };
    link: string;
    pathname: string;
}

export interface IUser {
    id: number;
    name: string | null;
    email: string;
    createdAt: string;
    updatedAt: string;
    accessToken: string;
    password?: string;
}

export interface IThunkArg {
    request: (value: IAuthForm) => Promise<AxiosResponse>;
    data: IAuthForm;
}
