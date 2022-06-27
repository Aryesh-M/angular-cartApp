import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public menItems = [
    {
      src: '../../assets/images/p1.jpg',
      alt: 'Men Contrast Trim Polo Shirt',
      desc: 'Men Contrast Trim Polo Shirt',
      price : '$11.99'
    },
    {
      src: '../../assets/images/p2.jpg',
      alt: 'Button Through Solid Shirt',
      desc: 'Button Through Solid Shirt',
      price : '$3.49'
    },
    {
      src: '../../assets/images/p3.jpg',
      alt: 'Drop Shoulder Solid Shirt',
      desc: 'Drop Shoulder Solid Shirt',
      price : '$13.99'
    },
    {
      src: '../../assets/images/p4.jpg',
      alt: 'Pocket Patched Mock Neck Shirt',
      desc: 'Pocket Patched Mock Neck Shirt',
      price : '$15.99'
    },
    {
      src: '../../assets/images/m1.jpg',
      alt: 'Space Dye Straight Leg Pants',
      desc: 'Space Dye Straight Leg Pants',
      price : '$11.69'
    },
    {
      src: '../../assets/images/p6.jpg',
      alt: 'Pocket Detail T-shirt',
      desc: 'Pocket Detail T-shirt',
      price : '$14.49'
    }
  ];
  public womenItems = [
    {
      src: '../../assets/images/ss.jpg',
      alt: 'Sleeve',
      desc: 'Pearl Sheer Mesh Sleeve Top',
      price : '$4.99s'
    },
    {
      src: '../../assets/images/ss6.jpg',
      alt: 'Peplum Hem Blouse',
      desc: 'Peplum Hem Blouse',
      price : '$19.49'
    },
    {
      src: '../../assets/images/ss3.jpg',
      alt: 'Dress',
      desc: 'Dress',
      price : '$9.99'
    },
    {
      src: '../../assets/images/ss5.jpg',
      alt: 'Appliques',
      desc: 'Cold Shoulder Appliques Tee',
      price : '$3.59'
    },
    {
      src: '../../assets/images/ss7.jpg',
      alt: 'Shirred Bodice Smock Top',
      desc: 'Shirred Bodice Smock Top',
      price : '$24.48'
    },
    {
      src: '../../assets/images/ss10.jpg',
      alt: 'High Waist Split Back Patent Skirt',
      desc: 'High Waist Split Back Patent Skirt',
      price : '$3.99'
    },
    {
      src: '../../assets/images/ss.jpg',
      alt: 'Sleeve',
      desc: 'Pearl Sheer Mesh Sleeve Top',
      price : '$4.99s'
    }

  ];
  ngOnInit(): void {
  }
}
