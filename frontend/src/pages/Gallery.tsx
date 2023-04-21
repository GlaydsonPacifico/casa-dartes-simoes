import { GalleryContainer } from '../styles/GalleryStyles';
import { Header } from '../components/Header';
import { GalleryItem } from '../components/GalleryItem';

export function Gallery() {
  return (
    <>
      <Header />
      <GalleryContainer>
        <main className="container">
          <GalleryItem
            id='1'
            title='Produto 1'
            image='https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
          />
          <GalleryItem
            id='2'
            title='Produto 2'
            image='https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
          />
          <GalleryItem
            id='3'
            title='Produto 3'
            image='https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
          />
          <GalleryItem
            id='4'
            title='Produto 4'
            image='https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
          />
          <GalleryItem
            id='5'
            title='Produto 5'
            image='https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
          />
          <GalleryItem
            id='6'
            title='Produto 6'
            image='https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
          />
          <GalleryItem
            id='7'
            title='Produto 7'
            image='https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
          />
          <GalleryItem
            id='8'
            title='Produto 8'
            image='https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
          />
        </main>
      </GalleryContainer>
    </>
  );
}
