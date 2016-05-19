// test for instantiation of the class
describe("Instance of the class", function () {
	it("Should set the author", function(){
		var mike = new NotesApplication("mike");
		expect(mike.author).toBe('mike');
	});
});


describe("Adds to an empty list", function() {
	
	it("Should push note_content to mike.notes", function() {
		var mike = new NotesApplication("mike");
		mike.create("This is note one");
		expect(typeof mike.notes).toBe('object');
	});
	it("Should push cane to mike.notes", function() {
		var mike = new NotesApplication("mike");
		expect(mike.notes.length).toEqual(0);
	});
	it("Should return error when passed an empty string", function() {
		var mike = new NotesApplication("mike");
		
		expect(mike.create("")).toBe("error");
	});
});


describe("Gets note ID", function() {
	it("Should return string", function() {
		var mike = new NotesApplication("mike");
		mike.create('This is second note');
		expect(typeof mike.get(1)).toBe('string'); 
		expect(mike.get(1)).toBe('This is second note'); 
	});	
});

describe("Search text", function() {
	it("Should take a string", function() {
		var mike = new NotesApplication("mike");
		mike.create('This is second note');

		expect(typeof search_text).toBe(typeof(string))
	});
	it("Should return error", function() {
		var mike = new NotesApplication("mike");
		expect(mike.search(2)).toBe("error");
	});
});

describe("Deletes notes", function() {
	var mike = new NotesApplication("mike");
	it("Should take an integer", function() {
		expect(typeof note_id).toBe(typeof(integer));
		expect(delete("some")).toBeNaN();
	});
});

describe("Edits notes", function() {
	it("Should take a string", function() {
		var mike = new NotesApplication("mike");
		expect(edit("from", 2)).toBe("error");
		expect(edit(1, 3)).toBe("error");
	});
})