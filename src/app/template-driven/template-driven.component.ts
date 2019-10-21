import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: []
})
export class TemplateDrivenComponent {

  constructor() { }

  onSubmit(form: NgForm) {
    console.log(form.value)
  }
}
