import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  user!: User;

  constructor(
    private activatedRoute: ActivatedRoute
  )
  {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters) => this.user = {
      username: parameters.get('username') || '',
      password: parameters.get('password') || '',
      isAdmin: parameters.get('isAdmin') === 'true'
    })
  }
}
