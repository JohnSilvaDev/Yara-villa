import chai from "chai";
import request from "supertest";
import sinon from "sinon";
import nodemailer from "nodemailer";
import app from "../server.js";

const expect = chai.expect;

describe("Booking API Endpoints", () => {
  let sendMailStub;

  beforeEach(() => {
    // Prevent real emails from being sent during tests
    sendMailStub = sinon.stub().resolves({ response: "250 Message accepted" });

    sinon.stub(nodemailer, "createTransport").returns({
      sendMail: sendMailStub,
    });
  });

  afterEach(() => {
    // Restore the original function after each test
    sinon.restore();
  });

  describe("POST /api/inquiry", () => {
    it("should successfully send an inquiry email and return 200", async () => {
      const payload = {
        name: "Test User",
        email: "test@example.com",
        phone: "1234567890",
        checkIn: "2024-12-01",
        checkOut: "2024-12-10",
        guests: 2,
        roomType: "Suite",
      };

      const res = await request(app)
        .post("/api/inquiry")
        .send(payload);

      expect(res.status).to.equal(200);
      expect(res.body).to.have.property("message", "Email sent successfully");

      // Verify nodemailer was called correctly
      expect(sendMailStub.calledOnce).to.be.true;
      const emailArgs = sendMailStub.getCall(0).args[0];
      expect(emailArgs.replyTo).to.equal(payload.email);
      expect(emailArgs.subject).to.include("Nova Reserva - Test User");
      expect(emailArgs.html).to.include(payload.checkIn);
      expect(emailArgs.html).to.include(payload.roomType);
    });

    it("should return 500 if nodemailer throws an error", async () => {
      // Override the stub specifically for this test to throw an error
      sendMailStub.rejects(new Error("SMTP failure"));

      const res = await request(app)
        .post("/api/inquiry")
        .send({ name: "Error User" });

      expect(res.status).to.equal(500);
      expect(res.body).to.have.property("error", "Error sending email");
    });
  });
});
