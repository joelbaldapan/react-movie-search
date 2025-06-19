import './App.css'

type TextProps = {display: string}

function App() {
  return (
    <>
      <Text display="Hello"/>
      <Text display="World!"/>
    </>
  )
}

function Text({display}: TextProps) {
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App
