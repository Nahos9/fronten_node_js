import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'myfrontend';
  formSing!:FormGroup
  fb = inject(FormBuilder)
  authService = inject(AuthService)

  ngOnInit() {
   this.formSing = this.fb.group({
    email : ["",Validators.required],
    password : ["",Validators.required],
    role_id:["",[Validators.required]]
   })
  }

  signup(){
    //console.log(this.formSing.value.role_id)
    //const data = {...this.formSing.value}
    this.authService.signup(this.formSing.value)
    .subscribe({
      next : data => {
        console.log(data)
      },
      error:error=>{
        console.log(error)
      }
    })
  }
}
