import { Plus, Info } from 'lucide-react';
import { FC } from 'react';

export const Content: FC = () => {
    return (
        <section className="content">
            <div className="container">
                <div className="content__top">
                    <h1 className="content__title">Welcome Admin!</h1>

                    <div className="content__wrapper">
                        <select name="sort-documents" className="content__sort">
                            <option value="0">Sort by</option>
                            <option value="DESC Date">Descending Date</option>
                            <option value="ASC Date">Ascending Date</option>
                            <option value="DESC Alphabet">
                                Descending Alphabet
                            </option>
                            <option value="ASC Alphabet">
                                Ascending Alphabet
                            </option>
                        </select>
                        <select name="create" className="content__create">
                            <option value="0">New Create</option>
                            <option value="1">Create new folder</option>
                            <option value="2">Upload File</option>
                        </select>
                        <Info />
                    </div>
                </div>
            </div>
        </section>
    );
};
