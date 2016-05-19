// test for instantiation of the class
describe("Instance of the class", function () {
	it("Should set the author", function(){
		var mike = new NotesApplication("mike");
		expect(mike.author).toBe('mike');
	});
});


describe("Adds to an empty list", function() {
	var mike = new NotesApplication("mike");
	it("Should push note_content to mike.notes", function() {
		expect(typeof mike.create()).toBe(typeof(array));
	});
	it("Should push note_content to mike.notes", function() {
		expect(mike.create()).toContain([]);
	});
	it("Should return error when passed an empty string", function() {
		
		expect(mike.create("")).toBe("error");
	});
});


describe("Gets note ID", function() {
	it("Should return string", function() {
		expect(typeof this.get(note_id)).toBe(typeof(string)); 
	});	
});

describe("Search text", function() {
	it("Should take a string", function() {
		expect(typeof search_text).toBe(typeof(string))
	});
	it("throws an error", function() {
		expect(search(2)).toThrow(new Error("unrecognized"));
	});
});

describe("Deletes notes", function() {
	it("Should take an integer", function() {
		expect(typeof note_id).toBe(typeof(integer));
		expect(delete("some")).toBeNaN();
	});
});

describe("Edits notes", function() {
	it("Should take a string", function() {
		expect(edit("from", 2)).toBe("error");
		expect(edit(1, 3)).toBe("error");
	});
})