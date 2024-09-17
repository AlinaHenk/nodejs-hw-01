import { getAllContacts } from './getAllContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeLastContact = async () => {
  const contactList = await getAllContacts();
  contactList.pop();
  await writeContacts(contactList);
};

removeLastContact();
