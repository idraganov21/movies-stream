import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ImageBackground } from 'react-native';
import { Input, ScrollView, Spinner, YStack } from 'tamagui';

import MovieCard from '@/components/MovieCard';
import { getTrending } from '@/services/api';
import { Container, Title, Main, Subtitle } from '@/tamagui.config';

const Page = () => {
  const [searchString, setSearchString] = useState('');

  const trendingQuery = useQuery({
    queryKey: ['trending'],
    queryFn: getTrending,
  });

  const SearchQuery = useQuery({
    queryKey: ['trending'],
    queryFn: getTrending,
  });

  return (
    <Main>
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg',
        }}
        style={{ width: '100%', height: 200 }}>
        <Container>
          <YStack>
            <Title
              color="#fff"
              enterStyle={{
                opacity: 0,
                scale: 1.5,
                y: -10,
              }}
              animation="quick">
              Trending
            </Title>
            <Input
              placeholder="Search for a movie, tv show, person...."
              placeholderTextColor="#fff"
              borderWidth={1}
              size="$4"
              value={searchString}
              onChangeText={(text) => setSearchString(text)}
            />
          </YStack>
        </Container>
      </ImageBackground>
      <Subtitle
        p={10}
        enterStyle={{
          opacity: 0,
        }}
        animation="lazy">
        Trending
      </Subtitle>

      {(trendingQuery.isLoading || SearchQuery.isLoading) && (
        <Spinner py={14} size="large" color="$blue10" />
      )}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {trendingQuery.data?.results && (
          <>{trendingQuery.data?.results.map((item) => <MovieCard key={item.id} movie={item} />)}</>
        )}
      </ScrollView>
    </Main>
  );
};

export default Page;
