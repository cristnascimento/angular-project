import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from "../contact.service"
import { CONTACT_EMPTY } from "../mock-contact"

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  //template: '{{contact.phoneCategory == "Home" ? "Vai" : "Fica2"}}',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  currentURL: String;
  mode: String;
  id: number;
  contact: Contact = CONTACT_EMPTY;
  ha: String;
  contacts: Contact[];
  c: Contact[];

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private service: ContactService) {
    this.ha = "asdfasd";

    this.currentURL = this.router.url;

    if (this.currentURL === "/contact/add") {
      this.mode = "add";
    }
    else if (this.currentURL.includes("/contact/view/")) {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.mode = "view";
    } else {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.mode = "edit";
    }
  }

  ngOnInit(): void {
    this.getContacts();
    if (this.mode != "add") {
      this.contact = this.getContact(this.id);
    }
  }

  getContacts(): void {
    this.contacts = this.service.getContacts();
  }

  getContact(id: number): Contact {
    return this.service.getContact(id);
  }

  add(): void {
    this.service.add(this.contact);
  }

  update(): void {
    this.service.update(this.contact);
  }

}
