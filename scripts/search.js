/* ========== SearchBox ========== */
const clearSearch = document.querySelector('.project-search > .close');
const projectSearch = document.querySelector('#search-box');

/**
* Attach the keup event listener to the search box
*/
projectSearch.addEventListener('keyup', function(e) {
	searchProjects()
});


/**
* Identify text entered by the user in the projectSearch, seach for matching employee names and 
* set cards not matching display value to none. Matching cards to be ''. 
* The search results need to be cleared every time the function is called to prevent duplication.
*/
function searchProjects(userInput='') {
	userInput = projectSearch.value.toLowerCase();	
	projects.forEach((card) => {	
		if (card.textContent.toLowerCase().includes(userInput)) {
			card.style.display = '';
		} else {
			card.style.display = 'none';
		}
	});
}

/**
* Reset the serach box and make all project cards visible once the search is cleared
*/
function closeSearch() {	
	projectSearch.value = '';
	showProjects()
}


/**
* Make all projects visible
*/
function showProjects() {
	projects.forEach(card => {
		card.style.display = '';
	});
}
/**
* Make all projects hidden
*/
function hideProjects() {
	projects.forEach(card => {
		card.style.display = 'none';
	});
}



clearSearch.addEventListener('click', () => {
	closeSearch();	
}); 


/* ========== Checkboxes ========== */

const checkboxes = document.querySelectorAll('[type="checkbox"]');

/**
* hide or show projects that hte user has searched based on their selection of languages using the 
* checks in the project-search form
*/
function projectsToggle() {	
	const showOptions = [];
	checkboxes.forEach(check => {
		if (check.checked) {
			showOptions.push(check.value);			
		};
	});
	
	if (showOptions.length > 0) {
		hideProjects()

		const visibleProjects = []
		projects.forEach(card => {
			let languages = card.querySelector('.languages > ul').textContent;

			showOptions.forEach(show => {
				if (languages.includes(show)) {
					visibleProjects.push(card);
				}
			});					
		});

		visibleProjects.forEach(card => {
			card.style.display = '';
		});

	} else {
		showProjects()
	}
}

checkboxes.forEach(box => {
	box.addEventListener('change', (e) => {		
		projectsToggle()
	});
});