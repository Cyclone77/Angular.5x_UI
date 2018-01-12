import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subset-list',
  templateUrl: './subset-list.component.html',
  styleUrls: ['./subset-list.component.css']
})
export class SubsetListComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  handle(path: string): void {
    if (path === 'index') {
      this.router.navigate(['../'],  { relativeTo: this.route });
    }
  }

}
