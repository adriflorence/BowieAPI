use bowiedb;

db.albums.insert({
  title: "David Bowie",
  year: 1967,
  songs: [
    {side: 1, no: 1, title: "Uncle Arthur", length: "2:07"},
    {side: 1, no: 2, title: "Sell Me a Coat", length: "2:58"},
    {side: 1, no: 3, title: "Rubber Band", length: "2:17"},
    {side: 1, no: 4, title: "Love You till Tuesday", length: "3:09"},
    {side: 1, no: 5, title: "There Is a Happy Land", length: "2:07"},
    {side: 1, no: 6, title: "We Are Hungry Men", length: "2:59"},
    {side: 1, no: 7, title: "When I Live My Dream", length: "3:22"},

    {side: 2, no: 8, title: "Little Bombardier", length: "3:23"},
    {side: 2, no: 9, title: "Silly Boy Blue", length: "4:36"},
    {side: 2, no: 10, title: "Come and Buy My Toys", length: "2:07"},
    {side: 2, no: 11, title: "Join the Gang", length: "2:17"},
    {side: 2, no: 12, title: "She's Got Medals", length: "2:23"},
    {side: 2, no: 13, title: "Maid of Bond Street", length: "1:43"},
    {side: 2, no: 14, title: "Please Mr. Gravedigger", length: "2:35"}
  ]
});

db.albums.insert({
  title: "Space Oddity",
  year: 1969,
  songs: [
    {side: 1, no: 1, title: "Space Oddity", length: "5:16"},
    {side: 1, no: 2, title: "Unwashed and Somewhat Slightly Dazed", length: "6:13"},
    {side: 1, no: 3, title: "Letter to Hermione", length: "2:33"},
    {side: 1, no: 4, title: "Cygnet Committee", length: "9:35"},

    {side: 2, no: 5, title: "Janine", length: "3:25"},
    {side: 2, no: 6, title: "An Occasional Dream", length: "3:01"},
    {side: 2, no: 7, title: "Wild Eyed Boy from Freecloud", length: "4:52"},
    {side: 2, no: 8, title: "God Knows I'm Good", length: "3:21"},
    {side: 2, no: 9, title: "Memory of a Free Festival", length: "7:09"}
  ]
});
