import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Project} from '../../core/models/project';
import {ProjectService} from '../../core/services/project/project.service';
import {UserService} from '../../core/services/user/user.service';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  private project: Project;
  formGroup: FormGroup = this.formBuilder.group({
    title : ['', Validators.required],
    description : [''],
    manager : [''],
    developer : ['']
  });
  private usersManager: User[] = [];
  private usersDeveloper: User[] = [];

  constructor(private projectService: ProjectService,private userService:UserService, private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    console.log("pff");
    this.userService.getAllUsers().subscribe(data=>
    {
     this.usersManager=data.filter(data=>data.role==='PROJECT_MANAGER');
     this.usersDeveloper=data.filter(data=>data.role==='DEVELOPER');

    },err=>{
      console.log(err);
    })
  }
  /*createResponsible(name) {
    return new User(name, name, name, name, name, 'manager');
  }

  createDeveloper(name) {
    return new User(name, name, name, name, name, 'developer');
  }*/

  public submit(data) {
    this.projectService.addProject(data).subscribe(dt=>{
      console.log(dt);
      this.router.navigateByUrl('project-list');
    },err=>{
      console.log(err);
    });
  }
}
