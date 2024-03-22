import { isAxiosError } from 'axios';
import { FileService } from 'core/services';
import { createSlice } from 'core/utils';
import { IFileData } from 'core/shared/file.interface';

interface IInitialState {
    status: string;
    files: IFileData[];
    successText: string;
    errorText: string;
}

const initialState: IInitialState = {
    status: 'idle',
    files: [],
    successText: '',
    errorText: '',
};

const fileSlice = createSlice({
    name: 'file',
    initialState,
    reducers: (create) => ({
        uploadFile: create.asyncThunk<
            IFileData,
            FormData,
            { rejectValue: string }
        >(
            async (formData, { rejectWithValue }) => {
                try {
                    const { data } = await FileService.fileUpload(formData);

                    return data;
                } catch (e) {
                    if (
                        isAxiosError(e) &&
                        e.response &&
                        e.response.data.message
                    ) {
                        return rejectWithValue(e.response.data.message);
                    } else {
                        throw e;
                    }
                }
            },
            {
                pending: (state) => {
                    state.status = 'loading';
                    state.successText = '';
                    state.errorText = '';
                },
                fulfilled: (state, action) => {
                    state.status = 'success';
                    state.files.push(action.payload);
                    state.successText = 'Photo is uploaded';
                    state.errorText = '';
                },
                rejected: (state, action) => {
                    state.status = 'error';
                    state.successText = '';
                    if (action.payload) state.errorText = action.payload;
                },
            },
        ),
    }),
    selectors: {
        allState: (state) => state,
    },
});

export const { allState } = fileSlice.selectors;
export const { uploadFile } = fileSlice.actions;
export default fileSlice.reducer;
