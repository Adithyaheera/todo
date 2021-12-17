import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
name="todolist"

todoForm=this.fb.group({
  name:['',[Validators.required,Validators.pattern('[A-Za-z0-9]*')]]
}) 



list:any[]=[]




  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  todoClick(item:any){
this.list.push({id:this.list.length,name:item})

console.log(this.list);
   
    
  }


  removeTask(id:any){
    this.list=this.list.filter(item=>item.id!==id)
  
    
  }
  




}
