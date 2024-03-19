import { Info, Download, Trash2, ChevronDown, Plus } from 'lucide-react';
import { FC } from 'react';

import { CONTENT_CREATE, CONTENT_SORT } from 'core/constants';
import { DropDown } from '../DropDown';

export const Content: FC = () => {
    return (
        <section className="content">
            <div className="container">
                <div className="content__top">
                    <h1 className="content__title">Welcome Admin!</h1>
                    <div className="content__wrapper">
                        <DropDown
                            dynamicClass="content__sort"
                            icon={<ChevronDown size={20} />}
                            buttonText="Sort By"
                            items={CONTENT_SORT}
                        />
                        <DropDown
                            dynamicClass="content__create"
                            icon={<Plus size={20} />}
                            buttonText="Create"
                            items={CONTENT_CREATE}
                        />
                        <Info />
                    </div>
                </div>
                <div className="table">
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
                        <ul className="table__row">
                            <li className="table__data table__data_image">
                                <img
                                    src="/rose.jpg"
                                    width={25}
                                    alt="content image"
                                />
                            </li>
                            <li className="table__data table__data_name">
                                <p>test</p>
                            </li>
                            <li className="table__data table__data_download">
                                <Download />
                            </li>
                            <li className="table__data table__data_trash">
                                <Trash2 />
                            </li>
                            <li className="table__data table__data_date">
                                <p>12.03.2024</p>
                            </li>
                            <li className="table__data table__data_size">
                                <p>10mb</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
