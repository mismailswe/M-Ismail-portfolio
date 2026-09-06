import React from "react";
import ReactDOM from "react-dom";
import {act, Simulate} from "react-dom/test-utils";
import Research from "./Research";
import Contact from "./Contact";
import Navbar from "./Navbar";
import {ThemeProvider} from "../contexts/ThemeContext";
import {researchSection} from "../portfolio";
import emailjs from "@emailjs/browser";

jest.mock("@emailjs/browser", () => ({send: jest.fn()}));
jest.mock("../components/ui/Reveal", () => ({children, className}) => (
  <div className={className}>{children}</div>
));

let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  jest.clearAllMocks();
});
afterEach(() => {
  act(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  container.remove();
});
const render = component =>
  act(() => {
    ReactDOM.render(component, container);
  });
const button = text =>
  [...container.querySelectorAll("button")].find(el =>
    el.textContent.includes(text)
  );
const click = element => act(() => Simulate.click(element));

test("publication filters show the correct records and restore the complete list", () => {
  render(<Research />);
  expect(container.querySelectorAll(".pub")).toHaveLength(3);
  click(button("2025"));
  expect(container.querySelectorAll(".pub")).toHaveLength(2);
  expect(container.querySelector("#publication-hygram")).toBeNull();
  expect(button("2025").getAttribute("aria-pressed")).toBe("true");
  click(button("2026"));
  expect(container.querySelectorAll(".pub")).toHaveLength(1);
  expect(container.querySelector("#publication-hygram")).not.toBeNull();
  click(button("All publications"));
  expect(container.querySelectorAll(".pub")).toHaveLength(
    researchSection.publications.length
  );
});

test("citation copying includes the paper link and exposes a manual fallback", async () => {
  const writeText = jest.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: {writeText}
  });
  render(<Research />);
  await act(async () => Simulate.click(button("Copy citation")));
  expect(writeText).toHaveBeenCalledWith(
    expect.stringContaining(researchSection.publications[0].links[0].url)
  );
  expect(container.textContent).toContain("Citation copied to clipboard.");
  writeText.mockRejectedValueOnce(new Error("Clipboard denied"));
  // A different record has its own copy status and a readable citation.
  await act(async () => Simulate.click(button("Copy citation")));
  expect(container.textContent).toContain(
    "Select and copy the citation above."
  );
});

function fillForm() {
  for (const [name, value] of Object.entries({
    fullName: "Test Researcher",
    email: "researcher@example.com",
    message: "A question about the evaluation methodology."
  })) {
    const input = container.querySelector(`[name="${name}"]`);
    act(() => Simulate.change(input, {target: {name, value}}));
  }
}
test("contact submission sends the existing template fields and resets only after success", async () => {
  emailjs.send.mockResolvedValueOnce({status: 200});
  render(<Contact />);
  fillForm();
  await act(async () => Simulate.submit(container.querySelector("form")));
  expect(emailjs.send).toHaveBeenCalledWith(
    expect.any(String),
    expect.any(String),
    expect.objectContaining({
      name: "Test Researcher",
      from_email: "researcher@example.com",
      reply_to: "researcher@example.com",
      message: "A question about the evaluation methodology."
    }),
    expect.any(String)
  );
  expect(container.textContent).toContain("Message sent.");
  expect(container.querySelector('[name="message"]').value).toBe("");
});

test("a failed email preserves the draft and shows a direct contact fallback", async () => {
  const errorLog = jest.spyOn(console, "error").mockImplementation(() => {});
  emailjs.send.mockRejectedValueOnce(new Error("Unavailable"));
  render(<Contact />);
  fillForm();
  await act(async () => Simulate.submit(container.querySelector("form")));
  expect(container.querySelector('[name="message"]').value).toContain(
    "evaluation methodology"
  );
  expect(container.textContent).toContain("Please email me directly");
  expect(button("Send message").disabled).toBe(false);
  errorLog.mockRestore();
});

test("mobile menu supports Escape and returns focus to its toggle", () => {
  render(
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
  click(container.querySelector('[aria-label="Open menu"]'));
  expect(
    container
      .querySelector('[aria-controls="primary-links"]')
      .getAttribute("aria-expanded")
  ).toBe("true");
  act(() => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", {key: "Escape", bubbles: true})
    );
  });
  const toggle = container.querySelector('[aria-label="Open menu"]');
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  expect(document.activeElement).toBe(toggle);
});
