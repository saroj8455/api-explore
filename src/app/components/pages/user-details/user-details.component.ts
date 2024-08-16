import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [Button],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  email = '';

  private activatedRoute = inject(ActivatedRoute);
  private _router = inject(Router);
  private location = inject(Location);

  ngOnInit(): void {
    console.log('user details');
    this.activatedRoute.params.subscribe((param) => {
      this.email = param['email'];
    });
  }

  backTo() {
    console.log('back fired');
    // this._router.navigate(['..']);
    this.location.back();
  }
}
