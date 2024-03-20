
var getul = document.getElementById("ul")


function foo(){
	var a = document.getElementById('inp')
	var li = document.createElement('li')
	var liText = document.createTextNode(a.value)
	li.appendChild(liText)
	getul.appendChild(li)
	a.value = ''

	var deletbtn = document.createElement('button')
	var deletbtnText = document.createTextNode('delet')
	 deletbtn.appendChild(deletbtnText)
	li.appendChild(deletbtn)
	deletbtn.setAttribute('onclick','dell(this)')
	deletbtn.setAttribute('class','delet btn btn-danger')

	// edit button work

	var editbtn = document.createElement('button')
	var editbtnText = document.createTextNode('edit')
	 editbtn.appendChild(editbtnText)
	li.appendChild(editbtn)
     editbtn.setAttribute('onclick','edit(this)')
     editbtn.setAttribute('class','edit btn btn-warning')


	console.log(liText)
}
function dell(e){
	e.parentNode.remove()
}
function edit(e){
	var a = prompt('enter edit value',e.parentNode.firstChild.nodeValue)
	e.parentNode.firstChild.nodeValue=a

}


function del(){
	getul.innerHTML = ''
}




