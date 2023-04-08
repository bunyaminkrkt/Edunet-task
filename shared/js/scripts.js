$(function(){
	$('#header').load('shared/header.html');
	$('#footer').load('shared/footer.html');	
});
function mobileToggle(){
	let element = document.getElementById('navigateList')
	if (element.style.display === 'none') {
		element.style.display='flex'
	}else if(element.style.display === 'flex'){
		element.style.display='none'
	}else{
		element.style.display='flex'
	}
}