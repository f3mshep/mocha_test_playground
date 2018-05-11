const request = require("supertest");
const expect = require('expect');

const app = require('./server').app;

it('should return hello world response', (done)=> {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Resource not found'
      })
    })
    .end(done);
});

it('should respond to a users request with array of users', (done)=>{
  request(app)
    .get('/users')
    .expect(200)
    .expect((res)=> {
      expect(res.body).toInclude({ name: "Alexandra Wright", age: 26 });
    })
    .end(done)
});

// make a new test
// assert 200
// Assert that you exist in user array