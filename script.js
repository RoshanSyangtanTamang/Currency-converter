

const dropdownS = document.querySelectorAll(".dropdown select")

for (let select of dropdownS) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
    }
}