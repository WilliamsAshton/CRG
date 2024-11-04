import React from 'react';
import { Input } from '@mantine/core';
import styles from '../CSS/SearchBar.module.css';

interface SearchBarProps {
  searchTerm: string;
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => (
  <div className={styles.searchBar}>
    <Input
      placeholder="Search..."
      value={searchTerm}
      onChange={(event) => onSearch(event.currentTarget.value.toLowerCase())}
    />
  </div>
);

export default SearchBar;