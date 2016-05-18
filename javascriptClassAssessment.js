function NotesApplication(author) {
	this.author = author;
	this.notes =[];
	
	var create = function(note_content) {
		note_content += this.notes
		return note_content
	};
	
	var listNotes = function() {
		for (i in this.notes) {
			return i 
		};
	}
	var get = function(note_id) {
		for (c in this.notes) {
			return this.notes[c]
		};
	}
	
	var search = function(search_text) {
		for (a in this.notes) {
			if (search_text === a) {
				return a
			}
		}
	};

	var delete = function(note_id) {
		if (note_id > -1) {
			this.notes.splice(note_id, 1)
		}
	}

	var edit = function(note_id, new_content) {
		new_content = note_id;
		return new_content
	}
}

