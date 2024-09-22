import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic(
        '3db113e4-8716-4db4-b18b-c4ca921f761b',
         props.user.username, 
         props.user.secret
        );
 return (
        <div style={{ height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height:'100%'}}/>

        </div>
 )
}
export default ChatsPage