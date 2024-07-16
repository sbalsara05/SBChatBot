import Chat from "./components/chat/chat.jsx";
import Detail from "./components/detail/Detail.jsx";
import List from "./components/list/List.jsx";
import Login from "./components/login/Login.jsx";

const App = () => {

    const user = false
  return (
    <div className='container'>
        {
            user ? (
                <>
                    <List/>
                    <Chat/>
                    <Detail/>
                </>
            ): (<Login/>)
        }


    </div>
  )
}

export default App