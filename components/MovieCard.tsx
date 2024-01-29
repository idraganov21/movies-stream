import { Link } from 'expo-router';
import { Card, Text, Image, YStack } from 'tamagui';

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
      height={260}
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
        </YStack>
      </Card.Footer>
    </Card>
  </Link>
);

export default MovieCard;
