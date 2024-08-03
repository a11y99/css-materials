import React, { useState } from 'react';

interface TableProps {
    columns: { key: string; label: string }[];
    data: { [key: string]: any }[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);

    const sortedData = React.useMemo(() => {
        let sortableData = [...data];
        if (sortConfig !== null) {
        sortableData.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        }
        return sortableData;
    }, [data, sortConfig]);

    const requestSort = (key: string) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <table className="custom-table">
        <thead>
            <tr>
            {columns.map((column) => (
                <th key={column.key} onClick={() => requestSort(column.key)}>
                {column.label}
                {sortConfig?.key === column.key ? (sortConfig.direction === 'ascending' ? ' ↑' : ' ↓') : null}
                </th>
            ))}
            </tr>
        </thead>
        <tbody>
            {sortedData.map((item, index) => (
            <tr key={index}>
                {columns.map((column) => (
                <td key={column.key}>{item[column.key]}</td>
                ))}
            </tr>
            ))}
        </tbody>
        </table>
    );
};

export default Table;