let list = JSON.parse(localStorage.getItem('shoppingList')) || [];

const add_in_list = () => {
    const item_list = document.getElementById("add-list").value;

    if (item_list !== "") {
        list.push(item_list);
        updateLocalStorage();
        document.getElementById("message").innerHTML = "";
        document.getElementById("add-list").value = "";
        updateList();
    } else {
        showMessage("O item não pode estar vazio.");
    }
};

const updateList = () => {
    const listElement = document.getElementById("list");
    listElement.innerHTML = list.map((item, index) => `
        <h4 class="h4">
            <input type="checkbox" class="checkbox" onchange="toggleCompleted(this)">
            <span>${item}</span>
            <img src="assets/icons/icon-recycle-bin.svg" alt="Remover item" onclick="removeItem(${index})">
        </h4>
    `).join('');
};

const removeItem = (index) => {
    list.splice(index, 1);
    updateLocalStorage();
    updateList();
    showMessage("O item foi removido da lista");
};

const showMessage = (message) => {
    const messageElement = document.getElementById("message");
    messageElement.innerHTML = `<p>${message}</p>`;
    setTimeout(() => {
        messageElement.innerHTML = "";
    }, 2000);
};


const updateLocalStorage = () => {
    localStorage.setItem('shoppingList', JSON.stringify(list));
};

updateList();
