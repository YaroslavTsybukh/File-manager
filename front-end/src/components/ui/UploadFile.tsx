import { ChangeEvent, FC } from 'react';
import { uploadFile } from 'core/store/slices/fileSlice';
import { useAppDispatch } from 'core/hooks/redux';

export const UploadFile: FC = () => {
    const dispatch = useAppDispatch();

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (!files) return;

        Array.from(files).forEach((file) => {
            const formData = new FormData();

            formData.append('file', file);
            formData.append('name', file.name);
            formData.append('type', 'file');
            formData.append('typeImage', file.type);
            formData.append('size', String(file.size));
            formData.append('path', '.');

            dispatch(uploadFile(formData));
        });
    };

    return (
        <div className="upload">
            <input
                className="upload__input"
                type="file"
                id="upload-file"
                accept=".png, .jpeg, .jpg"
                onChange={handleChange}
                multiple
            />
            <label className="upload__label" htmlFor="upload-file">
                Upload file
            </label>
        </div>
    );
};
