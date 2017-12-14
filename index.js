let pressed = [];
const code = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter';
window.addEventListener('keyup', (e) => {
	pressed.push(e.key);
	pressed.splice(-code.length - 1, pressed.length - code.length);
	if(pressed.join('') === code){
		var body = document.querySelector('body');
		body.style.transform = "rotate(10800deg)";
		body.style.transition = 'transform 5s';
		setTimeout(changeCodeText, 5250);
	}
});

function changeCodeText(){
	var codeContainer = document.querySelector('.code_container');
	codeContainer.innerHTML = 'Thanks for playing! Refresh the page to try it again!'
}