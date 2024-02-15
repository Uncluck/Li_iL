
(() => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => createTree(data.services, null, root));
})();

const root = document.getElementById("root")

const createTree = (data, parentId, parentElement) => {
    const children = data.filter((node) => node.head === parentId);

    const ul = document.createElement("ul");
    parentElement.appendChild(ul);

    children.sort((a, b) => a.sorthead - b.sorthead).forEach((child) => {
        console.log(child);
        const li = document.createElement("li");
        li.innerHTML = (`${child.name} (${child.price})`);
        ul.appendChild(li);

        child.node === 1 ? createTree(data, child.id, li) : null
    });
}

