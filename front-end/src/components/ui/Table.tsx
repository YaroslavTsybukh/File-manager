import { FC } from 'react';
import dayjs from 'dayjs';
import { Download, Trash2 } from 'lucide-react';
import { useAppSelector } from 'core/hooks/redux';
import { allState } from 'core/store/slices/fileSlice';
import { formatBytes } from 'core/utils';

interface IProps {
    className: string;
}

export const Table: FC<IProps> = ({ className = '' }) => {
    const { status, files } = useAppSelector(allState);
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
                {files.map((file) => (
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
                        <li className="table__data table__data_trash">
                            <Trash2 />
                        </li>
                        <li className="table__data table__data_date">
                            <p>{dayjs(file.createdAt).format('DD/MM/YYYY')}</p>
                        </li>
                        <li className="table__data table__data_size">
                            <p>{formatBytes(file.size)}</p>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
};
