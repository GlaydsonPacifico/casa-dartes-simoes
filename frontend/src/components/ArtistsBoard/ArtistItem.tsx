import { ArtistItemContainer } from './styles';

interface ArtistProps {
  name: string;
  specialty: string;
  description: string;
}

export function ArtistItem({ name, specialty, description }: ArtistProps) {
  return (
    <ArtistItemContainer>
      <div>
        <h1>{name}</h1>
        <h2>{specialty}</h2>
        <p>{description}</p>
      </div>
    </ArtistItemContainer>
  );
}
