import {Component, inject} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-inject',
  standalone: true,
  imports: [],
  templateUrl: './inject.component.html',
  styleUrl: './inject.component.css'
})
export class InjectComponent {
  // using classic constructor based Dependency Injection:
  constructor(public userService: UserService) {
  }

  // Using inject based Dependency Injection.
  // This works - executed in construction phase of component
  // userService = inject(UserService); // Note: 'public' by default.

  // NOTE: We CAN NOT inject services at a later point in time:
  // ngOnInit(){
  //   // won't work, this function is executed later
  //   inject(SomeService).someValue
  // }
  // someMethod(){
  //   // won't work, this function is executed later
  //   inject(SomeService).someValue
  // }
}
