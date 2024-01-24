import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
  signUpForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(){
    this.formDetails();
  }
  formDetails(){
    this.signUpForm = this.formBuilder.group({
      fullName:['', [Validators.required, this.whiteSpaceRemoveValidator]],
      MobileNo:['', [Validators.maxLength (10), Validators.pattern("^[0-9]*$")]],
      gender:[],
      pancard:[],
      Password:[],
      confirmPassword:[],  
      tc:['', [Validators.requiredTrue]]
    })
  }
  visible = false;
  visiblepassword(){
    this.visible = !this.visible;
  }
  visibleConfirm = false;
  visibleConfirmpassword(){
    this.visibleConfirm = !this.visibleConfirm;}
    matched = false;
    passMatch(){
      if(this.signUpForm.value.Password == this.signUpForm.value.confirmPassword){
        this.matched = false;
      }
      else{
        this.matched = true;
      }
    }
    submit(){
      console.log('this.signUpForm.value',this.signUpForm.value);
    }
    //'/\s{1,}/g'
    whiteSpaceRemoveValidator(inputboxvalue:any){
      console.log('inp val',inputboxvalue);
      let spaceinclude = inputboxvalue?.value?.includes('  ')
      return spaceinclude ? {'whiteSpaceError':true} :null
    }
  }
