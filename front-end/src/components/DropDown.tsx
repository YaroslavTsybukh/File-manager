import { FC, ReactNode, useState, useEffect, useRef } from 'react';

interface IProps {
    dynamicClass: string;
    icon: ReactNode;
    buttonText: string;
    items: string[];
}

export const DropDown: FC<IProps> = ({
    dynamicClass,
    icon,
    buttonText,
    items,
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLUListElement>(null);

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
        <div className={`dropdown ${dynamicClass}`}>
            <button
                type="button"
                className="dropdown__button"
                onClick={() => setOpen((prev) => !prev)}
            >
                {buttonText}
                {icon}
            </button>
            {open && (
                <ul className="dropdown__list" ref={menuRef}>
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
