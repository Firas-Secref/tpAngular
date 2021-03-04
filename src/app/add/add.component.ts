import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StudentsService} from "@src/app/students.service";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  add?: FormGroup
  constructor(private fb: FormBuilder, private studentService: StudentsService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.add = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ["", [Validators.required, Validators.email]],
      country: ["", [Validators.required]]
    })
  }

  onAdd() {
    this.studentService.addStudent(this.add?.value).subscribe(data =>{
      console.log("data")
      alert("added successfully");
    })
  }
}
