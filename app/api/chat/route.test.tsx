import { POST } from "./route";
import { GoogleGenAI } from "@google/genai";

let consoleErrorSpy: jest.SpyInstance;

beforeEach(() => {
  mockGenerateContent.mockReset();
  consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  consoleErrorSpy.mockRestore();
});
jest.mock("@google/genai", () => ({
  GoogleGenAI: jest.fn().mockImplementation(() => ({
    models: {
      generateContent: jest.fn(),
    },
  })),
}));

const mockGenerateContent = (GoogleGenAI as jest.Mock).mock.results[0].value
  .models.generateContent;

beforeEach(() => {
  mockGenerateContent.mockReset();
});
Object.defineProperty(global, "Response", {
  value: {
    json: (data: unknown, init?: { status?: number }) => ({
      json: async () => data,
      status: init?.status ?? 200,
    }),
  },
});
test("API should return Gemini response", async () => {
  mockGenerateContent.mockResolvedValue({
    text: "React is a JavaScript library.",
  });
  const request = {
    json: async () => ({
      message: "What is React?",
    }),
  };

  const response = await POST(request as Request);
  const data = await response.json();

  expect(data).toEqual({
    reply: "React is a JavaScript library.",
  });
});

test("API should return error when Gemini fails", async () => {
  mockGenerateContent.mockRejectedValue(new Error("Gemini error"));

  const request = {
    json: async () => ({
      message: "What is React?",
    }),
  };

  const response = await POST(request as Request);

  const data = await response.json();

  expect(data).toEqual({
    error: "Something went wrong.",
  });
});
test("API should send the user's message to Gemini", async () => {
  mockGenerateContent.mockResolvedValue({
    text: "React is a JavaScript library.",
  });

  const request = {
    json: async () => ({
      message: "What is React?",
    }),
  };

  await POST(request as Request);

  expect(mockGenerateContent).toHaveBeenCalledWith({
    model: "gemini-2.5-flash",
    contents: "What is React?",
  });
});

test("API should return status 500 when Gemini fails", async () => {
  mockGenerateContent.mockRejectedValue(new Error("Gemini error"));

  const request = {
    json: async () => ({
      message: "What is React?",
    }),
  };

  const response = await POST(request as Request);

  expect(response.status).toBe(500);
});
test("API should return error when request parsing fails", async () => {
  const request = {
    json: async () => {
      throw new Error("Invalid request");
    },
  };

  const response = await POST(request as unknown as Request);
  const data = await response.json();

  expect(data).toEqual({
    error: "Something went wrong.",
  });

  expect(response.status).toBe(500);
});
