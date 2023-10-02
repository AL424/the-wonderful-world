import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Root } from '../pages/Root/Root';
import { Main } from '../pages/Main/Main';
import { Singin } from '../pages/Singin/Singin';
import { Singup } from '../pages/Singup/Singup';
import { Catalog } from '../pages/Catalog/Catalog';
import { Profile } from '../pages/Profile/Profile';
import { Basket } from '../pages/Basket/Basket';
import { About } from '../pages/About/About';
import { Error } from '../pages/Error/Catalog';

export enum RouterPath {
  main = '',
  singin = '/singin',
  singup = '/singup',
  catalog = '/catalog',
  profile = '/profile',
  basket = '/basket',
  about = '/about'
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path={RouterPath.main} element={<Main />} />
      <Route path={RouterPath.singin} element={<Singin />} />
      <Route path={RouterPath.singup} element={<Singup />} />
      <Route path={RouterPath.catalog} element={<Catalog />} />
      <Route path={RouterPath.profile} element={<Profile />} />
      <Route path={RouterPath.basket} element={<Basket />} />
      <Route path={RouterPath.about} element={<About />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
);
