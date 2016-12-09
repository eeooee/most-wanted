/* eslint no-undef: "off" */
describe(('function ConvertStringHeightToInches'), function() {

    it('convert string height to inches', function() {
        expect(convertHeightToInches("5'0'")).toEqual(60);
    });
    it('converts string height to inches',function(){
        expect(convertHeightToInches("0")).toBeNaN();
    });
    it('attempting to convert negative height', function(){
        expect(convertHeightToInches("-5'0'")).not.toEqual(60);
    });

});

describe(('function getAge'), function(){
 
    it('converts a string birthday as (mm/dd/yyyy/) to an age in years', function(){
        expect(getAge("03/11/1993")).toEqual(23);
    });
    
    it('attempting to convert date formatted incorrectly...', function(){
        expect(getAge("13/11/1993")).not.toEqual(23);
    });

});

describe(('function sortByAge'), function(){

    it("sorting an array by element.dob, ascending,", function(){
        expect((sortByAge([{"dob":"1/18/1949"}, {"dob":"3/11/2013"}]))).toEqual([{"dob":"1/18/1949"}]);
    });
    
    it("sorting an array of close ages(delta=1 day) by element.dob, ascending,", function(){
        expect(sortByAge([{"dob":"3/10/2013"}, {"dob":"3/11/2013"}, {"dob":"3/12/2013"}, {"dob":"3/09/2013"}])).toEqual([{"dob":"3/09/2013"}]);
    });
})

describe(('function getParents'), function(){

    it("retrieving the parents of a user with two parents", function () {
        expect(getParents({"id": "1","parents":[3,2]}, [{"id":2},{"id":3},{"id":4}],[] )).toContain({"id":3}, {"id":2});
    });
    it("retrieving the parents of a user with one parent", function () {
        expect(getParents({"id": "1","parents":[2]}, [{"id":2},{"id":3},{"id":4}],[] )).toContain({"id":2});
    }); 
    it("retrieving the parents of a user with no parents", function () {
        expect(getParents({"id": "1","parents":[]}, [{"id":2},{"id":3},{"id":4}],[] ).length).toBe(0);
    });
})

describe(('function isMatch'), () => {
    it('match the same integer', () => {
        expect(isMatch(2, 2)).toBeTruthy();
    });

    it('match the same string', () => {
        expect(isMatch('female', 'female')).toBeTruthy();
    });

    it('match string to integer', () => {
        expect(isMatch('1', 1)).toBeTruthy();
    });

    it('false on input that does not match', () => {
        expect(isMatch(2, 1)).toBeFalsy();
    });
});

describe(('function matchingGender'), () => {
    const dataObject = [
        { "gender": "male" },
        { "gender": "female" }];

    let expectedResultsOne = [{ "gender": "male" }];
    it('check if male matches any object', () => {
        expect(matchingGender('male', dataObject, isMatch)).toEqual(expectedResultsOne);
    });

    let expectedResultsTwo = [{ "gender": "female" }];
    it('check if female matches any object', () => {
        expect(matchingGender('female', dataObject, isMatch)).toEqual(expectedResultsTwo);
    });
});

describe(('function matchingSpouse'), () => {
    const dataObject = [
        { "id": 313207561, "currentSpouse": 313997561 },
        { "id": 313997561, "currentSpouse": 313207561 },
        { "id": 969837479, "currentSpouse": null }];

    let firstPerson = dataObject[0];
    let expectedResultsOne = [dataObject[1]];
    it('check if person one spouse id matches person two id', () => {
        expect(matchingSpouse(firstPerson, dataObject, isMatch)).toEqual(expectedResultsOne);
    });

    let secondPerson = dataObject[1];
    let expectedResultsTwo = [dataObject[0]];
    it('check if person two spouse id matches person one id', () => {
        expect(matchingSpouse(secondPerson, dataObject, isMatch)).toEqual(expectedResultsTwo);
    });
});

describe(('function isChildren'), () => {
    let parent = { "id": 693243224, "parents": [], };
    let child = { "id": 822843554, "parents": [693243224] };

    it('check if parents id equals one object id', () => {
        expect(isChildren(parent, child)).toBeTruthy();
    });

    it('check for false when parents id does not equal object id', () => {
        expect(isChildren(child, parent)).toBeFalsy();
    });
});

describe(('function matchingChildren'), () => {
    let dataObject = [
        { "id": 313998000, "parents": [313207561, 313997561] },
        { "id": 822843554, "parents": [693243224, 888201200] },
        { "id": 819168108, "parents": [693243224] },
        { "id": 969837479, "parents": [693243224, 888201200] },
        { "id": 313207561, "parents": [693243224, 888201200] }]
    let parent = { "id": 693243224, "parents": [], };
    let expectedResults = [
        { "id": 822843554, "parents": [693243224, 888201200] },
        { "id": 819168108, "parents": [693243224] },
        { "id": 969837479, "parents": [693243224, 888201200] },
        { "id": 313207561, "parents": [693243224, 888201200] }]

    it('check if children match first parents', () => {
        expect(matchingChildren(parent, dataObject, isChildren)).toEqual(expectedResults);
    });
});

describe(('function isParent'), () => {
    let first = 0;
    let second = 1;
    let parents = [ 693243224 ];
    let child = [693243224, 888201200];

    it('check for parents matching users parents', () => {
        expect(isParent(child, first, parents, first)).toBeTruthy();
    });

    it('check for parents not matching users parents', () => {
        expect(isParent(child, second, parents, first)).toBeFalsy();
    });
});

describe(('function matchingParents'), () => {
    let dataObject = [
        { "id": 313998000, "parents": [313207561, 313997561] },
        { "id": 822843554, "parents": [693243224, 888201200] },
        { "id": 819168108, "parents": [693243224] },
        { "id": 969837479, "parents": [693243224, 888201200] },
        { "id": 313207561, "parents": [693243224, 888201200] }]
    let parents = [693243224, 888201200];
    let parent = [888201200];
    let expectedResults = [
        { "id": 822843554, "parents": [693243224, 888201200] },
        { "id": 819168108, "parents": [693243224] },
        { "id": 969837479, "parents": [693243224, 888201200] },
        { "id": 313207561, "parents": [693243224, 888201200] }]

    let expectedResultsTwo = [
        { "id": 822843554, "parents": [693243224, 888201200] },
        { "id": 969837479, "parents": [693243224, 888201200] },
        { "id": 313207561, "parents": [693243224, 888201200] }]

    it('check for matching parents out of list', () => {
        expect(matchingParents(parents, dataObject, isParent)).toEqual(expectedResults);
    });

    it('check for only matching one parents out of list', () => {
        expect(matchingParents(parent, dataObject, isParent)).toEqual(expectedResultsTwo);
    });
});

describe(('function isNotObject'), () => {
    let personOne = { "id": 1 };
    let personTwo = { "id": 2 };
    it('check that personOne does not match personTwo', () => {
        expect(isNotObject(personOne, personTwo)).toBeTruthy();
    });
});

describe(('function excludeMatchingObjects'), () => {
    let dataObject = [{ "id": 1 }, { "id": 2 }, { "id": 3 }];
    let person = dataObject[0];
    let expectedResults = [dataObject[1], dataObject[2]];
    it('exclude person from list of people', () => {
        expect(excludeMatchingObjects(person, dataObject, isNotObject)).toEqual(expectedResults);
    });
});

describe(('function getFamily'), () => {
    let dataObject = [
        { "id": 888201200, "parents": []},
        { "id": 313998000, "parents": [313207561, 313997561] },
        { "id": 822843554, "parents": [693243224, 888201200] },
        { "id": 819168108, "parents": [693243224] },
        { "id": 969837479, "parents": [693243224, 888201200] },
        { "id": 313207561, "parents": [693243224, 888201200] }];
    let testPersonOne = { "id": 693243224, "parents": [], };
    let expectedSpouse = [ ];
    it('check for matching spouse after going through getFamiy', () => {
        expect(getFamily(testPersonOne, dataObject, getParents, isMatch, isParent, matchingParents, matchingSpouse, isChildren, matchingChildren, isNotObject, excludeMatchingObjects).spouse).toEqual(expectedSpouse);
    });
    let expectedChildren = [
        { "id": 822843554, "parents": [693243224, 888201200] },
        { "id": 819168108, "parents": [693243224] },
        { "id": 969837479, "parents": [693243224, 888201200] },
        { "id": 313207561, "parents": [693243224, 888201200] }];
    it('check for matching children after going through getChildren', () => {
        expect(getFamily(testPersonOne, dataObject, getParents, isMatch, isParent, matchingParents, matchingSpouse, isChildren, matchingChildren, isNotObject, excludeMatchingObjects).children).toEqual(expectedChildren);
    });

    let testPersonTwo = { "id": 313998000, "parents": [313207561, 313997561] };
    let expectedParents = [ { "id": 313207561, "parents": [693243224, 888201200] }];
    it('check for matching parents after going through getParents', () => {
        expect(getFamily(testPersonTwo, dataObject, getParents, isMatch, isParent, matchingParents, matchingSpouse, isChildren, matchingChildren, isNotObject, excludeMatchingObjects).parents).toEqual(expectedParents);
    });

    let testPersonThree = { "id": 313207561, "parents": [693243224, 888201200] };
    let expectedSiblings = [
        { "id": 822843554, "parents": [693243224, 888201200] },
        { "id": 969837479, "parents": [693243224, 888201200] },
        { "id": 313207561, "parents": [693243224, 888201200] }];
    it('check for matching siblings after going through getSiblings', () => {
        expect(getFamily(testPersonThree, dataObject, getParents, isMatch, isParent, matchingParents, matchingSpouse, isChildren, matchingChildren, isNotObject, excludeMatchingObjects).siblings).toEqual(expectedSiblings);
    });
});
