import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from "../contact";
import { CONTACTS } from "../mock-contact";
import { ContactService } from "../contact.service"
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = CONTACTS;

  constructor(
    private route: ActivatedRoute,
    private service: ContactService) { }

  ngOnInit(): void {

  }

  delete(id: number): void {
    console.log("before:"+id);
    this.service.delete(id);
    this.contacts = this.contacts.filter(element => element.id != id);
  }

}
