import { useState } from 'react';
import Data from './MOCK_DATA.json';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PaginationsProps, TableProps } from './type';

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #ccc;
  margin: 1rem 0;
  border-spacing: 0;

  th,
  td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tbody tr:nth-child(odd) {
    background-color: #f2f2f2;
  }

  tbody tr:nth-child(even) {
    background-color: #fff;
  }
`;

const PaginationContainer = styled.div<PaginationsProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const PageButton = styled(Link)`
  display: inline-block;
  margin: 0.2rem;
  padding: 0.2rem 0.5rem;
  background-color: #ff0088;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
  &:hover {
    background-color: #0056b3;
  }
`;

function Table() {
  const [currentPg, setcurrentPg] = useState(1);
  const dataPerPage = 10;
  const pagesLastData = currentPg * dataPerPage;
  const pagesFirstData = pagesLastData - dataPerPage;
  const data = Data.slice(pagesFirstData, pagesLastData);
  const nPage = Math.ceil(Data.length / dataPerPage);

  const maxPageLinks = 5;

  // Calculate the range of page links to display
  let startPage = Math.max(1, currentPg - maxPageLinks);
  let endPage = Math.min(nPage, startPage + maxPageLinks - 1);
  if (endPage - startPage + 1 < maxPageLinks) {
    startPage = Math.max(1, endPage - maxPageLinks + 1);
  }

  // Generate the array of page links based on the range
  const pagesNumber = [...Array(endPage - startPage + 1).keys()].map(
    i => startPage + i,
  );

  function prePage() {
    if (currentPg !== 1) {
      setcurrentPg(currentPg - 1);
    }
  }

  function changePage(id: number) {
    setcurrentPg(id);
  }

  function nextPage() {
    if (currentPg !== nPage) {
      setcurrentPg(currentPg + 1);
    }
  }

  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <PaginationContainer>
        <PageButton to="#" onClick={prePage}>
          Prev
        </PageButton>
        {pagesNumber.map((n, i) => (
          <PageButton
            key={i}
            className={`${currentPg === n ? 'active' : ''}`}
            to="#"
            onClick={() => changePage(n)}
          >
            {n}
          </PageButton>
        ))}
        <PageButton to="#" onClick={nextPage}>
          Next
        </PageButton>
      </PaginationContainer>
    </div>
  );
}

export default Table;
