import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';
import { CarouselItemModel } from 'src/app/models/carousel-item.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  carouselData = [
    { slug: 'slug-1', text: 'Thải độc và Thanh lọc Thân Tâm', imageSrc: '../../assets/images/image3.jpg' },
    { slug: 'slug-2', text: 'Thải độc và Thanh lọc Thân Tâm', imageSrc: '../../assets/images/image3.jpg' },
    { slug: 'slug-3', text: 'Thải độc và Thanh lọc Thân Tâm', imageSrc: '../../assets/images/image3.jpg' },
  ] as CarouselItemModel[];

  cardData = [{
    title: 'The internet\'s Own boy',
    author: 'Thầy Minh Cảnh',
    publishDate: '21/08/2022',
    type: 'Tin tức',
    slug: 'tin-tuc-1'
  },
  {
    title: 'The internet\'s Own boy',
    author: 'Thầy Minh Cảnh',
    publishDate: '21/08/2022',
    type: 'Tin tức',
    slug: 'tin-tuc-2'
  },
  {
    title: 'The internet\'s Own boy',
    author: 'Thầy Minh Cảnh',
    publishDate: '21/08/2022',
    type: 'Tin tức',
    slug: 'tin-tuc-3'
  }] as CardModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
