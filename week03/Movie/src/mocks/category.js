import NowPlaying from '../assets/img/balloons.jpg'; // 경로를 알맞게 수정
import Popular from '../assets/img/clouds.jpg';
import TopRated from '../assets/img/mountains.jpg';
import Upcoming from '../assets/img/sunset.jpg';


export const SelImage = {
    "results": [
      {
        "id":1,
        "name":"현재 상영 중인",
        "image": NowPlaying,
        "link" : "now-playing"
      },
      {
        "id":2,
        "name":"인기있는",
        "image":Popular,
        "link" : "popular"
      },
      {
        "id":3,
        "name":"높은 인기를 받은",
        "image":TopRated,
        "link" : "top-rated"
      },
      {
        "id":4,
        "name":"개봉 예정 중인",
        "image":Upcoming,
        "link" : "up-coming"
      }
    ]
}