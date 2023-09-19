import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  transaction: Transaction = {
    id: 0,
    transactionName: '',
    date: new Date(),
    cost: 0
  };

  constructor(private apiService: ApiService, private router: Router) { }

  createTransaction() {
    this.apiService.createTransaction(this.transaction).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
