const formatDate = (time) => {
    if (time == 0 || time == null) {
        return ('0s');
    }

    else if (time >= 1 && time <= 59) {
        return (time + 's');
    }

    else if (time >= 60 && time <= 3599) {
        if (time % 60 !== 0) {
            return (Math.floor(time / 60)) + 'm ' + time % 60 + 's';
        }
        else {
            return (Math.floor(time / 60)) + 'm';
        }

    } else {
        var hours = (Math.floor(time / 3600));
        var min = (Math.floor((time - (hours * 3600)) / 60));
        var seconds = (Math.floor(time - (hours * 3600) - (min * 60)));

        if (seconds == 0 && min == 0) {
            return (hours + 'h');
        }
        else if (seconds !== 0 && min == 0) {
            return (hours + 'h ' + seconds + 's');
        }
        else if (seconds == 0 && min !== 0) {
            return (hours + 'h ' + min + 'm');
        }
        else {
            return (hours + 'h ' + min + 'm ' + seconds + 's');
        }
    };
}

module.exports = formatDate;