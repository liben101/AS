import {menuList} from './menu.js'

let _html = ``

menuList.forEach(_item=>{
    _html+= `<a target="_blank" href="${_item.path}">${_item.label}</a>`
})

document.querySelector("#app").innerHTML = _html