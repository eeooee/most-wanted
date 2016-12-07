/*jshint esversion: 6 */
describe(('function ConvertStringHeightToInches'), function() {
    it('convert string height to inches', function() {
        expect(convertHeightToInches("5'0'")).toEqual(60);
    });
});
