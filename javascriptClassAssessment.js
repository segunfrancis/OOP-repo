// NOTE-TAKING APPLICATION
function NotesApp(author) {
	this.author = author;
	this.notes = [];
	
	// function for creating notes
	this.create = function(note_content) {
		if(note_content.length === 0) {
			return 'error';
		}
		this.notes.push(note_content);
	};
	
	// function for listing notes
	this.listNotes = function() {
		for(var i = 0; i < this.notes.length; i++) {
			console.log("Note ID: " + this.notes.indexOf(this.notes[i]));
			console.log(this.notes[i]);
			console.log("By " + this.author);
		}
	};
	
	// function for getting notes through note's index
	this.get = function(note_id) {
		if(typeof note_id === 'number') {
			return this.notes[note_id];
		} else {
			return 'enter only numbers';
		} 
	};
	
	// search function
	this.search = function(search_text) {
		if(typeof search_text !== 'string') {
			return 'error';
		}
		console.log('Showing results for search ' + '"' + search_text + '"');
		var result = [];
		for(var x = 0; x < this.notes.length; x++) {
			if(this.notes[x].includes(search_text)) {
				result.push(this.notes[x]);
			}
		}
	if(result.length > 0) {
		for(var c = 0; c < result.length; c++) {
			console.log('Note ID: ' + this.notes.indexOf(this.notes[c]));
			console.log(result[c]);
			console.log('By authur: ' + this.author);
		}
	} else {
		console.log('No match found!');
	}
	};
	
	// delete function
	this.delete = function(note_id) {
		if(typeof note_id !== 'number') {
			return 'enter only numbers';
		}
		for(var j = 0; j < this.notes.length; j++) {
			if(note_id === this.notes.indexOf(this.notes[j])) {
				this.notes.splice(this.notes.indexOf(this.notes[j]), 1);
			}
		}
	};

	// edit function 
	this.edit = function(note_id, new_content) {
		if(typeof note_id !== 'number') {
			return "enter only numbers";
		}
		if(typeof new_content !== 'string') {
			return 'enter alphabets';
		}
		if(new_content.length <= 0) {
			return 'try again';
		}
		for(var j = 0; j < this.notes.length; j++) {
			if(note_id === this.notes.indexOf(this.notes[j])) {
				this.notes.splice(this.notes.indexOf(this.notes[j]), 1, new_content);
			}
		}
	};
}

// validations
var okc = new NotesApp('Grey');
okc.create("This is a trial note");
okc.create("This is the second trial note");
okc.listNotes();
okc.get(1);
okc.search('another');
okc.delete(1);
okc.edit(0, 'This is the first trial note');
okc.listNotes();