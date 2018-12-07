function check() {
  finalScore = 0

  let Q1 = document.quiz.Q1.value
  let Q2 = document.quiz.Q2.value
  let Q3 = document.quiz.Q3.value
  let Q4 = document.quiz.Q4.value
  let Q5 = document.quiz.Q5.value

  if (Q1 == 'Lily Potter') {
    finalScore++
  }
  if (Q2 == 6) {
    finalScore++
  }
  if (Q3.toLowerCase() == 'horcrux') {
    finalScore++
  }
  if (Q4 == 'snake') {
    finalScore++
  }
  if (Q5 == 'galleon') {
    finalScore++
  }

  let pictures = ['images/wizard.jpg', 'images/owl.jpg', 'images/mcgonagall.jpg', 'images/dementor.jpg']
  let message = ["You're a wizard Harry!", "Great Job, an O on your O.W.L's", "Could have done better", "Banished to Azkaban" ]


  let range
  let totalQuestions = 5
  if (finalScore == totalQuestions) {
    range = 0
  } else if (finalScore/totalQuestions > 0.65) {
    range = 1
  } else if (finalScore > 0) {
    range = 2
  } else {range = 3}


  document.getElementById('submitted').style.visibility = 'visible'


  document.getElementById('message').innerHTML = message[range]
  document.getElementById('finalScore').innerHTML = 'Your final score is ' + finalScore
  document.getElementById('picture').src = pictures[range]
}
