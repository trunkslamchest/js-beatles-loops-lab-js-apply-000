// add solution here
function theBeatlesPlay(musicians, instruments) {
  var new_arr = []
    for (i = 0; i < 4 ; i++) {
      new_arr.push(musicians.shift() + ' plays ' + instruments.shift())
    }
  return new_arr
}

function johnLennonFacts(array) {
  var new_arr = []
    while (array.length > 0) {
      new_arr.push(array.shift() + '!!!')
    }
}

function iLoveTheBeatles() {
  
}