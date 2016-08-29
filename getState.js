var result = '';
$ = jQuery;

if ($('#timer-play').length) {
	result = 'play';
} else if ($('#timer-pause').length) {
	result = 'pause';
}

result;