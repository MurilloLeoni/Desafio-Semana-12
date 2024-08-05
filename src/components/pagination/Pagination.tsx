import React from "react";

const MAX_ITEMS = 3;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

type Props = {
    limit: number;
    total: number;
    offset: number;
    setOffset: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ limit, total, offset, setOffset }: Props) => {
    const current = offset ? Math.floor(offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
    const first = Math.min(Math.max(current - MAX_LEFT, 1), maxFirst);

    function onPageChange(page: number) {
        setOffset((page - 1) * limit);
    }

    return (
        <ul className="flex items-center justify-center gap-9 py-6 text-xl">
            {Array.from({ length: Math.min(MAX_ITEMS, pages) })
                .map((_, index) => index + first)
                .map((page) => (
                    <li key={page}>
                        <button
                            onClick={() => onPageChange(page)}
                            className={`px-6 py-4 rounded-lg ${
                                page === current ? "bg-#B88E2F text-white" : "bg-#FFF3E3 text-black"
                            }`}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            <li>
                <button
                    onClick={() => onPageChange(current + 1)}
                    disabled={current === pages}
                    className="bg-#FFF3E3 px-6 py-4 rounded-lg"
                >
                    Next
                </button>
            </li>
        </ul>
    );
};

export default Pagination;
