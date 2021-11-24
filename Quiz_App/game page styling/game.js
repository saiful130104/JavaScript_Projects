console.log(`Hello quick quiz application javascript!!!!!`)
const question =document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'))

class MakeQuestion{
    constructor(question, choice_1, choice_2, choice_3, choice_4, answer){
        this.question = question;
        this.choice_1 = choice_1;
        this.choice_2 = choice_2;
        this.choice_3 = choice_3;
        this.choice_4 = choice_4;
        this.answer = answer;
    }
}
question1 = new MakeQuestion("Which one is preferable to you?","C","C++","Java","JavaScript", 1)
question2 = new MakeQuestion("Which one is preferable to you?","C","C++","Java","JavaScript", 2)
question3 = new MakeQuestion("Which one is preferable to you?","C","C++","Java","JavaScript", 3)
question4 = new MakeQuestion("Which one is preferable to you?","C","C++","Java","JavaScript", 4)
console.log(question1)