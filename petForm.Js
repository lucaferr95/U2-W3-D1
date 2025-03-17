const petNameInput = document.getElementById("petName"); // <input />
const ownerNameInput = document.getElementById("ownerName"); // <input />
const speciesInput = document.getElementById("species"); // <input />
const breedInput = document.getElementById("breed");

class Pets {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner = function (otherPet) {
    if (this.ownerName === otherPet.ownerName) return true;
  };
}
const Leo = new Pets("Leo", "Luca", "Cat", "Certosino");
console.log(Leo);
const Minnie = new Pets("Minnie", "ziadiLuca", "dog", "Pincher");
console.log(Minnie);
const Mia = new Pets("Mia", "Luca", "Cat", "Europeo");
console.log(Mia);
console.log(Leo.sameOwner(Mia));
const form = document.getElementById("user-form");
form.addEventListener("submit", function (e) {
  // logica sull'invio del form
  // per PRIMA COSA neutralizzare il comportamento di default
  e.preventDefault();
  // ora la pagina non si riavvierà automaticamente e possiamo raccogliere i dati
  console.log("INVIO DEL FORM");
  // raccolgo i dati dal form e li utilizzo per creare un oggetto di tipo PhoneUser
  // firstNameInput.value <- valore del primo campo
  // lastNameInput.value <- valore del secondo campo
  // phoneInput.value <- valore del terzo campo
  const petContact = new Pets(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  );
  console.log("CONTATTO SALVATO", petContact);
  form.reset();
});
