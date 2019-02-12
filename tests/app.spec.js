import chai, { expect } from 'chai';

import * as math from '../lib/app';

describe('Math Lib Tests', () => {
    context('Smoke Tests', () => {
        it('Should have method SUM exist', () => {
            expect(math.sum).to.exist;
        });
        it('Should have method SUB exist', () => {
            expect(math.sub).to.exist;
        });
        it('Should have method DIV exist', () => {
            expect(math.div).to.exist;
        });
        it('Should have method MULT exist', () => {
            expect(math.mult).to.exist;
        });
        it('Should have method POW exist', () => {
            expect(math.pow).to.exist;
        });
    });

    context('SUM Tests', () => {

        it('Should return 4 when 2, 2', () => {
            expect(math.sum(2, 2)).to.be.equal(4);
        });

        it('Should throw error We couldn\'t calculate because banana, as first parameters, is not a number', () => {
            expect(function () {
                math.sum('banana', 2);
            }).to
                .throw(Error, 'We couldn\'t calculate because banana is not a number');
        });

        it('Should throw error We couldn\'t calculate because banana, as second parameter, is not a number', () => {
            expect(function () {
                math.sum(2, 'banana');
            }).to
                .throw(Error, 'We couldn\'t calculate because banana is not a number');
        });

    });

    context('SUB Tests', () => {

        it('Should return 0 when 2, 2', () => {
            expect(math.sub(2, 2)).to.be.equal(0);
        });

        it('Should throw error We couldn\'t calculate because banana, as first parameters, is not a number', () => {
            expect(function () {
                math.sub('banana', 2);
            }).to.throw(Error, 'We couldn\'t calculate because banana is not a number');
        });

        it('Should throw error We couldn\'t calculate because banana, as second parameter, is not a number', () => {
            expect(function () {
                math.sub(2, 'banana');
            }).to.throw(Error, 'We couldn\'t calculate because banana is not a number');
        });

    });

    context('Mult Tests', () => {

        it('Should return 4 when 2, 2', () => {
            expect(math.mult(2, 2)).to.be.equal(4);
        });

        it('Should throw error We couldn\'t calculate because banana, as first parameters, is not a number', () => {
            expect(function () {
                math.mult('banana', 2);
            }).to.throw(Error, 'We couldn\'t calculate because banana is not a number');
        });

        it('Should throw error We couldn\'t calculate because banana, as second parameter, is not a number', () => {
            expect(function () {
                math.mult(2, 'banana');
            }).to.throw(Error, 'We couldn\'t calculate because banana is not a number');
        });

    });

    context('Div Tests', () => {

        it('Should return 4 when 8, 2', () => {
            expect(math.div(8, 2)).to.be.equal(4);
        });

        it('Should return 4 when 8, 2', () => {
            expect(math.div(8, 0)).to.be.equal('Infinity');
        });


        it('Should throw error We couldn\'t calculate because banana, as first parameters, is not a number', () => {
            expect(function () {
                math.div('banana', 2);
            }).to.throw(Error, 'We couldn\'t calculate because banana is not a number');
        });

        it('Should throw error We couldn\'t calculate because banana, as second parameter, is not a number', () => {
            expect(function () {
                math.div(2, 'banana');
            }).to.throw(Error, 'We couldn\'t calculate because banana is not a number');
        });

    });

});
