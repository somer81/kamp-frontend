import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  dataLoaded = false;
  categories : Category[]=[]

  currentCategory : Category;

  categoryResponseModel:ListResponseModel<Category> ={
    data : this.categories,
    message : "", 
    success : true
  };
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((response)=>{
       this.categories = response.data;
       this.dataLoaded = true;
    })
   }

   setCurrentCategory(category:Category)
   {
     this.currentCategory = category;
   }

   getCurrentCategoryClass(category:Category){
     if(category == this.currentCategory){
       return "list-group-item active";
     }
     else {
        return "list-group-item ";
     }
     
   }

}
