function NotesApplication(author) {
	this.author = author;
	this.notes =[];
	
	this.create = function(note_content) {
		return this.notes.push('note_content');
	};
	
	this.listNotes = function() {
		this.note_id = function() {
		for (var i = 0; i < this.notes.length; i++) {
			return i; 
		}
		};
		console.log("Note ID: " + this.note_id());
  		console.log(this.notes);
  		console.log("By author: " + author);
  		};
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

