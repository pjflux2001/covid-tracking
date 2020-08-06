window.onload=function(){
	render();
};

function render(){
	window.recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
	recaptcha.render();
}