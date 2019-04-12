'use strict';

console.log('DATA CONNECTED');

// DATA STRUCTURE USING DEMO VALUES
let drums =
  {
    left: [
      {
      startPosition: 0,
      endPosition: 10
      }
      ,
      {
        startPosition: 1,
        endPosition: 1
      }
    ],
    right: [
      {
        startPosition: 100,
        endPosition: 120
      },
      {
        startPosition: 150,
        endPosition: 165
      }
    ]
  };

// HOW TO REFERENCE DRUMS DATA:
// console.log('DRUMS ARRAY: ', drums);
// console.log('DRUMS LEFT ARRAY: ', drums.left);
// console.log('DRUMS LEFT ARRAY, FIRST [0] INDEX: ', drums.left[0]);
// console.log('DRUMS LEFT ARRAY, FIRST [0] INDEX, STARTPOSITION: ', drums.left[0].startPosition);
// console.log('DRUMS LEFT ARRAY, FIRST [0] INDEX, ENDPOSITION: ', drums.left[0].endPosition);
// console.log('DRUMS LEFT ARRAY, SECOND [1] INDEX: ', drums.left[1]);
// console.log('DRUMS LEFT ARRAY, SECOND [1] INDEX, STARTPOSITION: ', drums.left[1].startPosition);
// console.log('DRUMS LEFT ARRAY, SECOND [1] INDEX, ENDPOSITION: ', drums.left[1].endPosition);
// console.log('DRUMS RIGHT ARRAY: ', drums.right);
// console.log('DRUMS RIGHT ARRAY, FIRST [0] INDEX: ', drums.right[0]);
// console.log('DRUMS RIGHT ARRAY, FIRST [0] INDEX, STARTPOSITION: ', drums.right[0].startPosition);
// console.log('DRUMS RIGHT ARRAY, FIRST [0] INDEX, ENDPOSITION: ', drums.right[0].endPosition);
// console.log('DRUMS RIGHT ARRAY, SECOND [1] INDEX: ', drums.right[1]);
// console.log('DRUMS RIGHT ARRAY, SECOND [1] INDEX, STARTPOSITION: ', drums.right[1].startPosition);
// console.log('DRUMS RIGHT ARRAY, SECOND [1] INDEX, ENDPOSITION: ', drums.right[1].endPosition);