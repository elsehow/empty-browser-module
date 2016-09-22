var yo = require('yo-yo')
/*
   example state:
   {
     last_observed: [
       { time: 'iso time',
       label: 'some label' },
       ....
     ],
     predicted: {
       'Moves off': 220,
       'walking': 1,
       'cycling': 2,
       'Unknown place': 2,
       'South Hall': 1,
       "Noura's house": 2
     }
   }
*/

const WIDTH   = 300
const PADDING = 5
const MARGIN  = 3
const COLORS = [
  "#7100FA",
  "#C614C7",
  "#943B94",
  "#FAE43E",
  "aliceblue",
  "blueviolet",
  "cadetblue",
  "chartreuse",
  "crimson",
  "DarkGoldenRod"
]

function observed (moves) {
  return yo`<div>
    ${moves.map(function (item) {
      return yo`<div style=
        "border:  #222 1px solid;
         width:   ${WIDTH/3}px;
         padding: ${PADDING}px;
         margin:  auto;">
        ${item.label}
        <span style="
           font-size:8pt;
           color:#ccc;
          ">
          ${item.time}
        </span>
      </div>`
    })}
  </div>`
}

function pieBar (proportions) {
  function proportionalBar (pred) {
    return yo`<div>
      <div>
      ${pred.label} 
    </div>
      <div style=
        "width:      ${(WIDTH/9)*pred.percent}px;
         background: ${pred.color};
         border:     #222 1px solid;
         height:     30px;
         float:      left;
         margin:     0 20px 0 0;
         ">
      </div>
    </div>`
  }
  return yo`<div>
    ${proportions.map(proportionalBar)}
  </div>`
}

function predicted (prediction) {
  let sum = Object.keys(prediction)
      .reduce((acc, cur) => acc+=prediction[cur], 0)
  let proportions = Object.keys(prediction)
      .map((cur, i)=> {
        return {
          label:   cur,
          percent: prediction[cur]/sum,
          color:   COLORS[i],
        }
      })
  return yo`<div style=
    "margin: auto;">
    ${pieBar(proportions)}
  </div>`
  // ${legend(proportions)}
}

function view (state) {
  return yo`<div style="
   width: ${WIDTH}px;
   margin: auto;
   ">
    <div>
    ${observed(state.last_observed)}
    ${predicted(state.prediction)}
  </div>`
}

module.exports = view
