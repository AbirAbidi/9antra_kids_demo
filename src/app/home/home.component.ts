import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
courses = [
  {
    'name': 'Python',
    'duration': '6 months'
    },
{
  'name': 'C++',
  'duration': '6 months'
  },
{
'name' : 'Java',
'duration': '6 months'
},
{
'name' : 'JS',
'duration': '6 months'
},

]
images = [
  "assets/snakes.png",
  "assets/c-.png",
  "assets/java.png",
  "assets/js.png"
]

}
