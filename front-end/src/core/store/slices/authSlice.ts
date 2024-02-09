import { createSlice } from 'core/utils';
import { IUser } from 'core/shared/auth.interface';
import { isAxiosError } from 'axios';

import { IThunkArg } from 'core/shared/auth.interface';

interface IAuthState {
    user: IUser | null;
    status: string;
    successText: string;
    errorText: string;
}

const initialState: IAuthState = {
    user: null,
    status: 'idle',
    successText: '',
    errorText: '',
};

//TODO: продолжить работу над авторизацией/registration
const authSlice = createSlice({
    name: 'authReducer',
    initialState,
    reducers: (create) => ({
        authUser: create.asyncThunk<IUser, IThunkArg, { rejectValue: string }>(
            async ({ request, data }, { rejectWithValue }) => {
                try {
                    const res = await request(data);
                    localStorage.setItem('accessToken', res.data.accessToken);

                    return res.data;
                } catch (e) {
                    if (
                        isAxiosError(e) &&
                        e.response &&
                        e.response.data.message
                    ) {
                        return rejectWithValue(e.response.data.message);
                    }
                }
            },
            {
                pending: (state) => {
                    state.status = 'loading';
                    state.errorText = '';
                    state.successText = '';
                },
                fulfilled: (state, action) => {
                    const userData = {
                        id: action.payload.id,
                        name: action.payload.name,
                        email: action.payload.email,
                        createdAt: action.payload.createdAt,
                        updatedAt: action.payload.updatedAt,
                        accessToken: action.payload.accessToken,
                    };

                    state.user = userData;
                    state.status = 'success';
                    state.errorText = '';
                    state.successText = 'User is registered';
                },
                rejected: (state, action) => {
                    state.status = 'error';
                    if (action.payload) state.errorText = action.payload;

                    state.successText = '';
                },
            },
        ),
    }),
    selectors: {
        authUserSelector: (state) => state,
    },
});
export const { authUserSelector } = authSlice.selectors;
export const { authUser } = authSlice.actions;
export default authSlice.reducer;
