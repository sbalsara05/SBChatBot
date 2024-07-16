import Chat from "./components/chat/chat.jsx";
import Detail from "./components/detail/Detail.jsx";
import List from "./components/list/List.jsx";
import Login from "./components/login/Login.jsx";
import Notification from "./components/notification/Notification.jsx";

const App = () => {

    const user = true
    return (
        <div className='container'>
            {
                user ? (
                    <>
                        <List/>
                        <Chat/>
                        <Detail/>
                    </>
                ) : (<Login/>
                )}
            <Notification/>
        </div>
    )
}

export default App