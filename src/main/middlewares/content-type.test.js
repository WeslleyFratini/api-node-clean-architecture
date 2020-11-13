const request = require("supertest");

describe("Content-Type Middleware", () =>{
  let app;

  beforeEach(() => {
    jest.resetModules();
    app = require("../config/app");

  })

  test("Should return json content-type as default", async () => {
    app.get("/test_content_type", (req, res) => {
      res.send("");
    });

    await request(app)
    .get("/test_content_type");
    .expect('content_type', /json/)    
  });

  test("Should return xml content_type if forced", async () => {
    app.get("/test_content_type_xml", (req, res) => {
      res.type('xml');
      res.send("");
    });

    await request(app)
    .get("/test_content_type");
    .expect('content_type', /xml/)    
  });
});
