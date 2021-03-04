import { Component, OnInit } from '@angular/core';
import {StudentsService} from "@src/app/students.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students=[
    {
      "name": "Will Smith",
      "email": "email@email.com",
      "country": "USA"
    },
    {
      "name": "Jackline Joy",
      "email": "email@email.com",
      "country": "France"
    },
    {
      "name": "Alu Arjun",
      "email": "email@email.com",
      "country": "India"
    },
    {
      "name": "Kavitha Kumar",
      "email": "email@email.com",
      "country": "Germany"
    },
    {
      "name": "John Snow",
      "email": "email@email.com",
      "country": "United Kingdom"
    },
    {
      "name": "Priya Dutt",
      "email": "email@email.com",
      "country": "USA"
    }
  ]
  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {

  }

}
