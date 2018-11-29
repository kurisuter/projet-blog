import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() titre : string;
  @Input() post : string;
  @Input() loveIts : number;
  @Input() created_at : date;
  constructor() { }

  ngOnInit() {
  }

  addlove(){
    this.loveIts ++;
  }
  supplove(){
    this.loveIts --;
  }

}
