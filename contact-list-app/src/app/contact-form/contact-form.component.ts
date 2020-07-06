import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from "../contact.service"
import { CONTACT_EMPTY } from "../mock-contact"

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  preserveWhitespaces: true
})
export class ContactFormComponent implements OnInit {
  currentURL: String;
  mode: String;
  contact: Contact;
  id: number;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private service: ContactService) {

    this.contact = {...CONTACT_EMPTY};
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
    if (this.mode != "add") {
      this.contact = {...this.getContact(this.id)};
    }
  }

  getContact(id: number): Contact {
    return this.service.getContact(id);
  }

  add(): void {
    this.service.add(this.contact);
    this.contact = {...CONTACT_EMPTY};
  }

  update(): void {
    this.service.update(this.contact);
    this.router.navigate(["/contact/view/"+this.contact.id]);
    this.contact = {...CONTACT_EMPTY};
  }
}
