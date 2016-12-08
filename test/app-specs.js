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
    const testElements = [{"dob":"1/18/1949"}, {"dob":"3/11/2013"}];
    const closeElements = [{"dob":"3/10/2013"}, {"dob":"3/11/2013"}, {"dob":"3/12/2013"}, {"dob":"3/09/2013"}];

    it("sorting an array by element.dob, ascending,", function(){
        expect((sortByAge([{"dob":"1/18/1949"}, {"dob":"3/11/2013"}]))).toEqual(testElements[0]);
    });
    
    it("sorting an array of close ages(delta=1 day) by element.dob, ascending,", function(){
        expect(sortByAge([{"dob":"3/10/2013"}, {"dob":"3/11/2013"}, {"dob":"3/12/2013"}, {"dob":"3/09/2013"}])).toEqual({"dob":"3/09/2013"});
    });
})