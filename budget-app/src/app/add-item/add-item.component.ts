import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.models';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  @Input() item:BudgetItem = new BudgetItem('',null)
  @Output() formSubmit:EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm ){
    this.formSubmit.emit(form.value)
  console.log(form)

  }

}
