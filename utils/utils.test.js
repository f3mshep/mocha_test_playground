const utils = require('./utils');

const expect = require('expect');

it('should add two numbers', () => {
  const res = utils.add(33, 11);
  expect(res).toBeA('number');
  expect(res).toBe(44);
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4,3,(sum) => {
    expect(sum).toBe(7).toBeA('number')
    done();
  })
})

it('should square the argument', () => {
  const res = utils.square(4);
  expect(res).toBeA('number');
  expect(res).toBe(16)
});

it('should asynchronously square the argument', (done) => {
  utils.asyncSquare(4, (product)=> {
    expect(product).toBe(16).toBeA('number')
    done();
  });
})

it('should properly set first and last names', () => {
  let userObject = {}
  let testObject = {
    firstName: "Alexandra",
    lastName: "Wright"
  }
  utils.setName(userObject, "Alexandra Wright")
  expect(userObject).toBeA('object')
  expect(userObject).toEqual(testObject)
});