console.log(config);
var result = '';
$ = jQuery;

// $.ajax('https://ant.bundysw.com/report/dashboard/?do=insertRecord-' + config);
$('#timer-' + config)[0].click();

if(config === 'play') {
	result = 'pause';
} else {
	result = 'play';
}

result;