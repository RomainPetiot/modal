function ModalhasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}
function ModaladdClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!ModalhasClass(el, className)) el.className += " " + className
}

function ModalremoveClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (ModalhasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}


/********MODAL*******/

function openModal(el, text, title){
	var text = (typeof text !== 'undefined') ? text : "";
	var title = (typeof title !== 'undefined') ? title : "";
	if(text.length){
		el.children[1].innerHTML = text;
	}
	if(title.length){
		document.getElementById('modal-title').innerHTML = title;
	}
	ModaladdClass(el, 'openModal');
	overlay = document.getElementById("modalOverlay");
	ModaladdClass(overlay, 'overlayOpen');
}
function closeModal(){
	el = document.getElementsByClassName('modal');
	for(var i = 0; i < el.length; i++){
		ModalremoveClass(el[i], 'openModal');
	}
	overlay = document.getElementById("modalOverlay");
	ModalremoveClass(overlay, 'overlayOpen');

}
