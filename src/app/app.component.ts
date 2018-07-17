import { Component, OnInit } from '@angular/core';
import { PeopleData } from './data.service';
import { PostService } from './posts.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<div>
  <h1>{{title | uppercase}}</h1>
  <input type="text" name="txtTitle" [(ngModel)] = "title"/>
  <button (click)="changeTitle()" type="button">Change Title</button>
  <hr/>
  <quote [author]="authorName" (invalidAuthor)="handleEvent()"></quote>
  <hr/>
  <div *ngFor="let postsService of objPosts">
    <span>{{postsService.id}} - {{postsService.title}}</span>
  </div>
  <hr/>
  <div *ngFor="let person of objPeople">
    <span>{{person.name}} - {{person.yearBorn}}</span>
  </div>
  <hr/>
  <p>{{1234 | currency: 'INR' : 'symbol'}}</p>
  <p>{{today | date: 'medium'}}</p>
  <p>{{today | date: 'shortDate'}}</p>
  <p>{{today | date: 'longDate'}}</p>
  <p>{{today | date: 'shortTime'}}</p>
  <p>{{today | date: 'EEEE, MMMM d, yyyy' | uppercase}}</p>
  <p>{{myNumber | number: '3.1-2'}}</p>
  <p>{{3.14159 | number : '1.1-4'}}</p>
  <p>{{37 | Convert : 'CtoF'}}</p>
  <p>{{98.6 | Convert : 'FtoC'}}</p>
  <hr/>
  <img src="{{imgUrl}}" bind-height="imgHeight" [width]="imgWidth"><br/>
  <hr/>
  <div *ngIf="comments.length>0; else nocomments">
    <p>Comments here ...</p>
  </div>
  <ng-template #nocomments>
    <p>No comments yet!</p>
  </ng-template>
  <hr/>
  <form #form="ngForm">
    <input type='text' ngModel name='txtFname' required myDirective /><br/><br/>
    <input type='text' ngModel name='txtLname' required myDirective /><br/><br/>
    <button type="button" [disabled]="!form.valid" (click)="log(form)">Submit</button>
    <pre>
      {{form.value | json}}
    </pre>
  </form>
  <hr/>
  <br/><br/>
  <form>
    <select [(ngModel)]="country" name="selCountry">
      <option value="IN">India</option>
      <option value="GB">UK</option>
      <option value="MY">Malaysia</option>
    </select>
    <div [ngSwitch] = "country">
      <h3 *ngSwitchCase="'IN'">Indian Rupees</h3>
      <h3 *ngSwitchCase="'GB'">Pound Sterling</h3>
      <h3 *ngSwitchDefault>Malaysian Ringitt</h3>
    </div>
  </form>
  <hr/>
  <border>
    &copy; Hyland Software Inc.
  </border>
  </div>`,
  providers: [PeopleData],
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: false
})
export class AppComponent implements OnInit {

  objPeople: Object;
  objPosts: Object;
  country: string = "IN";
  comments: string[] = ['yes', 'no'];
  myNumber = 176.775;
  title = 'app';
  today = new Date();
  authorName = 'Ben';
  imgUrl: string = "../assets/my_image.jpg";
  imgHeight: number = 400;
  imgWidth: number = 300;
  changeTitle() {
    this.title = "My Changed Title";
  }
  constructor(private people: PeopleData, private postsService: PostService) {
  }

  log(form: any) {
    alert("Is form valid? " + form.valid);
    alert("Is first name valid? " + form.controls.txtFname.valid);
    alert("What is the first name value? " + form.controls.txtFname.value);
  }
  ngOnInit() {
    this.objPeople = this.people.getAllGoodPeople();
    this.postsService.getPosts().then((data) => this.objPosts = data);

  }
}