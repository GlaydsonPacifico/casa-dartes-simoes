import { HomeContainer, HomeImage } from '../styles/HomeStyles';
import { Header } from '../components/Header';
import { SectionTitle } from '../components/SectionTitle';
import { TypeWriter } from '../components/TypeWriter';
import { ArtistBoard } from '../components/ArtistsBoard';
import { Footer } from '../components/Footer';
import { ProductsBoard } from '../components/ProductsBoard';

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <main className="container">
          <SectionTitle
            title={<h1>Casa D&#39;Artes</h1>}
            description={
              <TypeWriter value="O atelier, localizado na cidade de Itapetim - PE, é um desejo antigo de Ana Simões, parte de uma família com extremo interesse artístico musical e por trabalhos manuais.
              Composta pelos dotes dos irmãos e pai da família Vieira Simões,  a Casa D'Artes brinda - nos com peças como bonecas de pano, objetos regionais em madeira e barro, esculturas e recordações da cidade.
              Arte que envolve num abraço caloroso quem quiser chegar!"/>
            }
          />

          <HomeImage>
            <img src='https://images-atelie.s3.sa-east-1.amazonaws.com/uploads/f688971c-23c3-47a8-95cb-8521cb44ee32' />
          </HomeImage>
          <ArtistBoard />
          <ProductsBoard />
        </main>
        <Footer />
      </HomeContainer>
    </>
  );
}
