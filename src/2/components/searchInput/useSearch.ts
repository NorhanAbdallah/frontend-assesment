import { useState } from "react";


interface UseSearchReturn {
    searchTerm: string,
    handleSearch: (term: string) => void
}

export interface UseSearchProps {
    list: Array<Record<string, string>>;
    setList: (listItems: Array<Record<string, string>>) => void
    filterKey: string;
    initialList: Array<Record<string, string>>
}

export function useSearch(props: UseSearchProps): UseSearchReturn {
    const { list, filterKey, setList, initialList } = props;
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = (searchValue: string) => {
        setSearchTerm(searchValue);

        if (searchValue.length > 2) {

            const filteredList = list.filter((item: Record<string, string>) =>
                item[filterKey].toLowerCase().includes(searchValue.toLowerCase())
            );

            setList(filteredList);

        } else {
            setList([...initialList])
        }
    };

    return {
        searchTerm,
        handleSearch
    };
};
