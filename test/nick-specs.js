describe(('function isMatch'), () => {
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

    it('check if male matches any object', () => {
        expect(matchingGender('male', dataObject, isMatch)[0]).toEqual(dataObject[0]);
    });

    it('check if female matches any object', () => {
        expect(matchingGender('female', dataObject, isMatch)[0]).toEqual(dataObject[1]);
    });
});