import request from 'superagent'
import {Router} from 'director/build/director'
import renderHome from './renderhome'
import showByLang from './showbylang'


const routes = {
  '/': renderHome,
  '/lang/:lang': showByLang
};

const router = Router(routes);
router.init('/');
