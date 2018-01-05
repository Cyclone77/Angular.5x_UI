import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-module-manage',
  templateUrl: './module-manage.component.html',
  styleUrls: ['./module-manage.component.css']
})
export class ModuleManageComponent implements OnInit {

  url = 'http://192.168.0.50:8080/api/Core/Module_Select';
  myHttpHead = Object.assign({
    'Content-Type': 'application/json'
  }, {
    Authorization: 'Bearer ' + sessionStorage.getItem('Authorization'),
    SessionID: sessionStorage.getItem('SessionID')
  });

  tableData: any[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get(this.url, this.myHttpHead).subscribe(json => {
      const arr = json['ListData'];
      this.tableData = <any[]>arr;
    });
  }

  addModule() {
    this.router.navigate(['add'],  { relativeTo: this.route });
  }
}
