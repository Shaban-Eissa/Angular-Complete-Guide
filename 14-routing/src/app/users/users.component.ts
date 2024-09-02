import { Component, inject } from '@angular/core';

import { RouterLink } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  imports: [UserComponent, RouterLink],
})
export class UsersComponent {
  private usersService = inject(UsersService);
  users = this.usersService.users;
}
