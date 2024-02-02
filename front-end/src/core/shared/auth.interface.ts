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
