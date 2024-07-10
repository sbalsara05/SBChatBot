import Chat from "./components/chat/chat.jsx";
import Detail from "./components/detail/Detail.jsx";
import List from "./components/list/List.jsx";

const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>

    </div>
  )
}

export default App