import {Component, OnInit} from '@angular/core';
import {Task} from '../../../core/models/task';
import {FormControl, Validators} from '@angular/forms';
@Component({
    selector: 'app-task-add',
    templateUrl: './task-add.component.html',
    styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
    private task: Task = new Task();
    fileData: File = null;
    filename: String[] = [];
    private hour: Number = 0;
    private day: Number = 0;
    private minute: Number = 0;
    rateControl = new FormControl('', [Validators.max(100), Validators.min(0)]);
    constructor() {
    }

    fileProgress(fileInput: any) {
        this.fileData = <File>fileInput.target.files[0];
    }

    onAdd() {
        this.filename.push(this.fileData.name);
        console.log(this.filename);
    }
    onDelete(name: String) {
        const index: number = this.filename.indexOf(name);
        if (index !== -1) {
            this.filename.splice(index, 1);
        }
    }



    ngOnInit(): void {
    }

    submit() {

    }
}
