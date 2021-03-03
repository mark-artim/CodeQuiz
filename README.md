# CodeQuiz
WebAPI's Homework

## Description 

This code quiz asks a series of questions. The user attempts to answer the code-related questions within the time limit of 60 seconds. Incorrect answers reduce the user's remaining time by 15 seconds. The user's final score is the time remaining. The quicker they answer correctly, the higher their score. Once they have answered all the questions if there is any time remaining they are prompted to enter their initials which will be stored in local storage in a "leaderboard" that presents a sorted list of users and thier scores with the highest scores at the top. The user can choose to take teh quiz again and is allowed to clear the local storage if they confirm they wish to do so. The time decrement for wrong answers must be the total time in seconds divided by the number of questions so if they simply click the worng answer 4 times fast they cannot score positive points. Be carefult to make sure to reflect the time remaining in all cases such as if they get the last question wrong teh time must be decremented and displayed on screen prior to stopping the quiz.  

## Table of Contents (Optional)

This README is very not long but here is a table of contents nonetheless.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

The site is a two page html document so installation is straightforward: (1) push code to Github (2) Navigate to live link and make sure the site displays correctly.

The site can be reached at [PW Generator](https://mark-artim.github.io/CodeQuiz/) 

## Usage 

The current website as of 2/22/2021 looks like this:

![Live Site Screenshot](./assets/CodeQuizHomePage.jpeg)
![Live Site Screenshot](./assets/QuizinAction.jpeg)
![Live Site Screenshot](./assets/CodeQuizLeadeboard.jpeg)


## Credits

Mim was instrumental in teaching me how to correctly store and retrieve the local storage objects.


## License

I am not sure what exactly we shoudl do for licensing and I (hope) itis not critical to this assignemnt but it might look soemthign like this:

All rights, including copyright, of all text, images, code, information, and other material contained in the mark-artim/github.io/CodeQuiz.com website are owned by codequiz.com and are protected by International Copyright Legislation. 

---

## Contributing

None at this time.

## Tests

No automated test exist at this time.
