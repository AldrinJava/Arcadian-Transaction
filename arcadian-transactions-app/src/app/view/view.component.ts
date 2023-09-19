import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'] // Specify the SCSS file here
})

export class ViewComponent implements OnInit {

  transaction: Transaction | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.apiService.getTransaction(id).subscribe(data => {
      this.transaction = data;
    });
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
