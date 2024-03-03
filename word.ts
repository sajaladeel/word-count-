import inquirer from "inquirer";

const answers: {
    Sentence:string
}= await inquirer.prompt([
    {
        name:"Sentence",
        type:"input",
        message:"ENTER YOUR SENTENCE TO COUNT THE WORDS:"
    }
])

const words =answers.Sentence.trim().split("");
console.log(`YOUR SENTENCE's WORD COUNT IS:${words.length}`)
