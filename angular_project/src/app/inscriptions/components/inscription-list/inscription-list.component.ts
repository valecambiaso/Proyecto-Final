import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SessionService } from 'src/app/core/services/session.service';
import { Session } from 'src/app/models/session';
import { MatDialog } from '@angular/material/dialog';
import { InscriptionFormComponent } from '../inscription-form/inscription-form.component';
import { MatTableDataSource } from '@angular/material/table';
import { Inscription } from '../../../models/inscription';
import { InscriptionService } from '../../services/inscription.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-inscription-list',
  templateUrl: './inscription-list.component.html',
  styleUrls: ['./inscription-list.component.css']
})
export class InscriptionListComponent implements OnInit, OnDestroy{
  session$!: Observable<Session>;
  loading$!: Observable<Boolean>;
  columns: string[] = ['student','course','actions'];
  dataSource!: MatTableDataSource<Inscription>;
  dataSource$!: Observable<MatTableDataSource<Inscription>>;
  suscription!: Subscription;

  constructor(
    private session: SessionService,
    private dialog: MatDialog,
    private inscriptionService: InscriptionService
  ){
    
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Inscription>();
    this.suscription = this.inscriptionService.getAllInscriptonsObservable().subscribe((inscriptions: Inscription[]) => {
      this.dataSource.data = inscriptions;
    });
    this.dataSource$ = this.inscriptionService.getAllInscriptonsObservable().pipe(map((inscriptions) => 
      new MatTableDataSource<Inscription>(inscriptions)));
    this.session$ = this.session.getSession();
  }

  removeInscription(inscriptionId: string): void{
    this.inscriptionService.removeInscription(inscriptionId).subscribe((inscription: Inscription)=>{
      this.dataSource$ = this.inscriptionService.getAllInscriptonsObservable().pipe(map((inscriptions) => 
      new MatTableDataSource<Inscription>(inscriptions)));
    });
  }

  openModal(){
    this.dialog.open(InscriptionFormComponent,{}).afterClosed().subscribe(() =>{
      this.dataSource$ = this.inscriptionService.getAllInscriptonsObservable().pipe(map((inscriptions) => 
      new MatTableDataSource<Inscription>(inscriptions)));
    });
  }
}
