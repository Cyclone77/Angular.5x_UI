import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-child-set',
  templateUrl: './edit-child-set.component.html',
  styleUrls: ['./edit-child-set.component.css']
})
export class EditChildSetComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  handle(path: string): void {
    switch (path) {
      case 'index':
        this.router.navigate(['../../'],  { relativeTo: this.route });
        break;
      case 'subset-list':
        this.router.navigate(['../'],  { relativeTo: this.route });
        break;
    }
  }
}
