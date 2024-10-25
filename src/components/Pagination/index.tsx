import React from 'react';
import { PaginationContainer, PageButton, NavigationButton } from './styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const visiblePages = 5;
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <PageButton key={i} onClick={() => handlePageClick(i)} $active={i === currentPage}>
        {i}
      </PageButton>
    );
  }

  return (
    <PaginationContainer>
      <NavigationButton onClick={handlePrev} disabled={currentPage === 1}>
        &lt;
      </NavigationButton>
      {pages}
      <NavigationButton onClick={handleNext} disabled={currentPage === totalPages}>
        &gt;
      </NavigationButton>
    </PaginationContainer>
  );
};

export default Pagination;
