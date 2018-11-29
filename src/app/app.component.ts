import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-blog';
  postList = [
    {
      title: "Post 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel consectetur ex. Quisque eu ipsum nec tortor posuere accumsan. Nulla est massa, scelerisque eu ipsum non, scelerisque gravida nulla. Pellentesque eros dui, interdum non nisl nec, fringilla euismod lectus. Aliquam erat volutpat. Suspendisse enim risus, suscipit vel efficitur eu, suscipit eu ex.",
      loveIts: 1,
      created_at: new Date('10/11/2018')
    },
    {
      title: "Post 2",
      content: "In posuere lacus eget magna volutpat consectetur. Aliquam pellentesque condimentum sem eu interdum. In tempor quam euismod urna ornare, eget ultrices nibh porttitor. Pellentesque commodo sem turpis, vel viverra urna tincidunt non. In placerat ipsum in eros gravida sagittis. Mauris in pretium justo.",
      loveIts: 0,
      created_at: new Date('10/12/2018')
    },
    {
      title: "Post 3",
      content: "Donec sodales, ligula nec ullamcorper sollicitudin, augue lacus dignissim sem, semper molestie nunc tellus vel metus. Quisque blandit, erat ut vestibulum euismod, libero odio condimentum lorem, id malesuada enim odio at nulla. Vestibulum pellentesque suscipit nibh at porttitor. Cras efficitur felis ut felis lacinia, quis dictum arcu egestas.",
      loveIts: -1,
      created_at: new Date('10/13/2018')
    }
  ];
}
