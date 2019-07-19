import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, ParamMap } from '@angular/router'

@Component({
  selector: 'app-departmentdetail',
  templateUrl: './departmentdetail.component.html',
  styleUrls: ['./departmentdetail.component.css']
})
export class DepartmentdetailComponent implements OnInit {

  public departmentId;
  constructor(private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    //this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params : ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.departmentId = id;  
    });
  }
  goPrevious()
  {
     let prevId = this.departmentId - 1;
     this.router.navigate(['/departments',prevId])
  }
  goNext()
  {
     let nextId = this.departmentId + 1;
     this.router.navigate(['/departments',nextId])
  }
  goBack()
  {
      let selectedId = this.departmentId?this.departmentId:null;
      //this.router.navigate(['/departments',{id : selectedId}])
      this.router.navigate(['../',{id:selectedId}],{relativeTo: this.route})
  }
  goOverview()
  {
      this.router.navigate(['overview'],{relativeTo : this.route});
  }
  goContact()
  {
      this.router.navigate(['contact'],{relativeTo : this.route});
  }
}
