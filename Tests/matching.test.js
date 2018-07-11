describe('the registration function basic test', function () {

    it('should display ine value in an object', function () {


    });
});
describe("the registration function more basic", function () {

    it('should display multiple values in an object', function () {

    });
    it('should display three different values in an object', function () {


    });

});
describe('the registration number  filter test', function () {
    it('should display one reg number', function () {

    });
    it('should only display reg number that starts with CA', function () {

    });
    it('should not display reg number that are not found selected regions', function () {

    });

});
describe('the registration function selected plates test', function () {
    it('should display the selected plates from CA', function () {

    });
    it('when all selected it should only display the registered plates', function () {

        var nameHolder = RegNumber();

        nameHolder.store("CA 123"); 
        nameHolder.store("CY 123"); 
        nameHolder.store('CZ 123'); 
        nameHolder.store('CA 231'); 
        nameHolder.store('CH 123'); 
        nameHolder.store('CJ 123'); 


        assert.deepEqual(nameHolder.split('All'), ['CA 123', 'CY 123', 'CA 231', 'CJ 123',]);
    });
});