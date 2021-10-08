// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { server } from "./mock-server";

//before jest-dom is rendered this callback will invoked
beforeAll(() => server.listen());
//after jest-dom rendered every handler will be reset
afterEach(() => server.resetHandlers());
//once dom is removed the server will be closed by this callback
afterAll(() => server.close());
