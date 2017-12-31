import { Component, OnInit } from '@angular/core';
import { DataService } from './DataService';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})



export class MainViewComponent implements OnInit {
	currArr: any[];
	currArrSource: any[];
	constructor(private dataSer:DataService) {


	}

  ngOnInit() {
	  this.dataSer.getData()
	  .subscribe((arr)=>{
		  this.currArr = arr;
		  this.currArrSource = this.currArr;
	  }) 	
  }
  
  filterAll(filterInput) {
	  let str = filterInput.value;
	  if (!str.length){
		  this.currArr = this.currArrSource;
		  return;
	  }

	  var matched = this.currArr.filter((item)=>{
	  	if(item.name.indexOf(filterInput.value)>-1){
			return true;	
	  	}
		return false;	
	  });
	  this.currArr = matched;
  }


  Sort(sortParam) {
	  var sortBy;
	  if (sortParam === 24) {	
		  sortBy = 'percent_change_24h';
			this.currArr=  this.currArrSource.sort((a, b) => {
			  return Number(b.percent_change_24h) - Number(a.percent_change_24h);
		  });

	  }else if(sortParam ===7){
		  sortBy == 'percent_change_7d';
			this.currArr =  this.currArrSource.sort((a, b) => {
			  	return Number(b.percent_change_7d) - Number(a.percent_change_7d);
		  	});
	  }

  }


}
