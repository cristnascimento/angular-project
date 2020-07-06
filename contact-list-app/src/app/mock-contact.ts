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
    closeFriend: "false"
  },
  { id: 2,
    firstName: "Edgar",
    lastName: "Reade",
    phone: "+55 31 80980980",
    phoneCategory: "Mobile",
    email: "reade@blindspot.com",
    address: "Av. Antônio Carlos",
    city: "Belo Horizonte",
    state: "MG",
    zip: "5234",
    closeFriend: "true"
  },
  { id: 3,
    firstName: "William",
    lastName: "Patterson",
    phone: "+55 31 80980980",
    phoneCategory: "Mobile",
    email: "patterson@blindspot.com",
    address: "Av. Antônio Carlos",
    city: "Belo Horizonte",
    state: "MG",
    zip: "5234",
    closeFriend: "true"
    }
];

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
    closeFriend: "true"
  };

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
