import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';
import { listUsersController } from './useCases/ListUsers';
import { createProductController } from './useCases/CreateProduct';
import { createArtistController } from './useCases/CreateArtist';
import { listProductsController } from './useCases/ListProduct';
import { listArtistsController } from './useCases/ListArtist';
import { upload } from './middlewares/MulterConfig';
import { uploadImageController } from './useCases/UploadImage';
import { authenticateUserController } from './useCases/Authenticate';

import AuthMiddleware from './middlewares/AuthMiddleware';
import UserTypeMiddleware from './middlewares/UserTypeMiddleware';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Rota Inicial'});
});

routes.post('/api/login', (request, response) => {
  return authenticateUserController.handle(request, response);
});
routes.post('/api/users', (request, response) => {
  return createUserController.handle(request, response);
});
routes.get('/api/users', (request, response) => {
  return listUsersController.handle(request, response);
});

routes.post('/api/products', AuthMiddleware, UserTypeMiddleware, upload.single('image'), (request, response) => {
  return createProductController.handle(request, response);
});
routes.get('/api/products', (request, response) => {
  return listProductsController.handle(request, response);
});

routes.post('/api/artists', AuthMiddleware, UserTypeMiddleware,  (request, response) => {
  return createArtistController.handle(request, response);
});
routes.get('/api/artists', (request, response) => {
  return listArtistsController.handle(request, response);
});

routes.post('/api/uploadImages', AuthMiddleware, UserTypeMiddleware, upload.single('image'), (request, response) => {
  uploadImageController.handle(request, response);
});

export { routes };
