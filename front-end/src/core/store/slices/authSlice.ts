import { createSlice } from 'core/utils';
import { IRegisterUser } from 'core/shared/auth.interface';

interface IAuthState {
    user: IRegisterUser | null;
    isLogged: boolean;
}

const initialState: IAuthState = {
    user: null,
    isLogged: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: (create) => ({}),
});

export default authSlice.reducer;
