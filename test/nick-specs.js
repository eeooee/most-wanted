describe(('function isMatch'), () => {
    const isMatch = (element, object) => object == element;

    it('match the same integer', () => {
        expect(isMatch(2 ,2)).toBeTruthy();
    });

    it('match the same string', () => {
        expect(isMatch('female' ,'female')).toBeTruthy();
    });

    it('match string to integer', () => {
        expect(isMatch('1' ,1)).toBeTruthy();
    });

    it('false on input that does not match', () => {
        expect(isMatch(2, 1)).toBeFalsy();
    });
});

describe(('function matchingGender'), () => {
    const dataObject = [ { "gender": "male" }, { "gender": "female" }];
    const isMatch = (element, object) => object == element;

    const matchingGender = (element, objects, isMatch) =>
        objects.filter(object => isMatch(element, object.gender));

    let expectedResultsOne = [];
    expectedResultsOne.push(dataObject[0]);
    it('check if male matches any object', () => {
        expect(matchingGender('male', dataObject, isMatch)).toEqual(expectedResultsOne);
    });

    let expectedResultsTwo = [];
    expectedResultsTwo.push(dataObject[1]);
    it('check if female matches any object', () => {
        expect(matchingGender('female', dataObject, isMatch)).toEqual(expectedResultsTwo);
    });
});