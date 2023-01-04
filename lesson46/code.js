// console.log(document.documentElement);  Получить html
// console.log(document.head);  Получить header
// console.log(document.body.childNodes); для этого метода нету аналога с element
// console.log(document.body.firstNodes);
// console.log(document.body.lastNodes);

// console.log(document.body.firstElementChild);


// console.log(document.querySelector('#current').parentNode);   <div class= "first">...</div>
// console.log(document.querySelector('#current').parentNode.parentNode); <div class= "wrapper">...</div>
// console.log(document.querySelector('#current').parentElement);  <div class= "first">...</div>


// console.log(document.querySelector('[data-current = "3"]').nextSibling);  // text он покажет перенос строки
// console.log(document.querySelector('[data-current = "3"]').previousSibling);  // text он покажет перенос строки

// console.log(document.querySelector('[data-current = "3"]').nextElementSibling); Получим объект элемента <li>4</li>
// console.log(document.querySelector('[data-current = "3"]').previousElementSibling); Получим объект элемента <li>2</li>


// console.log(document.body.childNodes); для того чтоб получить элементы, нужно

for(let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
                                                    // Result will be <div class="wrapper">...</div>
                                                    //                <script src="code.js"></script>
    console.log(node);
}