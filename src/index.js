function createStyle() {
	let head = document.head || document.getElementsByTagName('head')[0],
		css =
		`
	.alert-msg-ak {
	padding: 0.75rem 1.25rem;
	margin-bottom: 1rem;
	border: 1px solid transparent;
	border-radius: 0.25rem;
	z-index: 10;
	}
	.alert-success-ak {
	color: #1d643b;
	background-color: #d7f3e3;
	border-color: #c7eed8;
	}
	.alert-danger-ak {
	color: #721c24;
	background-color: #f8d7da;
	border-color: #f5c6cb;
	}`
	style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode(css));
	head.appendChild(style);
}

window.flashMsg = (message = "Test Mesage", timeout = 2000, level = "success", position = "bottom", alignment = "right") => {
	createStyle()
	let div = document.createElement('div')
	div.classList = ` alert-msg-ak alert-${level}-ak`
	div.setAttribute('id', 'flashMsg');
	div.setAttribute('role', 'alert');
	div.setAttribute('style', `
				position: fixed;
				${alignment}: 25px;
				${position}: 25px;
			`)
	div.innerText = message
	document.querySelector('body').appendChild(div)
	setTimeout(() => {
		div.parentNode.removeChild(div);
	}, timeout);
}