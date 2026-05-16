import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi, beforeEach } from "vitest"
import AuthForm from "@/components/AuthForm"

describe("AuthForm — login variant", () => {
  it("renders email field, password field, and Login button", () => {
    render(<AuthForm variant="login" />)
    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.getByLabelText("Password")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument()
  })

  it("does not render a Confirm Password field", () => {
    render(<AuthForm variant="login" />)
    expect(screen.queryByLabelText("Confirm Password")).not.toBeInTheDocument()
  })

  it("password field is masked by default; toggle reveals and re-masks it", async () => {
    render(<AuthForm variant="login" />)
    const input = screen.getByLabelText("Password")
    expect(input).toHaveAttribute("type", "password")

    await userEvent.click(screen.getByRole("button", { name: "Show password" }))
    expect(input).toHaveAttribute("type", "text")

    await userEvent.click(screen.getByRole("button", { name: "Hide password" }))
    expect(input).toHaveAttribute("type", "password")
  })

  it("logs email and password to console on submit", async () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {})
    render(<AuthForm variant="login" />)

    await userEvent.type(screen.getByLabelText("Email"), "user@example.com")
    await userEvent.type(screen.getByLabelText("Password"), "secret")
    await userEvent.click(screen.getByRole("button", { name: "Login" }))

    expect(spy).toHaveBeenCalledWith({ email: "user@example.com", password: "secret" })
    spy.mockRestore()
  })

  it("contains a link to the signup page", () => {
    render(<AuthForm variant="login" />)
    const link = screen.getByRole("link", { name: /sign up/i })
    expect(link).toHaveAttribute("href", "/signup")
  })
})

describe("AuthForm — signup variant", () => {
  it("renders email, password, confirm password fields and Sign Up button", () => {
    render(<AuthForm variant="signup" />)
    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.getByLabelText("Password")).toBeInTheDocument()
    expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument()
  })

  it("password field is masked by default; toggle reveals and re-masks it", async () => {
    render(<AuthForm variant="signup" />)
    const input = screen.getByLabelText("Password")
    expect(input).toHaveAttribute("type", "password")

    await userEvent.click(screen.getByRole("button", { name: "Show password" }))
    expect(input).toHaveAttribute("type", "text")

    await userEvent.click(screen.getByRole("button", { name: "Hide password" }))
    expect(input).toHaveAttribute("type", "password")
  })

  it("confirm password field is masked by default; toggle reveals and re-masks it", async () => {
    render(<AuthForm variant="signup" />)
    const input = screen.getByLabelText("Confirm Password")
    expect(input).toHaveAttribute("type", "password")

    await userEvent.click(screen.getByRole("button", { name: "Show confirm password" }))
    expect(input).toHaveAttribute("type", "text")

    await userEvent.click(screen.getByRole("button", { name: "Hide confirm password" }))
    expect(input).toHaveAttribute("type", "password")
  })

  it("logs email, password, and confirmPassword to console on submit", async () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {})
    render(<AuthForm variant="signup" />)

    await userEvent.type(screen.getByLabelText("Email"), "new@example.com")
    await userEvent.type(screen.getByLabelText("Password"), "pass123")
    await userEvent.type(screen.getByLabelText("Confirm Password"), "pass123")
    await userEvent.click(screen.getByRole("button", { name: "Sign Up" }))

    expect(spy).toHaveBeenCalledWith({
      email: "new@example.com",
      password: "pass123",
      confirmPassword: "pass123",
    })
    spy.mockRestore()
  })

  it("contains a link to the login page", () => {
    render(<AuthForm variant="signup" />)
    const link = screen.getByRole("link", { name: /log in/i })
    expect(link).toHaveAttribute("href", "/login")
  })
})
