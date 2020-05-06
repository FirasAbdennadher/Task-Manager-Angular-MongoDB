import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Project} from '../../core/models/project';
import {ProjectService} from '../../core/services/project/project.service';
@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  private project: Project;
  private managers = ['Alaeddine', 'Firas', 'Mouhamed'].map(this.createResponsible);
  private developers = ['amir', 'ahmed', 'asma'].map(this.createDeveloper);
  formGroup: FormGroup = this.formBuilder.group({
    title : ['', Validators.required],
    description : [''],
    manager : [''],
    developer : ['']
  });
  constructor(private projectService: ProjectService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  createResponsible(name) {
    return new User(name, name, name, name, name, 'manager');
  }

  createDeveloper(name) {
    return new User(name, name, name, name, name, 'developer');
  }
  public submit() {
    this.project = this.formGroup.value as Project;
    console.log(this.project);
    this.projectService.addProject(this.project).subscribe();
  }
}
