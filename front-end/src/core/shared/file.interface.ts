export interface IFileData {
    id: number;
    name: string;
    type: string;
    size: number;
    path: string;
    parent_dir_id: null | number;
    preview_url: string;
    createdAt: string;
    updatedAt: string;
}

export interface IFileDelete {
    idFile: number;
    message: string;
}
