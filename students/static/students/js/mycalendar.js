mycalendar = angular.module('mycalendar', ['mwl.calendar']);
mycalendar.controller('mycalendarctrl', function() {
  var vm = this;
  vm.calendarTitle = 'My Lessons';
  vm.calendarView = 'month';
  vm.viewDate = new Date();
  vm.events = [
    {
      title: 'Lesson #1', // The title of the event
      type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
      startsAt: new Date(2016,5,10,14), // A javascript date object for when the event starts
      endsAt: new Date(2016,5,10,15), // Optional - a javascript date object for when the event ends
      editable: true, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
      deletable: true, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
      draggable: true, //Allow an event to be dragged and dropped
      resizable: true, //Allow an event to be resizable
      incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
      recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
      cssClass: 'a-css-class-name', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
      allDay: false // set to true to display the event as an all day event on the day view
    },
    {
      title: 'Lesson #2', // The title of the event
      type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
      startsAt: new Date(2016,5,12,16), // A javascript date object for when the event starts
      endsAt: new Date(2016,5,12,17), // Optional - a javascript date object for when the event ends
      editable: true, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
      deletable: true, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
      draggable: true, //Allow an event to be dragged and dropped
      resizable: true, //Allow an event to be resizable
      incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
      recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
      cssClass: 'a-css-class-name', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
      allDay: false // set to true to display the event as an all day event on the day view
    },
    {
      title: 'Lesson #3', // The title of the event
      type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
      startsAt: new Date(2016,5,18,14), // A javascript date object for when the event starts
      endsAt: new Date(2016,5,18,15), // Optional - a javascript date object for when the event ends
      editable: true, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
      deletable: true, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
      draggable: true, //Allow an event to be dragged and dropped
      resizable: true, //Allow an event to be resizable
      incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
      recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
      cssClass: 'a-css-class-name', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
      allDay: false // set to true to display the event as an all day event on the day view
    },
    {
      title: 'Debriefing', // The title of the event
      type: 'success', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
      startsAt: new Date(2016,5,19,19), // A javascript date object for when the event starts
      endsAt: new Date(2016,5,19,20), // Optional - a javascript date object for when the event ends
      editable: true, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
      deletable: true, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
      draggable: true, //Allow an event to be dragged and dropped
      resizable: true, //Allow an event to be resizable
      incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
      recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
      cssClass: 'a-css-class-name', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
      allDay: false // set to true to display the event as an all day event on the day view
    },
    {
      title: 'Lesson #4', // The title of the event
      type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
      startsAt: new Date(2016,5,20,14), // A javascript date object for when the event starts
      endsAt: new Date(2016,5,20,16), // Optional - a javascript date object for when the event ends
      editable: true, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
      deletable: true, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
      draggable: true, //Allow an event to be dragged and dropped
      resizable: true, //Allow an event to be resizable
      incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
      recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
      cssClass: 'a-css-class-name', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
      allDay: false // set to true to display the event as an all day event on the day view
    }
  ];
})
