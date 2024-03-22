import { instanceWithTokens } from 'core/config';
import { IFileData } from 'core/shared/file.interface';

export const FileService = {
    async fileUpload(file: FormData) {
        return await instanceWithTokens.post<IFileData>('file/upload', file, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            timeout: 5000,
        });
    },
};
