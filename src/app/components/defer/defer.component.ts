import { Component } from '@angular/core';
import {CommentsComponent} from "../comments/comments.component";

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [
    CommentsComponent
  ],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.css'
})
export class DeferComponent {

}
