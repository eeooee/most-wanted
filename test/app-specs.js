/*jshint esversion: 6 */
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
        expect((sortByAge([{"dob":"1/18/1949"}, {"dob":"3/11/2013"}]))).toEqual({"dob":"1/18/1949"});
    });
    
    it("sorting an array of close ages(delta=1 day) by element.dob, ascending,", function(){
        expect(sortByAge([{"dob":"3/10/2013"}, {"dob":"3/11/2013"}, {"dob":"3/12/2013"}, {"dob":"3/09/2013"}])).toEqual({"dob":"3/09/2013"});
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

