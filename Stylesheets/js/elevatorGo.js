/*Adaptation of Tim Holman's "Elevator" Script for this website, used under MIT License.*/
  window.onload = function() {
	var elevatorAbout = new Elevator({
		element: document.querySelector('.elevator-button-about'),
		targetElement: document.querySelector('#about'),
		duration: 1500
	});
	var elevatorProjects = new Elevator({
		element: document.querySelector('.elevator-button-projects'),
		targetElement: document.querySelector('#projects'),
		duration: 2000
	});
	var elevatorSkills = new Elevator({
		element: document.querySelector('.elevator-button-skills'),
		targetElement: document.querySelector('#skills'),
		duration: 2500
	});
	var elevatorContact = new Elevator({
		element: document.querySelector('.elevator-button-contact'),
		targetElement: document.querySelector('#contact'),
		duration: 2500
	});
  }