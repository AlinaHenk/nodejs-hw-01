import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { getAllContacts } from './getAllContacts.js';

const generateContacts = async (number) => {
  const contactList = await getAllContacts();
  const newContactList = Array(number).fill(0).map(createFakeContact);
  contactList.push(...newContactList);
  await writeContacts(contactList);
};

generateContacts(5);
