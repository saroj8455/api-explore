import { HttpClient } from '@angular/common/http';
import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { User } from '../../common';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';
import { UsersComponent } from '../../components/pages/users/users.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Button, UsersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent
  implements OnInit, AfterViewChecked, AfterContentInit
{
  private API = 'https://jsonplaceholder.typicode.com/users';

  private _http = inject(HttpClient);
  private _router = inject(Router);

  users: User[] = [];

  ngOnInit(): void {
    console.log('init');
  }
  ngAfterContentInit(): void {
    console.log('after content init');
    this.initUsers();
  }
  ngAfterViewChecked(): void {
    // console.log('view checked');
  }

  initUsers() {
    this._http.get<User[]>(this.API).subscribe((users) => {
      this.users = users;
    });
  }

  goToUserDetsils(selectedUser: User) {
    const { email } = selectedUser;
    this._router.navigate(['user-details', email]);
  }
}
