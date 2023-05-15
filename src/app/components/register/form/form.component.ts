import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators ,FormBuilder} from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';
import { Country } from 'src/app/interfaces/Country';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  countries: Country[] = [];
  registerStatus: boolean= false;
  user:FormGroup;

constructor(private countryService:CountryService,private fb:FormBuilder){}

  ngOnInit():void{
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    })

    this.user = this.fb.group({
      nickname: ['',[Validators.required,Validators.minLength(2), Validators.maxLength(24)]],
      email: ['',[Validators.required, Validators.email]],
      firstName: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(24)]],
      lastName: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(24)]],
      city: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(50)]],
      country: ['',[Validators.required]],
      years: ['',[Validators.required]]
    });
  }

  onSubmit(form:FormGroup):void{
    if(form.valid){
      this.registerStatus = true;
    }
    
  }
  
}
