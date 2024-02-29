const quizData = [
    {
      question: 'In which year was Shoprite founded?',
      options: ['1965', '1975', '1983', '1990'],
      answer: '1965',
    },
    {
      question: 'Who is the founder of Checkers, one of South Africa\'s leading supermarket chains?',
      options: [
        'John Checkers',
        'Raymond Ackerman',
        'Harry Shoprite',
        'David Checkers',
      ],
      answer: 'Raymond Ackerman',
    },
    {
      question: 'n which year did Shoprite open its first store outside of South Africa?',
      options: ['1970', '1985', '1995', '2000'],
      answer: '1985',
    },
    {
      question: 'How many African countries does Shoprite currently operate in?',
      options: ['5', '10', '15', '20'],
      answer: '15',
    },
    {
      question: 'What distinguishes a Checkers Hyper store from a traditional Checkers supermarket?',
      options: ['Larger store size', 'Exclusive product lines', 'Lower prices', 'All of the above'],
      answer: 'Larger store size',
    },
    {
      question: 'What is the name of Shoprite\'s charitable foundation dedicated to fighting hunger and supporting communities?',
      options: ['Shoprite Cares', 'Shoprite Foundation', 'Shoprite Hunger Relief', 'Shoprite Giving Back'],
      answer: 'Shoprite Foundation',
    },
    {
      question: 'Which of the following services is NOT offered by Shoprite?',
      options: [
        'Money transfer services',
        'Pharmacy',
        'Electronics store',
        'Liquor store',
      ],
      answer: 'Electronics store',
    },
    {
      question: 'What is the name of Shoprite\'s loyalty program that offers discounts and rewards to customers?',
      options: ['Shoprite Plus', 'Shoprite Loyalty Club', 'Shoprite Rewards', 'Shoprite Xtra Savings'],
      answer: 'Shoprite Xtra Savings',
    },
    {
      question: 'Which of the following is NOT a private label brand owned by Shoprite?',
      options: [
        'No Name',
        'Rite Brand',
        'Housebrand',
        'Shopper\'s Choice',
      ],
      answer: 'Shopper\'s Choice',
    },
    {
      question: 'What is the primary focus of Usave stores within the Shoprite Holdings group?',
      options: [
        'Premium shopping experience',
        'Discount and value offerings',
        'Gourmet food selection',
        'Organic and health foods',
      ],
      answer: 'Discount and value offerings',
    },
    {
      question: 'What is the name of Shoprite\'s annual sales event where customers can find deep discounts on a wide range of products?',
      options: ['Mega Sale Madness', 'Black Friday Bonanza', 'Red Tag Extravaganza', 'Shoprite Spectacular Sale'],
      answer: 'Black Friday Bonanza',
    },
    {
      question: 'What is the name of the employee recognition program introduced by Shoprite to acknowledge outstanding performance and dedication?',
      options: [
        'Star Employee Awards',
        'Employee of the Month',
        'Everyday Heroes',
        'Recognition Rewards',
      ],
      answer: 'Everyday Heroes',
    },
    {
      question: 'What does Usave promise to customers as part of its commitment to providing value?',
      options: [
        'Premium shopping experience',
        'Discount and value offerings',
        'Gourmet food selection',
        'Organic and health foods',
      ],
      answer: 'Discount and value offerings',
    },
    {
      question: 'What is the name of Checkers\' mobile app that allows customers to browse weekly specials, create shopping lists, and access personalized discounts?',
      options: ['Checkers Go', 'Checkers Mobile+', 'Checkers On-the-Go', 'Checkers Sixty60'],
      answer: 'Checkers Sixty60',
    },
    {
      question: 'Shoprite\'s deli section is famous for its delicious fried chicken. What is the secret ingredient used in Shoprite\'s signature fried chicken recipe?',
      options: ['Buttermilk', 'Honey', 'Paprika', 'Lemon zest'],
      answer: 'Buttermilk',
    },
    {
      question: 'What does Usave promise to customers as part of its commitment to providing value?',
      options: ['Everyday low prices', 'Premium quality products', 'Price matching guarantee', 'Exclusive discounts for members'],
      answer: 'Everyday low prices',
    },
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }

  var splashScreen = document.querySelector('.splash');
  splashScreen.addEventListener('click',()=>{
    splashScreen.style.opacity = 0;
    setTimeout(()=>{
      splashScreen.classList.add('hidden')
    },610)
  })
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();