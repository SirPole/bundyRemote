var result = '';
$ = jQuery;

$('#timer-' + config)[0].click();

if(config === 'play') {
	result = 'pause';
} else {
	result = 'play';
}

result;