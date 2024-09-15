document.querySelectorAll("input").forEach(function(e){var t=e.name.charAt(0).toUpperCase()+e.name.slice(1);e.setAttribute("placeholder",t);var a=document.createElement("label");a.textContent=e.name,a.setAttribute("for",e.id),a.className="field-label",e.insertAdjacentElement("beforebegin",a)});
//# sourceMappingURL=index.eef378d6.js.map
