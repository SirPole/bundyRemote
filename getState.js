var result = '';

if (document.getElementById('timer-play') != null) {
	result = 'play';
} else if (document.getElementById('timer-pause') != null) {
	result = 'pause';
}

result;