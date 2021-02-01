const Sort = require('./sort');

describe( 'Sort', () => {

	const comments = [
		{
			"id": 1,
			"date": "2019-04-23T22:26:43.511Z",
			"name": "Dawud Esparza",
			"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed gravida orci.",
			"likes": 33
		},
		{
			"id": 2,
			"date": "2019-04-23T19:26:41.511Z",
			"name": "Lennie Wainwright",
			"body": "Quisque maximus augue ut ex tincidunt sodales. Nullam interdum consectetur mi at pellentesque.",
			"likes": 4
		},
		{
			"id": 3,
			"date": "2019-04-23T18:26:48.511Z",
			"name": "Mindy Sykes",
			"body": "Nam sit amet diam rutrum, venenatis est ac, tempus massa. Etiam tempus libero sit amet bibendum lacinia. Quisque ligula dolor, venenatis quis urna non, tristique laoreet erat.",
			"likes": 58
		},
		{
			"id": 4,
			"date": "2019-04-24T08:23:49.511Z",
			"name": "Arianne Ashton",
			"body": "Vivamus sit amet turpis nulla. Mauris rhoncus nulla in lobortis rhoncus.",
			"likes": 91
		},
		{
			"id": 5,
			"date": "2019-04-24T07:26:42.511Z",
			"name": "Courteney Moreno",
			"body": "Mauris ut dolor ipsum. Phasellus imperdiet massa a dui imperdiet dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
			"likes": 7
		}
	];


	describe( 'formatDate', () => {
		it("should match the date format", () => {
			expect(Sort.formatDate('2019-04-23T22:26:43.511Z')).toBe('23 Apr 2019 10:26PM');
		});
	});

	describe( 'sortCommentsByLikes', () => {
		it("should sort the comments by likes", () => {
			expect(Sort.sortCommentsByLikes(comments)).toBeSorted({ descending: true });
		});

	});

	describe( 'sortCommentsByDate', () => {

		it("should sort the comments by date", () => {
			expect(Sort.sortCommentsByDate(comments)).toBeSorted({ descending: true })
		});

	});
});
