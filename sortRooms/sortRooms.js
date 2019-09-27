// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

// Your last Python3 code is saved below:
// # position 1 is the start time 
// # position 2 is the end time 



const middle = [[26, 0, 3, 0, 1],
[27, 0, 3, 0, 1],
[7, 0, 2, 0, 1],
[8, 0, 2, 0, 1],
[13, 0, 2, 0, 1],
[21, 0, 2, 0, 1],
[33, 0, 2, 0, 1],
[46, 0, 2, 0, 1],
[1, 1, 3, 0, 1],
[15, 1, 3, 0, 1],
[39, 2, 4, 0, 1],
[51, 3, 6, 0, 1],
[18, 3, 5, 0, 1],
[31, 3, 5, 0, 1],
[41, 3, 5, 0, 1],
[43, 3, 5, 0, 1],
[45, 3, 5, 0, 1],
[47, 4, 6, 0, 1],
[48, 4, 6, 0, 1],
[55, 4, 6, 0, 1],
[56, 4, 6, 0, 1],
[83, 5, 7, 0, 1],
[59, 6, 8, 0, 1],
[60, 6, 8, 0, 1],
[76, 6, 8, 0, 1],
[81, 6, 8, 0, 1],
[90, 6, 7, 0, 1],
[65, 7, 10, 0, 1],
[61, 7, 9, 0, 1],
[67, 7, 9, 0, 1],
[69, 7, 9, 0, 1],
[92, 7, 8, 0, 1],
[63, 8, 10, 0, 1],
[95, 8, 8, 0, 1],
[78, 9, 14, 0, 1],
[77, 9, 13, 0, 1],
[85, 9, 13, 0, 1],
[73, 9, 11, 0, 1],
[82, 9, 11, 0, 1],
[87, 9, 11, 0, 1],
[94, 10, 14, 0, 1],
[79, 10, 11, 0, 1],
[89, 10, 11, 0, 1],
[0, 11, 17, 0, 1],
[93, 11, 14, 0, 1],
[6, 12, 18, 0, 1],
[75, 12, 13, 0, 1],
[40, 13, 18, 0, 1],
[52, 14, 17, 0, 1],
[91, 14, 14, 0, 1],
[2, 18, 20, 0, 1],
[10, 18, 20, 0, 1],
[23, 18, 20, 0, 1],
[16, 18, 19, 0, 1],
[17, 18, 19, 0, 1],
[19, 18, 19, 0, 1],
[72, 18, 19, 0, 1],
[29, 18, 18, 0, 1],
[86, 18, 18, 0, 1],
[3, 19, 21, 0, 1],
[5, 19, 21, 0, 1],
[24, 19, 21, 0, 1],
[36, 19, 21, 0, 1],
[4, 20, 22, 0, 1],
[22, 20, 22, 0, 1],
[25, 20, 22, 0, 1],
[32, 20, 22, 0, 1],
[14, 21, 22, 0, 1],
[37, 21, 22, 0, 1],
[53, 21, 22, 0, 1],
[71, 22, 22, 0, 1],
[74, 22, 22, 0, 1],
[80, 22, 22, 0, 1],
[88, 22, 22, 0, 1],
[50, 23, 24, 0, 1]];
console.log('meetings:',middle.length)
const transform = (arr) => arr.map(elem => [elem[1], elem[2]]);
let findMinRooms = (arr) => {
  const transformed = transform(arr);
  const sorted = transformed.sort((a, b) => (a[0] - b[0]) || (b[1] - a[1]));
  const mapped = sorted.map(elem => elem[0]);
  // console.log(sorted);
  let rooms = 0;
  const log = [];

  sorted.forEach((slot, start) => {
    if (slot) {
      let count = 1;
      while (1) {
        let index = -1;
        for (let i = start; i < sorted.length; i++) {
          if (mapped[i] >= slot[1]) {
            index = i;
            break;
          }
        }
        if (log[rooms]) {
          log[rooms].push(slot);
        } else {
          log[rooms] = [slot];
        }
        if (index > -1 && count < 4) {
          slot = sorted[index];
          mapped[index] = 0;
          sorted[index] = 0;
          count++;
        } else {
          // console.log('Room #', rooms,  has , count, 'meetings')
          rooms++;
          break;
        }
      }
    }
  });
console.log(log);
  return rooms; 
};

const test = [
  [0,0,1],
  [0,1,2],
  [0,2,3],
  [0,3,4],
  [0,4,5],
  [0,0,2],
  [0,1,4],
  [0,2,5]
];

console.log(
  findMinRooms(middle)
);

console.log(
  findMinRooms(
    test)
);
