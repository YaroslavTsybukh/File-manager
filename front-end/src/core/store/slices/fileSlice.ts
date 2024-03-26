import { isAxiosError } from 'axios';
import { FileService } from 'core/services';
import { createSlice } from 'core/utils';
import { IFileData, IFileDelete } from 'core/shared/file.interface';

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
        deleteFile: create.asyncThunk<
            IFileDelete,
            number,
            { rejectValue: string }
        >(
            async (id, { rejectWithValue, fulfillWithValue }) => {
                try {
                    const { data } = await FileService.fileDelete(id);

                    return fulfillWithValue({
                        idFile: id,
                        message: data.message,
                    });
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
                    state.files = state.files.filter(
                        (file) => file.id !== action.payload.idFile,
                    );
                    state.successText = action.payload.message;
                    state.errorText = '';
                },
                rejected: (state, action) => {
                    state.status = 'error';
                    state.successText = '';
                    if (action.payload) state.errorText = action.payload;
                },
            },
        ),
        getFilesFromRoot: create.asyncThunk<
            IFileData[],
            void,
            { rejectValue: string }
        >(
            async (_, { rejectWithValue }) => {
                try {
                    const { data } = await FileService.getfilesFromRoot();

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
                    state.files = action.payload;
                    state.successText = 'Files from the root are received';
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
export const { uploadFile, deleteFile, getFilesFromRoot } = fileSlice.actions;
export default fileSlice.reducer;
