import { Component } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  filterOptions: IFilterOptions =
  {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  }

  // dateSelected(date: Date)
  // {
  //   console.log(date);
  //   console.log(date instanceof Date);
  //   console.log(date.getMonth());
  // }

  statusList = 
  [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false },
  ]

  onFilter()
  {
    console.log(this.filterOptions);
  }
}
