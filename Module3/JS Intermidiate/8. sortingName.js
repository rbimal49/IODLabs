const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

// a. New map with DEF ****
const phoneBookDEF = new Map();

// b. Initializing the contents
const contactsDEF = [
  ["David", "0455221182"],
  ["Ethan", "0455221182"],
  ["Fiona", "0455221182"],
];
contactsDEF.forEach(([name, phoneNumber]) => {
  phoneBookDEF.set(name, phoneNumber);
});

// c. Updating the phone number for Caroline:
phoneBookABC.set("Caroline", "0455221183");

// d. Writing a function printPhoneBook
function printPhoneBook(contacts) {
  contacts.forEach((phoneNumber, name) => {
    console.log(`${name}: ${phoneNumber}`);
  });
}

// Example usage
printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

//e. Combining the contents of the two individual Maps into a single
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

//f. Printing out the full list of names in the combined phone book:
console.log([...phoneBook.keys()].join(", "));

