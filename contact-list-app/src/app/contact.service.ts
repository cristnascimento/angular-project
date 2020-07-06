import { Injectable } from '@angular/core';
import { CONTACTS } from "./mock-contact"
import { Contact } from "./contact"

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = CONTACTS;
    this.nextId = this.contacts.length + 1;
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContact (id: number): Contact {
    console.log("get id:"+id);
    return this.contacts.find(element => element.id == id);
  }

  add (contact: Contact): void {
    contact.id = this.nextId;
    this.nextId += 1;
    this.contacts.push(contact);
    console.log("add id: "+contact.id);
  }

  update (contact: Contact): void {
    console.log("update id: "+contact.id);
    console.log("firstName: "+contact.firstName);
  }

  delete (id: number): void {
    console.log("delete id: "+id);
  }
}
