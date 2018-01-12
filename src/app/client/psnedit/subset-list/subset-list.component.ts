import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PsneditService } from '../psnedit.service';

@Component({
  selector: 'app-subset-list',
  templateUrl: './subset-list.component.html',
  styleUrls: ['./subset-list.component.css']
})
export class SubsetListComponent implements OnInit {

  // 子集列表
  setList = [{
    SetID: 'A01',
    SetName: '人员信息子集'
  }, {
    SetID: 'A19',
    SetName: '简历信息子集'
  }, {
    SetID: 'A79',
    SetName: '家庭成员及社会关系'
  }];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private request: PsneditService
  ) { }

  ngOnInit() {
  }

  handle(path: string): void {
    if (path === 'index') {
      this.router.navigate(['../'],  { relativeTo: this.route });
    }
  }

}
