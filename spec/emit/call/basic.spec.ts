import MapPromises from "../map-promises";
import CallParameter from "../../../dist/emit/call-parameters";

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('test', function() {

    const results : number[] = [];

    it('value', function(done) {

        const source = CallParameter(MapPromises(results,750, 250, 500, 0).values());

        Promise.all(source).then(()=>{

            expect(results).toEqual([0, 250, 500, 750]);
            done();
        })

    });

});