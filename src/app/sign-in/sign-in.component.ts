import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  active_ : boolean = true ;

  isActive(val){
    return this.active_ = val ;
  }

}
