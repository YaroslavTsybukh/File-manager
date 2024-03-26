import { FC, ReactNode, useState, useEffect, useRef } from 'react';
import { UploadFile } from '..';

interface IProps {
    dynamicClass?: string;
    icon: ReactNode;
    buttonText: string;
    items: string[];
    showUpload?: boolean;
}

export const DropDown: FC<IProps> = ({
    dynamicClass = '',
    icon,
    buttonText,
    items,
    showUpload = false,
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        console.log(1);
    };

    useEffect(() => {
        const handler = (e: PointerEvent) => {
            if (!menuRef.current?.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('pointerdown', handler);

        return () => document.removeEventListener('pointerdown', handler);
    }, []);

    return (
        <div className={`dropdown ${dynamicClass}`} ref={menuRef}>
            <button
                type="button"
                className="dropdown__button"
                onClick={() => setOpen((prev) => !prev)}
            >
                {buttonText}
                {icon}
            </button>
            {open && (
                <ul className="dropdown__list">
                    {showUpload && (
                        <li className="dropdown__item">
                            <UploadFile />
                        </li>
                    )}
                    {items.map((item, i) => (
                        <li
                            key={i}
                            className="dropdown__item"
                            onClick={handleClick}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
