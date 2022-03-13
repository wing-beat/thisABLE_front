import React from 'react'
import { Pagination } from 'react-bootstrap'

function PaginationView(page) {
  let items = [];
  for (let number = 1; number <= page.totalPage; number++) {
    items.push(
      <Pagination.Item key={number} active={number === page.currentPage}>
        {number}
      </Pagination.Item>,
    );
  }
  
  return (
    <Pagination>{items}</Pagination>
  )
}

export default PaginationView