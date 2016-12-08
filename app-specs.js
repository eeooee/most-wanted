/*jshint esversion: 6 */
describe(('function ConvertStringHeightToInches'), function() {
    var convertHeightToInches = function(height) {
            let inchesInFoot = 12;
            let heightArray = height.replace(/[^\d]/g, ' ').split(' ', 2);
            return (+(heightArray[0] * inchesInFoot) + +heightArray[1]);
        };
    it('convert string height to inches', function() {
        expect(convertHeightToInches("5'0'")).toEqual(60);
    });
    it('converts string height to inches',function(){
        expect(convertHeightToInches("0")).toBeNaN();
    });
});

describe(('function getAge'), function(){
    var getAge = function(ageString) {
    let controlledAge = Date.parse(ageString);
    let msInYear = 31556952000;
    let negativeFix = Date.now();
    return parseInt(((negativeFix - controlledAge) / msInYear));
};
    it('converts a string birthday as (mm/dd/yyyy/) to an age in years', function(){
        expect(getAge(03/11/1993)).toEqual(23);
    });
});