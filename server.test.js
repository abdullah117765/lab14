const request = require("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose');




describe("Test the root path", () => {
test("It should response the POST method", () => {
const response = request(app).post("http://localhost:8000/User/add"
).send ({
"Name": "Abdullah",
"Email": "axiomshah@gmail.com",
"Age": 20,
"Contact": 1233
})
expect(response.statusCode).toBe(200);
})
})