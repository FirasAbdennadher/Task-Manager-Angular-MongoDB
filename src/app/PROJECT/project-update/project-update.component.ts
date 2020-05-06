import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Project} from '../../core/models/project';
import {ProjectService} from '../../core/services/project/project.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {
  private project: Project = new Project();
  formGroup: FormGroup = this.formBuilder.group({
    title : ['', Validators.required],
    description : [''],
    manager : [''],
    developer : ['']
  });
  private usersManager: User;
  private usersDeveloper: User[] = [];

  constructor(private projectService: ProjectService, private formBuilder: FormBuilder,public activateRoute: ActivatedRoute, private router: Router) { }
  current;

  ngOnInit(): void {
    this.projectService.getProject(atob(this.activateRoute.snapshot.params.idProject)).subscribe(
        dt=>{
          this.project=dt;
          this.current=dt;
        this.projectService.getDeveloperOfManagerProject(dt._links.manager.href).subscribe(usMan=>{
             this.usersManager=usMan;
             console.log(usMan);
             //console.log(usMan);
           });

          this.projectService.getDeveloperOfManagerProject(dt._links.developers.href).subscribe(usPro=>{
            this.usersDeveloper=usPro._embedded.users;
           // console.log(usPro._embedded.users);
          },err=>{console.log(err);})
        }
    )
  }

  public updateProject(data){
    console.log("----------------");
    console.log(this.current);
    console.log("----------------");

    console.log(this.current._links.self.href);
    this.projectService.ModifProject(this.current._links.self.href,data).subscribe(pro=>{
      console.log(pro);
      this.router.navigateByUrl('project-list');

    },err=>{
      console.log(err);
    })
  }
}
