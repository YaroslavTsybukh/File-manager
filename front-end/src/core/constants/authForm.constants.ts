export const AUTH_FORM_DEFAULT_VALUES = {
    defaultValues: {
        email: '',
        password: '',
    },
};

export const AUTH_FORM_VALIDATION_VALUES = {
    required: 'Это поле должно быть заполнено',
    minLength: {
        value: 5,
        message: 'Должно быть минимум 5 символов',
    },
};
