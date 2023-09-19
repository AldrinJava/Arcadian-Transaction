import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

  viewTransaction(id: number) {
    this.router.navigate(['/view', id]);
  }

  goToCreate() {
    this.router.navigate(['/create']);
  }
}
