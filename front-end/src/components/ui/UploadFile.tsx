import { FC } from 'react';

export const UploadFile: FC = () => {
    const handleChange = (e) => {
        console.log(e.target.files);
    };

    return (
        <div className="upload">
            <input
                className="upload__input"
                type="file"
                id="upload-file"
                accept=".png, .jpeg, .jpg"
                onChange={handleChange}
            />
            <label className="upload__label" htmlFor="upload-file">
                Upload file
            </label>
        </div>
    );
};
