// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import { Clock8 } from "lucide-react"

export default function Home() {
  return (
    <div className="center-content">
      <div className="page-content">
        <h1>
          P<Clock8 className="logo" strokeWidth={2.75} />cket Heist
        </h1>
        <div>Tiny missions. Big office mischief.</div>
        <p>
          Welcome to Pocket Heist — your headquarters for coordinating stealthy office pranks,
          covert snack raids, and perfectly timed mischief. Assemble your crew, pick a target,
          and execute the plan without leaving a trace.
        </p>
      </div>
    </div>
  )
}
