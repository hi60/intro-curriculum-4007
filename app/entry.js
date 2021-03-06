'use strict';
const  $ = require('jquery');
const  block = $('#block');
const  scalingButton = $('#scaling-button');
const  movingButton = $('#moving-button');
const  shakingButton = $('#shaking-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px'}, 500);
});

shakingButton.click(() => {
  block.animate({ 'marginTop': '50px'}, 800);
  block.animate({ 'marginTop': '30px'}, 800);
})

