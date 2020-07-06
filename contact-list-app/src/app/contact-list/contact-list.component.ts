import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from "../contact";
import { ContactService } from "../contact.service"

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  preserveWhitespaces: true
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  counter: number;

  constructor(
    private route: ActivatedRoute,
    private service: ContactService) {
      this.contacts = [];
      this.counter = 0;
    }

  ngOnInit(): void {
    this.contacts = this.service.getContacts();
  }

  delete(id: number): void {
    console.log("before:"+id);
    this.service.delete(id);
    this.contacts = this.contacts.filter(element => element.id != id);
  }

}
