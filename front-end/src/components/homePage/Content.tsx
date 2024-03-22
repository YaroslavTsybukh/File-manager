import { Info, ChevronDown, Plus } from 'lucide-react';
import { FC } from 'react';

import { CONTENT_CREATE, CONTENT_SORT } from 'core/constants';
import { DropDown, Table } from '..';

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
                            showUpload={true}
                        />
                        <Info />
                    </div>
                </div>
                <Table className="content__table" />
            </div>
        </section>
    );
};
