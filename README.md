# Contact list project with Angular

## Description

In this project we build a simple contact list to learn the essential features in [Angular framework](http://angular.io)

## Folders

* contact-list-app: The contact-list project;
* hello-app: [The Tour of Heroes tutorial](https://angular.io/tutorial) from [Angular website](https://angular.io).

## Dependencies

* Ubuntu 18.04
* Node/Npm
* Angular
* Bootstrap

## Install Node and Npm

### Ubuntu 18.04 64 bits

(1) Download from [Node Official Webpage](https://nodejs.org/en/)

(2) Follow the instructions from [Node Installation](https://github.com/nodejs/help/wiki/Installation)

1. Unzip the binary archive to any directory you wanna install Node, I use /usr/local/lib/nodejs
```
VERSION=v10.15.0
DISTRO=linux-x64
sudo mkdir -p /usr/local/lib/nodejs
sudo tar -xJvf node-$VERSION-$DISTRO.tar.xz -C /usr/local/lib/nodejs
```
1. Set the environment variable ~/.profile, add below to the end
```
# Nodejs
VERSION=v10.15.0
DISTRO=linux-x64
export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH
```
1. Refresh profile
  ```
    . ~/.profile
  ```
1. Test Installation
  ```
$ node -v
$ npm version
$ npx -v  
```

### Ubuntu 18.04 32 bits

Angular requires Node v10+ npm 3+.

Ubuntu 32 bits apt manager supports until v8.

Use unofficial binaries:
* https://unofficial-builds.nodejs.org/download/release/v10.21.0/

Tested with **_node-v10.21.0-linux-x86.tar.gz_**

Extract and copy to **/usr/local/lib/nodejs/**

```console
$ ls /usr/local/lib/nodejs/
node-v10.21.0-linux-x86
```
```console
$ vim ~/.profile
$ export PATH=/usr/local/lib/nodejs/node-v10.21.0-linux-x86/bin:$PATH
```

## Install Angular

```
$ npm install -g @angular/cli
```
See more instructions on [Angular setup-local](https://angular.io/guide/setup-local).
## Install Dependencies

When you download a project from git

```
$ cd <project>
$ npm install
```

## Create new Angular Project

```console
$ ng new contact-list-app
```
## Run

```console
$ cd contact-list-app
$ ng serve --open
```
Check it http://localhost:4200/

## Create a componet

```console
$ ng generate component contact-form
$ ng generate component contact-list
```
Those components were included automatically in app/app.module.ts

## Add components do AppComponents

Edit app/app.component.html

```html
...
<app-contact-form></app-contact-form>
<app-contact-list></app-contact-list>
...
```
## Add the AppRoutingModule

```
$ ng generate module app-routing --flat --module=app
```

Check it src/app/app-routing.module.ts

## Edit Routes

```js
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  { path: 'contact/add', component: ContactFormComponent },
  { path: 'contact/edit/:id', component: ContactFormComponent },
  { path: 'contact/view/:id', component: ContactFormComponent },
  { path: 'contact/list', component: ContactListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
use routeLinks in HTML, app/form-contact.component.html
```html
...
  <a routerLink="/contact/list" class="btn btn-warning">Go Back</a>
...
```
## Edit AppComponent

Edit app.component.html

Replace
```html
<app-contact-form></app-contact-form>
<app-contact-list></app-contact-list>
```

For


```html
<router-outlet></router-outlet>
```

## Edit your own components

Code here, get data, handle events and so far.

```
app/contact-form/contact-form.component.ts
```
```js
...
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  currentURL: String;
  mode: String;
  id: number;
  constructor() { }

  ngOnInit(): void {

  }
...
}
```

HTML

```
app/contact-form/contact-form.component.html
```

```html
<div class="container col-md-6" >
    <br/>
    <h2>Hello, my friends! {{ mode  }}</h2><br/>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4">
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" class="form-control" id="inputPassword4">
        </div>
      </div>
...
```


## Access params in the URL Path

Edit app/contact-form/contact-form.component.ts

```javascript
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

...
export class ContactFormComponent implements OnInit {
...
constructor(private router: Router,  private route: ActivatedRoute) {
  this.route.queryParams.subscribe(params => {
    this.id = params['id']; });
  this.currentURL = this.router.url;
...
```
## Create an interface to represent your Contact

Create app/contact.ts

```js
export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  phoneCategory: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  closeFriend: string;
}
```

## Mock the interface

app/mock-contact.ts

```js
import { Contact } from './contact';

export const CONTACTS: Contact[] = [
  { id: 1,
    firstName: "Natasha",
    lastName: "Zapata",
    phone: "+55 31 80980980",
    phoneCategory: "Mobile",
    email: "zapata@blindspot.com",
    address: "Av. Antônio Carlos",
    city: "Belo Horizonte",
    state: "MG",
    zip: "5234",
    closeFriend: ""
  },
...
export const CONTACT: Contact =
  { id: 1,
    firstName: "Natasha",
    lastName: "Zapata",
    phone: "+55 31 80980980",
    phoneCategory: "Mobile",
    email: "zapata@blindspot.com",
    address: "Av. Antônio Carlos",
    city: "Belo Horizonte",
    state: "MG",
    zip: "5234",
    closeFriend: ""
  };
...
export const CONTACT_EMPTY: Contact =
    { id: 0,
      firstName: "",
      lastName: "",
      phone: "",
      phoneCategory: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      closeFriend: ""
    };
```
## Use data interface in the component

```js
import { CONTACTS, CONTACT, CONTACT_EMPTY } from '../mock-contact';
...
export class ContactFormComponent implements OnInit {
  ...
  contact: Contact = CONTACT_EMPTY;
  ...
```

## Bind form elements to Component attributes

Edit app/contact-form.component.ts

```html
<div class="form-group col-md-6">
    <label for="inputFirstName">First Name</label>
    <input [(ngModel)]="contact.firstName" type="text" class="form-control" id="inputFirstName">
</div>
```

Edit app/app.module.ts

```javascript
...
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
...
imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule
],
...
```

## Add Event Handlers

app/contact-form.component.ts

```js
...
add(): void {
  // doSomething(this.contact);
}
...
```
app/contact-form.compoment.html

```html
...
<div *ngIf="mode === 'add'">
  <button type="submit" (click)="add()" class="btn btn-primary">Add</button>
  ...
</div>
...
```

## Create Services

```
$ ng generate service contact
```

edit app/contacts.service.ts

```js
import { Injectable } from '@angular/core';
import {CONTACTS} from "./mock-contact"
@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor() { }

  getContacts: Contact[] {
    return CONTACTS;
  }
}
```

add service to component app/contact-form.component.ts

```js
...
import { ContactService } from "../contact.service"
...
constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ContactService) {
...
add(): void {
  this.service.add(this.contact);
}
```
## Troubleshooting

### ngModel binding not changing
If element is within a form, use "name" property or:
```
<input [(ngModel)]="ha" [ngModelOptions]="{standalone: true}">
```

### Watch file limit
Limit of watch files. Check it:

```
$ cat /proc/sys/fs/inotify/max_user_watches
```

Change it

```
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

### Update properties in different components

It is possible that you are returning a reference instead of a copy of an object. This might update objects in different components without confirmation.

Copy the attributes

```
newVar = {...someObj};
```
