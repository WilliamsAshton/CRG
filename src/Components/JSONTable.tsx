import React, { useState } from 'react';
import { Table, Pagination } from '@mantine/core';
import styles from '../CSS/JSONTable.module.css';

interface JSONTableProps {
  data: any[];
  onRowDoubleClick: (item: any) => void;
}

const JSONTable: React.FC<JSONTableProps> = ({ data, onRowDoubleClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const currentItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className={styles.tableContainer}>
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Episode</th>
            <th>Title</th>
            <th>Media</th>
            <th>Create Date</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.Id} onDoubleClick={() => onRowDoubleClick(item)}>
              <td>{item.Id}</td>
              <td>{item.Episode}</td>
              <td>{item.Title}</td>
              <td>{item.MediaName}</td>
              <td>{item.CreateDate}</td>
              <td>{item.Category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination total={totalPages} page={currentPage} onChange={paginate} />
    </div>
  );
};

export default JSONTable;