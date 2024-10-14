import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

const App = () => {
  const cards = data.map((cardData, index, array) => {
    return (
      <Card key={cardData.id} data={cardData} index={index} cardsArray={array}/>
    )
  })
  return (
    <div className="w-[700px] mt-12 mb-12 bg-white p-2 rounded-md">
      <Header />
      {cards}
    </div>
  )
}

export default App
