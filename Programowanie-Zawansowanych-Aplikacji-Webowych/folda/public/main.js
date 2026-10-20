"use strict";
const addButton = document.querySelector("#AddButton");
const AddNameField = document.querySelector("#AddNameField");
const AddDescField = document.querySelector("#AddDescField");
const ShortcutElementA = document.querySelector("#ShortcutValueA");
const ShortcutElementB = document.querySelector("#ShortcutValueB");
const ShortcutElementC = document.querySelector("#ShortcutValueC");
const SearchButton = document.querySelector("#SearchButton");
const SearchInputField = document.querySelector("#SearchInputField");
const SearchMode = document.querySelector("#SearchMode");
const Container = document.querySelector("#Container");
let AllDataArray = [];
let newId = 0;
if (addButton && AddNameField && AddDescField && ShortcutElementA && ShortcutElementB && ShortcutElementC && Container) {
    addButton?.addEventListener('click', (e) => {
        let inputNameFieldValue = AddNameField?.value;
        let inputDescFieldValue = AddDescField?.value;
        let ShortCutValue = "S" + ShortcutElementA?.value + "R" + ShortcutElementB?.value + "P" + ShortcutElementC?.value;
        AllDataArray.push({ EAN: newId, name: inputNameFieldValue, description: inputDescFieldValue, shortcut: ShortCutValue });
        AddNameField.value = '';
        AddDescField.value = '';
        ShortcutElementA.value = '';
        ShortcutElementB.value = '';
        ShortcutElementC.value = '';
        newId++;
        render(AllDataArray);
    });
}
if (SearchButton && SearchInputField && SearchMode && Container) {
    SearchButton?.addEventListener('click', (e) => {
        let RenderArray = [];
        let SearchInputFieldValue = SearchInputField?.value;
        let SearchModeValue = SearchMode?.value;
        let isSearch = false;
        AllDataArray.forEach((element, id) => {
            if (SearchModeValue == "EAN" && AllDataArray[id].EAN == parseInt(SearchInputFieldValue)) {
                RenderArray.push({ EAN: element.EAN, name: element.name, description: element.description, shortcut: element.shortcut });
                isSearch = true;
            }
            if (SearchModeValue == "nazwa" && AllDataArray[id].name == SearchInputFieldValue) {
                RenderArray.push({ EAN: element.EAN, name: element.name, description: element.description, shortcut: element.shortcut });
                isSearch = true;
            }
            if (SearchModeValue == "shortcut" && AllDataArray[id].shortcut == SearchInputFieldValue) {
                RenderArray.push({ EAN: element.EAN, name: element.name, description: element.description, shortcut: element.shortcut });
                isSearch = true;
            }
        });
        if (SearchInputFieldValue === "") {
            console.log("empty");
            AllDataArray.forEach((element, id) => {
                RenderArray.push({ EAN: element.EAN, name: element.name, description: element.description, shortcut: element.shortcut });
            });
        }
        SearchInputField.value = '';
        render(RenderArray);
    });
}
function render(inputArray) {
    Container.innerHTML = "";
    inputArray.forEach((element, index) => {
        let container = document.createElement("div");
        container.classList.add("card", "card-body", "mt-1", "shadow");
        let delateBTN = document.createElement("button");
        let Name = document.createElement('h3');
        let Description = document.createElement('p');
        let Shortcut = document.createElement('p');
        let EAN = document.createElement('p');
        EAN.textContent = "EAN: " + element.EAN;
        Name.textContent = "Produkt: " + element.name;
        Description.textContent = "Opis: " + element.description;
        Shortcut.textContent = "Skrót: " + element.shortcut;
        delateBTN.textContent = "Delate";
        delateBTN.addEventListener('click', () => {
            console.log(element.EAN);
            let index = -1;
            let iterator = 0;
            AllDataArray.forEach(p => {
                if (p.EAN === element.EAN) {
                    index = iterator;
                }
                iterator++;
            });
            if (index !== -1) {
                AllDataArray.splice(index, 1);
            }
            // AllDataArray.splice(element.EAN,element.EAN);
            // console.log(AllDataArray);
            container.remove();
        });
        container.appendChild(EAN);
        container.appendChild(Name);
        container.appendChild(Description);
        container.appendChild(Shortcut);
        container.appendChild(delateBTN);
        Container?.appendChild(container);
    });
}
