import { useEffect, useState } from 'react';
import api from '../../utils/api';

import { SectionTitle } from '../SectionTitle';
import { ArtistItem } from './ArtistItem';
import { Container } from './styles';

interface Artist {
  id: string;
  name: string;
  specialty: string;
  description: string;
}

export function ArtistBoard() {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    api.get('api/artists')
      .then(response => {
        setArtists(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <SectionTitle
        title='Alguns de Nossos Artesãos'
      />
      <section>
        {artists.map(artist => (
          <ArtistItem
            key={artist.id}
            name={artist.name}
            specialty={artist.specialty}
            description={artist.description}
          />
        ))}
      </section>
    </Container>
  );
}
