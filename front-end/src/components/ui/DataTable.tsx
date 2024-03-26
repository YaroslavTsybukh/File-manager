import { FC, useEffect } from 'react';
import dayjs from 'dayjs';
import { Download, Trash2 } from 'lucide-react';
import { useAppSelector, useAppDispatch } from 'core/hooks/redux';
import {
    allState,
    deleteFile,
    getFilesFromRoot,
} from 'core/store/slices/fileSlice';
import { Spinner } from '..';
import { formatBytes } from 'core/utils';

interface IProps {
    className: string;
}

export const DataTable: FC<IProps> = ({ className = '' }) => {
    const { status, files } = useAppSelector(allState);
    const dispatch = useAppDispatch();

    const handleTrash = (id: number) => {
        dispatch(deleteFile(id));
    };

    useEffect(() => {
        dispatch(getFilesFromRoot());
    }, []);

    if (status == 'loading') return <Spinner />;

    return (
        <div className={`table ${className}`}>
            <div className="table__head">
                <ul className="table__row">
                    <li className="table__header table__header_name">
                        <p>Name</p>
                    </li>
                    <li className="table__header table__header_date">
                        <p>Date</p>
                    </li>
                    <li className="table__header table__header_size">
                        <p>Size</p>
                    </li>
                </ul>
            </div>
            <div className="table__body">
                {files.length > 0 ? (
                    files.map((file) => (
                        <ul className="table__row" key={file.id}>
                            <li className="table__data table__data_image">
                                <img
                                    src={file.preview_url}
                                    width={40}
                                    alt="content image"
                                />
                            </li>
                            <li className="table__data table__data_name">
                                <p>{file.name}</p>
                            </li>
                            <li className="table__data table__data_download">
                                <Download />
                            </li>
                            <li
                                className="table__data table__data_trash"
                                onClick={() => handleTrash(file.id)}
                            >
                                <Trash2 />
                            </li>
                            <li className="table__data table__data_date">
                                <p>
                                    {dayjs(file.createdAt).format('DD/MM/YYYY')}
                                </p>
                            </li>
                            <li className="table__data table__data_size">
                                <p>{formatBytes(file.size)}</p>
                            </li>
                        </ul>
                    ))
                ) : (
                    <div className="table__row">
                        <h2 className="table__info">
                            You haven't uploaded any files
                        </h2>
                    </div>
                )}
            </div>
        </div>
    );
};
