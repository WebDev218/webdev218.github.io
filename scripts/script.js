const projectGrid = document.querySelector('#project-grid');
const projects = document.querySelectorAll('.project');
const descriptionsFull = document.querySelectorAll('.project-description.full');

/**
* Links to SVG's used tp represent the languages used. All SVG's couresy of https://commons.wikimedia.org/
* Order of languages is not arbitrary and new ones should be added last
* 0: HTML 5  1:CSS 3  2: JavaScript  3: SASS
*/
const imageLinks = [
	"https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
	"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
	"https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
	"https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
];

/**
* Purpose: to identify each project in the document and add in SVG images to the languages listed in the 'languages' element.
* For example, if an li in this element contains 'HTML' replace it with an HTML 5 SVG using the link in imageLinks 
* Finally append the relevant image to the link to the project
*/
function createProjects() {
	for (let project of projects) {
		const languages = project.querySelector('.languages > ul');
		if (languages) {
			for (let li of languages.children) {			
				if (li.textContent === 'HTML') {
					li.appendChild(generateElement('img', [['src', imageLinks[0]], ['alt', 'HTML 5 Logo']], ['language-icon']));
				} 
				if (li.textContent === 'CSS') {
					li.appendChild(generateElement('img', [['src', imageLinks[1]], ['alt', 'CSS 3 Logo']], ['language-icon']));
				} 
				if (li.textContent === 'JavaScript') {
					li.appendChild(generateElement('img', [['src', imageLinks[2]], ['alt', 'JavaScript Logo']], ['language-icon']));
				}
				if (li.textContent === 'SASS') {
					li.appendChild(generateElement('img', [['src', imageLinks[3]], ['alt', 'SASS Logo']], ['language-icon']));
				} 
			}
		}

		const projLink = project.querySelector('.project-link');		
		const projId = project.id;

		const imageSm = `img/projects/project${projId}.png`;
		const img = generateElement('img', [['src', imageSm], ['alt', `Preview of project ${project.id}.`]], ['proj-img', 'sm']);
		projLink.appendChild(img);
	}
}

/**
* Build elements on demand
* @PARAM {String} element type, eg 'img', 'li' etc
* @PARAM {Array} [attr=[]] 2d array. Each item in the array should be a array, containing the attribute name as a string, then the value 
* @PARAM {array} [classList=[]] an array of classes to be added to the element
* @RETURN {element} completed HTML element
*/
function generateElement(type, attr=[], classList=[]) {
	let newElement = document.createElement(type);
	if (attr) {
		attr.forEach((attribute) => {
			newElement.setAttribute(attribute[0], attribute[1]);
		});		
	}
	if (classList) {
		classList.forEach((className) => {
			newElement.classList.add(className);
		});		
	}
	return newElement;
}

/**
* Add an event listener to each project that retrieves the projects target url and opens it in a new tab.
*/
projects.forEach(proj => {	
	proj.addEventListener('click', (e) => {
		window.open(proj.querySelector('.project-link').href);
	});
});

createProjects();