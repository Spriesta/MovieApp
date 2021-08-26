import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliderr',
  templateUrl: './sliderr.component.html',
  styleUrls: ['./sliderr.component.css']
})
export class SliderrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imgCollection: Array<object> = [
    {
      image: 'https://i2.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2019/12/16G2wZAkmKqSGK3it2VPjco5oyn-scaled.jpg?fit=1707%2C2560&ssl=1',
      thumbImage : 'https://i2.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2019/12/16G2wZAkmKqSGK3it2VPjco5oyn-scaled.jpg?fit=1707%2C2560&ssl=1'

    },
    {
      image: 'https://hdfullizle.org/wp-content/uploads/2021/07/The-Tomorrow-War-izle.jpg',
      thumbImage: 'https://hdfullizle.org/wp-content/uploads/2021/07/The-Tomorrow-War-izle.jpg',


    },
     {
      image: 'https://lh3.googleusercontent.com/-K1gFtGQSNZQ/X_sc25EwuRI/AAAAAAAACj4/ynP2o-7BcmMvBG5z5ZqIi1KdWWY57FOGgCLcBGAsYHQ/w680/image.png',
      thumbImage: 'https://lh3.googleusercontent.com/-K1gFtGQSNZQ/X_sc25EwuRI/AAAAAAAACj4/ynP2o-7BcmMvBG5z5ZqIi1KdWWY57FOGgCLcBGAsYHQ/w680/image.png',


    },
     {
      image: 'https://turkcealtyazi.org/images/poster/0190641.jpg',
      thumbImage: 'https://turkcealtyazi.org/images/poster/0190641.jpg',


    },
    {
      image: 'https://i.pinimg.com/474x/36/0a/b2/360ab2b56b69433de4ddbafbcc8f0dbb--underworld-movies-the-underworld.jpg'  ,
      thumbImage: 'https://i.pinimg.com/474x/36/0a/b2/360ab2b56b69433de4ddbafbcc8f0dbb--underworld-movies-the-underworld.jpg' ,
    },

    {
      image: 'https://s1.filmmodu.org/uploads/movie/poster/1992/thumb_6OA0I8hhW9zftWoCYxJAzXW9UIN.jpg' ,
      thumbImage: 'https://s1.filmmodu.org/uploads/movie/poster/1992/thumb_6OA0I8hhW9zftWoCYxJAzXW9UIN.jpg' ,
    }





];



}
