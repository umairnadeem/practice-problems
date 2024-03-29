/**
 * Given an array containing a deck of cards, implement a function that shuffles
 * the deck.
 *
 * Example:
 *  var deck = orderedDeck();
 *  // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
 *  shuffleDeck(deck);
 *  // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]
 *
 * Note:
 *   A shuffled deck should be completely random. That means that a given card should
 *   be as likely as any other to appear in a given deck index, completely independent
 *   of the order of the input deck. Think carefully about how to be sure your algorithm
 *   generates a properly shuffled deck-- it is easy to accidentally create a biased algorithm.
 *
 * Extra credit:
 *   - Even a naive algorithm can easily run in linear time. However, does your
 *     algorithm remain unbiased as N (the deck size) increases? How do you know?
 * 
 *     A: As the deck size increases, my algorithm still remains unbiased since the random number generated  *        will be from 0 to 1 and multiplied by deck size to generate the random index. The random element            itself is not influenced by deck size.
 * 
 *   - Once you have created a properly random, linear algorithm, what is its space complexity?
 *     There is an algorithm that uses O(N) time and O(1) space (i.e., an in-place shuffle).
 * 
 *     A: The space complexity of my algorithm is currently linear, since it generates a duplicate deck.
 *
 * A further note on randomness:
 *   Technically, a computer-shuffled deck will usually be "pseudorandom",
 *   not "truly" random. However, the difference between the two is too small to
 *   be detectable by any known test.
 *   See http://en.wikipedia.org/wiki/Pseudorandom_number_generator .
 *
 *   A human shuffler is much more biased; it takes around seven normal "riffle"
 *   shuffles before a real deck is actually randomized.
 *   See https://www.dartmouth.edu/~chance/teaching_aids/books_articles/Mann.pdf .
 */

// create an empty output deck
// create a duplicate working deck
// declare an empty random variable

// loop over the input deck
  // generate a random index, bounded to deck size
  // push the value of random index from working deck into output deck
  // remove that index from working deck

// return output deck

var shuffleDeck = function(deck) {
  // for (var i = 0; i < 2; i++) {
    deck.forEach((elem, i) => {
      var random = Math.floor(Math.random()*(deck.length - i) + i);
      [deck[random], deck[i]] = [deck[i], deck[random]];
    });
  // }
  return deck;
};

// console.log(shuffleDeck(["A♥","2♥","3♥"]))

// Ordered deck generator provided for your testing convenience
// (You may alter this function, but an unaltered copy will be used for tests.)
var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};