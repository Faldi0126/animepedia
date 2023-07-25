import React from 'react';
import { useAnimeList } from '../hooks/useAnimeList';
import { usePage } from '../contexts/PageContext';
import styled from '@emotion/styled';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  margin: 10px;
  border: none;
  background-color: #333;
  color: white;
  font-size: 16px;
`;

export function Pagination() {
  const { page, setPage } = usePage();
  const { data, loading, error } = useAnimeList(page, 10);

  if (loading || error) return null;

  const { currentPage, lastPage, hasNextPage } = data.Page.pageInfo;

  return (
    <ButtonContainer>
      <Button
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
      >
        Prev
      </Button>
      <Button
        disabled={!hasNextPage}
        onClick={() => setPage(currentPage + 1)}
      >
        Next
      </Button>
    </ButtonContainer>
  );
}
