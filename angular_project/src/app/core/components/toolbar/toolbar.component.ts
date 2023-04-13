import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../../../models/session';
import { SessionService } from '../../services/session.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit{
  session$!: Observable<Session>;

  constructor(
    private router: Router,
    private sessionService: SessionService
  ){}

  ngOnInit(): void {
    this.session$ = this.sessionService.getSession();
  }
}
