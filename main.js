import { menuList } from './menu.js'


// menuList.forEach(_item => {
//     _html += `<a target="_blank" href="${_item.path}">${_item.label}</a><br/>`
// })

function generateMenuHtml(children, hierarchy) {
    let _html = ''
    children.forEach(element => {
        if (!element.folderFlag) {
            _html += `<a style="margin-left: ${hierarchy * 30}px" target="_blank" href="${element.path}">${element.label}</a><br/>`
        } else {
            _html += `<span style="margin-left: ${hierarchy * 30}px; border-bottom: 2px solid black">${element.label}</span><br/>`
        }

        if (element.children && element.children instanceof Array && element.children.length > 0) {
            _html += generateMenuHtml(element.children, hierarchy + 1)
        }
    });

    return _html

}

document.querySelector("#app").innerHTML = generateMenuHtml(menuList, 0)


