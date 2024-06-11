import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assign5_components';
  search:string='';

  places=[  
    {
      'image':'https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg',
      'name':'Tour: 2-3 days',
      'price':3000,
       'availble':false
    },
    {
      'image':'https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Solang-Valley.jpg',
      'name':'Tour: 3-4 days',
      'price':5000,
       'availble':true
    },
    {
      'image':'https://media.istockphoto.com/id/472909442/photo/backwaters-of-kerala.webp?b=1&s=170667a&w=0&k=20&c=kTWXd_EJpENqaBfo6eMiLvbNatudIwi2wEeJHu4ipLM=',
      'name':'Tour: 5-6 days',
      'price':8000,
       'availble':false
    },
    {
      'image':'https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Khadakwasla-Lake.jpg',
      'name':'Tour: 1-2 days',
      'price':2000,
       'availble':true
    },

  ]
}
