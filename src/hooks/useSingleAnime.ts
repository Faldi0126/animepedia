import { useQuery, gql } from '@apollo/client';

const ANIME_QUERY = gql`
  query Anime($id: Int) {
    Media(id: $id, type: ANIME) {
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
      bannerImage
      averageScore
      genres 
      episodes
      description
    }
  }
`;

export function useAnime(id: number) {
  const { data, loading, error } = useQuery(ANIME_QUERY, {
    variables: { id }
  });

  return { data, loading, error };
}
