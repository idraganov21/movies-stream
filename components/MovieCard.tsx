import { Link } from 'expo-router';
import { Card, Text, Image, YStack, Paragraph } from 'tamagui';

import { ResultItem } from '@/interfaces/apiresults';

type MovieCardProps = {
  movie: ResultItem;
};

// TODO: Add TV type
const MovieCard = ({ movie }: MovieCardProps) => (
  <Link
    href={`/(drawer)/home/${movie.media_type === 'movie' ? 'movie' : 'movie'}/${movie.id}`}
    asChild>
    <Card
      elevate
      width={150}
      height={280}
      scale={0.9}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.075 }}
      animation="bouncy">
      <Card.Header p={0}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
          alt={movie.title}
          style={{ width: 150, height: 200 }}
        />
      </Card.Header>
      <Card.Footer>
        <YStack>
          <Text fontSize={16} color="lightblue">
            {movie.title || movie.name}
          </Text>
          <Paragraph padding={5} color="lightblue" theme={'alt2'}>
            {new Date(movie.release_date! || movie.first_air_date!).getFullYear()}
          </Paragraph>
        </YStack>
      </Card.Footer>
    </Card>
  </Link>
);

export default MovieCard;
