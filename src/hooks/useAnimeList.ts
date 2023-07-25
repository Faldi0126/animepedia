import { useQuery, gql } from '@apollo/client';

const ANIME_LIST_QUERY = gql`
  query AnimeList($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          large
          medium
        }
        averageScore
        genres 


        # description
      }
    }
  }
`;

export function useAnimeList(page: number, perPage: number) {
  const { data, loading, error } = useQuery(ANIME_LIST_QUERY, {
    variables: { page, perPage }
  });

  return { data, loading, error };
}
