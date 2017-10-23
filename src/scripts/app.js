import request from 'superagent'
import {Router} from 'director/build/director'
import renderHome from './renderhome'





const routes = {
  '/': renderHome
  // '/about': showCvView,
  // '/friends': showFriendsView,
  // '/friends/:nationality': showFriendsByNationality
};

const router = Router(routes);
router.init('/');
