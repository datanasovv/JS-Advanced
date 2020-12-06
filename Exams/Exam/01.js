function solve() {
    let divWithInputs = document.getElementById('container');
    let inputs = divWithInputs.querySelectorAll('input');
    let nameInput = inputs.item(0);
    let ageInput = inputs.item(1);
    let kindInput = inputs.item(2);
    let currOwnInput = inputs.item(3);
 
    let adoptionSection = document.getElementById('adoption');
    let adoptionList = adoptionSection.querySelector('ul');
 
    let adoptedSection = document.getElementById('adopted');
    let adoptedList = adoptedSection.querySelector('ul');
 
    let addBtn = divWithInputs.querySelector('button');
 
    addBtn.addEventListener('click', addPet);
 
    function addPet(event) {
        event.preventDefault();
 
        const name = nameInput.value.trim();
        const age = Number(ageInput.value.trim());
        const kind = kindInput.value.trim();
        const currOwn = currOwnInput.value.trim();
 
        if (name && kind && currOwn &&
            !isNaN(age) && ageInput.value.trim()) {
            let li = document.createElement('li');
            let p = document.createElement('p');
            let span = document.createElement('span');
 
            let contactBtn = document.createElement('button');
            //error in options?
            let yesInput = document.createElement('input')
            yesInput.placeholder = 'Enter your names';
            let yesBtn = document.createElement('button');
            let checkedBtn = document.createElement('button');
 
            p.innerHTML = `<strong>${name}</strong>` + ' is a ' +
                `<strong>${age}</strong>` + ' year old ' + `<strong>${kind}</strong>`;
 
            li.appendChild(p);
 
            span.textContent = `Owner: ${currOwn}`;
            li.appendChild(span);
 
            contactBtn.textContent = 'Contact with owner';
 
            let divEl = document.createElement('div');
 
            li.appendChild(contactBtn);
 
            contactBtn.addEventListener('click', () => {
                contactBtn.remove();
 
 
                yesBtn.textContent = 'Yes! I take it!';
 
                divEl.appendChild(yesInput);
                divEl.appendChild(yesBtn);
 
                li.appendChild(divEl);
            });
 
            yesBtn.addEventListener('click', () => {
 
                let newOwnerName = yesInput.value.trim();
 
                if (newOwnerName) {
                    divEl.remove();
 
                    adoptedList.appendChild(li);
 
                    span.textContent = `New Owner: ${newOwnerName}`
                    checkedBtn.textContent = 'Checked';
                    li.appendChild(checkedBtn);
                }
            });
 
            checkedBtn.addEventListener('click', () => {
                li.remove();
            });
 
            adoptionList.appendChild(li);
        }
 
        nameInput.value = '';
        ageInput.value = '';
        kindInput.value = '';
        currOwnInput.value = '';
    }
 
}