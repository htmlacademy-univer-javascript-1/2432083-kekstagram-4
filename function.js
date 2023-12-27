function strLength(str, num) {
  if (str.length <= num) {
    return true;
  }
  return false;
}

console.log(strLength('dfgasdfasfasf', 10));

function palindrom(word) {
  let length = 1;
  for (let i = 0; i < word.length; i += 0) {
    for (let j = word.length - 1; j > 0; j--) {
      if (word[i] !== word[j]) {
        return false;
      }

      if (length === word.length) {
        return true;
      }

      length += 1;
      i++;
    }
  }
}

console.log(palindrom("ванна"));

function isMeetingOk(startWork, endWork, startMeeting, duration) {
  startWork = startWork.split(':');
  endWork = endWork.split(':');
  startMeeting = startMeeting.split(':');

  const startWorkMinutes = parseInt(startWork[0]) * 60 + parseInt(startWork[1]);
  const endWorkMinutes = parseInt(endWork[0]) * 60 + parseInt(endWork[1]);
  const startMeetingMinutes = parseInt(startMeeting[0]) * 60 + parseInt(startMeeting[1]);
  const endMeetingMinutes = startMeetingMinutes + duration;

  return startWorkMinutes <= startMeetingMinutes && startMeetingMinutes < endWorkMinutes && startWorkMinutes < endMeetingMinutes && endMeetingMinutes <= endWorkMinutes;
}

console.log(isMeetingOk('9:00', '18:00', '10:30', 90));
