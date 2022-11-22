describe("Test the root path", () => {
  test("It should response the GET method", () => {
    const response = request(app)
      .post("http://localhost:8000/user/delete")
      .send({
        Name: "Abdullah ",
        Email: "i200457@nu.edu.pk",
        Age: 21,
        Contact: 3333,
      });
    expect(response.statusCode), toBe(200);
  });
});
