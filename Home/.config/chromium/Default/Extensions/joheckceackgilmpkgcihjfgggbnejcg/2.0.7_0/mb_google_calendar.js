(function() {
  var id = 'meetingbird_chrome_ext';

  var buttons = document.getElementsByClassName('ep-ea-btn-wrapper');

  var deleteButton = null;
  var i;

  for (i = 0; (i < buttons.length); i++) {
    var button = buttons[i];
    if (button.id.indexOf('delete_top') > -1) {
      deleteButton = button;
    }
  }

  // Get event id
  var matchingElements = document.getElementsByClassName('ep');
  var j;
  for (j = 0; (j < matchingElements.length); j++) {
    var match = matchingElements[j];

    var eventIdEncoded = match.getAttribute('data-eid');
    if (eventIdEncoded !== undefined) {
      var decoded = atob(eventIdEncoded);
      var eventIdDecoded = decoded.split(" ")[0];

      if (!/^[a-z0-9_\-]+$/.test(eventIdDecoded)) {
        eventIdDecoded = null;
      }
    }
  }

  var existingNotesBtn = document.getElementById('mb-view-notes-btn');

  if (eventIdDecoded && deleteButton && !existingNotesBtn) {
    var notesButtonContainer = document.createElement('div');
    var notesButton = document.createElement('div');
    var notesContent = document.createTextNode('View Notes');

    var image = document.createElement('img');
    image.setAttribute('src', 'https://s3.amazonaws.com/meetingbird-prod/staticassets/bird_only.png');
    image.setAttribute('width', 20);
    image.style.cssText = 'width: 16px; display: inline-block; float: left; margin-right: 5px; margin-top: 5px;';

    notesButton.appendChild(image);
    notesButton.appendChild(notesContent);

    notesButton.id = 'mb-view-notes-btn';
    notesButton.className = 'goog-inline-block goog-imageless-button meetingbird-view-notes-button';
    notesButton.style.cssText = 'cursor: pointer';
    notesButton.onmouseover = function() {
      notesButton.className += ' goog-imageless-button-hover';
    };
    notesButton.onmouseout = function() {
      notesButton.className = 'goog-inline-block goog-imageless-button meetingbird-view-notes-button';
    }
    notesButton.onclick = function() {
      var matchingElements = document.getElementsByClassName('ep');
      var j;
      for (j = 0; (j < matchingElements.length); j++) {
        var match = matchingElements[j];

        var eventIdEncoded = match.getAttribute('data-eid');
        if (eventIdEncoded !== undefined) {
          var decoded = atob(eventIdEncoded);
          var eventIdDecoded = decoded.split(" ")[0];
          window.open('https://www.meetingbird.com/access-meeting/google/' + eventIdDecoded + '/-/-');
        }
      }
    }

    notesButtonContainer.appendChild(notesButton);

    notesButtonContainer.style.cssText = 'display: inline; margin-left: 3px;';

    deleteButton.parentNode.insertBefore(notesButtonContainer, deleteButton.nextSibling);
  }

  // Insert Schedule a Meeting btn
  var createEventButtonContainer = document.getElementById('createEventButtonContainer');
  var existingScheduleBtn = document.getElementById('mb-schedule-btn');

  if (createEventButtonContainer && !existingScheduleBtn) {
    var scheduleBtnContainer = document.createElement('div');
    var scheduleBtn = document.createElement('div');
    var scheduleBtnContent = document.createTextNode('Schedule a Meeting');

    var image = document.createElement('img');
    image.setAttribute('src', 'https://s3.amazonaws.com/meetingbird-prod/staticassets/bird_only.png');
    image.setAttribute('width', 20);
    image.style.cssText = 'width: 16px; display: inline-block; float: left; margin-right: 5px; margin-top: 5px;';

    scheduleBtn.appendChild(image);
    scheduleBtn.appendChild(scheduleBtnContent);

    scheduleBtn.id = 'mb-schedule-btn';
    scheduleBtn.className = 'goog-inline-block goog-imageless-button meetingbird-view-notes-button';
    scheduleBtn.style.cssText = 'cursor: pointer';
    scheduleBtn.onmouseover = function() {
      scheduleBtn.className += ' goog-imageless-button-hover';
    };
    scheduleBtn.onmouseout = function() {
      scheduleBtn.className = 'goog-inline-block goog-imageless-button meetingbird-view-notes-button';
    }
    scheduleBtn.onclick = function() {
      window.open('https://www.meetingbird.com/app#/meetings?message=scheduler');
    }

    scheduleBtnContainer.appendChild(scheduleBtn);

    scheduleBtnContainer.style.cssText = 'display: inline-block; margin-bottom: 5px;';

    createEventButtonContainer.insertBefore(scheduleBtnContainer, createEventButtonContainer.firstChild);
  }
})();
