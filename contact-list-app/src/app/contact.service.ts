import { Injectable } from '@angular/core';
import { CONTACTS } from "./mock-contact"
import { Contact } from "./contact"

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];
  nextId: number;

  constructor() {
    this.contacts = CONTACTS;
    this.nextId = this.contacts.length + 1;
  }

  getContacts(): Contact[] {
    console.log("get contacts size:"+this.contacts.length);
    for(let item of this.contacts) {
      console.log("firstName: "+item.firstName);
    }
    return this.contacts;
  }

  getContact (id: number): Contact {
    console.log("get id:"+id);
    console.log("size:"+this.contacts.length);
    return this.contacts.find(element => element.id == id);
  }

  add (contact: Contact): void {
    contact.id = this.nextId;
    this.nextId += 1;
    this.contacts.push(contact);
    console.log("add id: "+contact.id);
    console.log("add name: "+contact.firstName);
    console.log("size:"+this.contacts.length);

  }

  update (contact: Contact): void {
    let oldContact = this.contacts.find(element => element.id == contact.id);
    let indexToUpdate = this.contacts.indexOf(oldContact);
    this.contacts[indexToUpdate] = contact;
    console.log("update id: "+contact.id);
    console.log("firstName: "+contact.firstName);
    this.printContacts();
  }

  delete (id: number): void {
    console.log("delete id: "+id);
    this.contacts = this.contacts.filter(element => element.id != id);
    console.log("new size: "+this.contacts.length);
    this.printContacts();
  }

  private printContacts(): void {
    for(let item of this.contacts) {
      console.log("firstName: "+item.firstName);
    }
  }
}
