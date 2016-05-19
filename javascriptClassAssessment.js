function NotesApplication(author) {
	this.author = author;
	this.notes =[];
	
	this.create = function(note_content) {
		return this.notes.push([this.notes.length + 1,note_content]);
	};
	
	this.listNotes = function() {

		for (var i = 0; i < this.notes.length; i++) {

			console.log("Note ID: " + this.notes[i][0]);
	  		console.log(this.notes[i][1]);
	  		console.log("By author: " + author);
		}
	};
	
	this.get = function(note_id) {
  		for (var i = 0; i < this.notes.length; i++) {
			if(this.notes[i][0] === note_id) {
				return this.notes[i][1];
			}
		}
  		
    };

  	this.search = function(search_text) {
  		console.log("Showing results for search " + '"'+search_text+'"');
  		var result = [];
  		for(var x = 0; x < this.notes.length;x++) {
  			
  			if(this.notes[x][1].includes(search_text)) {
  				result.push(this.notes[x]);
  			} 
  			
		}
		
		if(result.length > 0) {
			for(var j = 0; j < result.length;j++) {
				console.log();
	  			console.log("Note ID: " + result[j][0]);
	  			console.log(result[j][1]);
	  			console.log("By author: " + author);
			}
		} else {
			console.log("No match found!");
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
		return note_id;
	};
}

var okoro = new NotesApplication("okoro");
okoro.create("This is a note");
okoro.create("Second note");
console.log(okoro.get(2));
okoro.search('ast');