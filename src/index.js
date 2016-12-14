var yo = require('yo-yo')

function view (state) {
  return yo`<div style=
              "background-color: dodgerblue;
color: white;
font-size:30px;
padding:10%;
width: 80%;
height: 80;">
    ${state.stuff}
  </div>`
}

module.exports = view
