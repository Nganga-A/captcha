import Captcha from "./components/Captcha"

export default function Home() {
  return (
    <main>
      <input type="text" placeholder="Message"/>
      <div>
        <Captcha/>
      </div>
      <button>Send</button>
    </main>
  )
}
