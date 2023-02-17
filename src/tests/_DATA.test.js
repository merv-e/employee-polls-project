// const { describe } = require("@jest/globals");
// const { async } = require("q");

const { _saveQuestion, _saveQuestionAnswer} = require("../utils/_DATA");

//tests for saving a poll
describe("_saveQuestion", () => {
    it('should return saved question and all expected fields are populated when correctly formatted data is passed to the function', async() => { 
        const result = await _saveQuestion({
            optionOneText : "Use React for the new project",
            optionTwoText: "Use Angular for the new project",
            author: "tylermcginnis",
        });
        expect(result).toBeTruthy();
    });

    it('should fail if some of the info is missing or incorrect', async() => {
        const result = _saveQuestion({
            optionOneText : "Use React for the new project",
            optionTwoText: "",
            author: "",
        });
        await expect(result).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });

});

//tests for saving an answer to a poll 
describe("_saveQuestionAnswer", () => {
    it('the result should be truthy if the info provided is correct and not missing any relevant info', async() => {
        const result = _saveQuestionAnswer({ authedUser: "sarahedo" , 
        qid: "ldublc514nekxmv6m8so5", 
        answer :"optionOne"
        });
        await expect(result).toBeTruthy();
    });

    it('results with an error if formatted data is incorrect or lack of any info', async() => {

        const result = _saveQuestionAnswer({ authedUser: "sarahedo" , 
        qid: "", 
        answer :"optionOne"
        });

        await expect(result).rejects.toMatch("Please provide authedUser, qid, and answer");
    });
});

