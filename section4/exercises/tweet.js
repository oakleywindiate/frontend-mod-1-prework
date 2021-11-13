/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
      this.author = author;
      this.content = content;
      this.timeStamp = timeStamp;
      this.numberOfLikes = numberOfLikes;
      this.comments = comments;
  }

  updateLikes(numberOfLikes) {
      this.numberOfLikes += this.numberOfLikes;
    }

  addComment(comments) {
      this.comments.push(comments);
    }
  };

var firstTweet = new Tweet("Anna", "I love my dog!", "16:45", 2, ["Love this!", "So cute!"]);
firstTweet.updateLikes(2);
console.log(firstTweet);

var secondTweet = new Tweet("Jamie", "Brew day", "12:22", 16, ["Nice.", "Wow, that looks amazing!", "So jealous"]);
secondTweet.updateLikes(4);
secondTweet.addComment("Yum!");
console.log(secondTweet);

var thirdTweet = new Tweet("Tame Impala", "New Concert Dates", "20:35", 6007, ["can't wait!!", "Wish they were coming to Texas..."]);
thirdTweet.updateLikes(58);
thirdTweet.addComment("Looks cool!");
console.log(thirdTweet);
