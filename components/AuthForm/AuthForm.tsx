"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import styles from "./AuthForm.module.css"

interface AuthFormProps {
  variant: "login" | "signup"
}

export default function AuthForm({ variant }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const isSignup = variant === "signup"

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = data.get("email") as string
    const password = data.get("password") as string

    if (isSignup) {
      const confirmPassword = data.get("confirmPassword") as string
      console.log({ email, password, confirmPassword })
    } else {
      console.log({ email, password })
    }
  }

  return (
    <div className="center-content">
      <div className="page-content">
        <h2 className="form-title">
          {isSignup ? "Sign Up for an Account" : "Log in to Your Account"}
        </h2>

        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <div className={styles.inputWrapper}>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete={isSignup ? "new-password" : "current-password"}
              />
              <button
                type="button"
                className={styles.toggle}
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {isSignup && (
            <div className={styles.field}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className={styles.inputWrapper}>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className={styles.toggle}
                  aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  onClick={() => setShowConfirmPassword((v) => !v)}
                >
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          )}

          <button type="submit" className="btn">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className={styles.switchLink}>
          {isSignup ? (
            <>Already have an account? <Link href="/login">Log in</Link></>
          ) : (
            <>Don&apos;t have an account? <Link href="/signup">Sign up</Link></>
          )}
        </p>
      </div>
    </div>
  )
}
