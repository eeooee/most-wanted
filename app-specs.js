/*jshint esversion: 6 */
describe(('function ConvertStringHeightToInches'), function() {
    it('convert string height to inches', function() {
        var convertHeightToInches = function(height) {
            let inchesInFoot = 12;
            let heightArray = height.replace(/[^\d]/g, ' ').split(' ', 2);
            return (+(heightArray[0] * inchesInFoot) + +heightArray[1]);
        };
    });
});
expect(convertHeightToInches("5'0'")).toEqual(60);
});
});
