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
	
	this.get = function(note_id) {
  		return this.notes;
    };

  	this.search = function(search_text) {
  		for(var x in this.notes) {
  			if(search_text === x) {
  				console.log("Showing results for search " + search_text);
  				console.log("Note ID: " + this.note_id);
  				console.log(this.notes);
  				console.log("By author: " + author);
  			} else {
  				console.log("Not Found!");
			}
		}
	};

	this.delete = function(note_id) {
		if (note_id > -1) {
			a = this.notes.splice(note_id, 1);
			return a;
		}
	};

	this.edit = function(note_id, new_content) {
		note_id = new_content;
		return note_id
	};
}

