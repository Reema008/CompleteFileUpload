import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router'
import * as _ from 'underscore';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
addForm;
n:number=1;
Arr:any=[];
items: FormArray;
  constructor(private form: FormBuilder,private success:Router,private backto:Router) { }

  ngOnInit() {
    this.addForm = this.form.group({
      items: this.form.array([ this.add() ])
   });
   //console.log(this.addForm.get('items').controls);
   //console.log(this.addForm.controls.items);
  }

add(): FormGroup {
  return this.form.group({
    name: ['',[Validators.required] ],
    mail: ['',[Validators.required,Validators.email]],
    contact: ['',[Validators.required,Validators.pattern("[6-9][0-9]{9}")]]
  });
}

addItem(): any {
  this.items = this.addForm.get('items') as FormArray;
  this.items.push(this.add());
  console.log(this.addForm.controls.items.controls);
}

delete(n){
  this.items = this.addForm.get('items') as FormArray;
  this.items.removeAt(n);
}
}
