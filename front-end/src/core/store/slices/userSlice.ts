import { isAxiosError } from 'axios';
import { createSlice } from 'core/utils';
import { IUser, IThunkArg } from 'core/shared/auth.interface';
import { UsersService, ProfileService } from 'core/services';

interface IInitialState {
    user: IUser | null;
    status: string;
    successText: string;
    errorText: string;
}

const initialState: IInitialState = {
    user: null,
    status: 'idle',
    successText: '',
    errorText: '',
};

const userSlice = createSlice({
    name: 'userReducer',
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
                    state.user = null;
                    state.status = 'loading';
                    state.successText = '';
                    state.errorText = '';
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
                    state.successText = 'User is registered';
                    state.errorText = '';
                },
                rejected: (state, action) => {
                    state.user = null;
                    state.status = 'error';
                    state.successText = '';
                    if (action.payload) state.errorText = action.payload;
                },
            },
        ),
        updateProfileUser: create.asyncThunk<
            IUser,
            void,
            { rejectValue: string }
        >(
            async (_, { rejectWithValue }) => {
                try {
                    const res = await ProfileService.updateProfile();
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
                    state.user = null;
                    state.status = 'loading';
                    state.successText = '';
                    state.errorText = '';
                },
                fulfilled: (state, action) => {
                    state.user = action.payload;
                    state.status = 'success';
                    state.successText = '';
                    state.errorText = '';
                },
                rejected: (state, action) => {
                    state.user = null;
                    state.status = 'error';
                    state.successText = '';
                    if (action.payload) state.errorText = action.payload;
                },
            },
        ),
        logoutUser: create.asyncThunk<void, void, { rejectValue: string }>(
            async (_, { rejectWithValue }) => {
                try {
                    const res = await UsersService.logoutUser();
                    localStorage.removeItem('accessToken');
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
                    state.user = null;
                    state.status = 'loading';
                    state.successText = '';
                    state.errorText = '';
                },
                fulfilled: (state) => {
                    state.user = null;
                    state.status = 'success';
                    state.successText = 'User logged out';
                    state.errorText = '';
                },
                rejected: (state, action) => {
                    state.user = null;
                    state.status = 'error';
                    state.successText = '';
                    if (action.payload) state.errorText = action.payload;
                },
            },
        ),
    }),
    selectors: {
        allState: (state) => state,
        selectStatus: (state) => state.status,
        selectUser: (state) => state.user,
    },
});
export const { allState, selectStatus, selectUser } = userSlice.selectors;
export const { authUser, updateProfileUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
