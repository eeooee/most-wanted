describe(('function isMatch'), () => {
    const isMatch = (element, object) => object == element;
    it('match 2 == 2', () => {
    expect(isMatch(2,2)).toBeTruthy();
    });
    it('match female == female', () => {
    expect(isMatch('female','female')).toBeTruthy();
    });
});