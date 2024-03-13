import { isAxiosError } from 'axios';
import { createSlice } from 'core/utils';
import { ProfileService } from 'core/services/profile.service';
import { IUser } from 'core/shared/auth.interface';
import { UsersService } from 'core/services';

type Profile = Omit<IUser, 'accessToken' | 'password'>;

interface IProfileState {
    user: null | Profile;
    status: string;
    errorText: string;
}

const initialState: IProfileState = {
    user: null,
    status: 'idle',
    errorText: '',
};

const profileSlice = createSlice({
    name: 'profileReducer',
    initialState,
    reducers: (create) => ({
        updateProfile: create.asyncThunk<
            Profile,
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
                    state.status = 'loading';
                    state.errorText = '';
                },
                fulfilled: (state, action) => {
                    state.status = 'success';
                    state.errorText = '';
                    state.user = action.payload;
                },
                rejected: (state, action) => {
                    state.status = 'error';
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
                    state.status = 'loading';
                    state.errorText = '';
                },
                fulfilled: (state) => {
                    state.status = 'success';
                    state.errorText = '';
                    state.user = null;
                },
                rejected: (state, action) => {
                    state.status = 'error';
                    if (action.payload) state.errorText = action.payload;
                },
            },
        ),
    }),
    selectors: {
        selectStatus: (state) => state.status,
        selectUser: (state) => state.user,
    },
});

export const { selectStatus, selectUser } = profileSlice.selectors;
export const { updateProfile, logoutUser } = profileSlice.actions;
export default profileSlice.reducer;
