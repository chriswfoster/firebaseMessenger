import React, {useState, useCallback, useRef, useMemo} from 'react';
// import ws from '../../../core/ws-socket';
import useWebSocket, { ReadyState } from 'react-use-websocket';

 
const WSController = () => {
    const [socketUrl, setSocketUrl] = useState('ws://localhost:8080');
    const messageHistory = useRef([]);

    const {
        sendMessage,
        sendJsonMessage,
        lastMessage,
        lastJsonMessage,
        readyState,
        getWebSocket
      } = useWebSocket(socketUrl, {
        onOpen: () => console.log('opened'),
        //Will attempt to reconnect on all close events, such as server shutting down
        shouldReconnect: (closeEvent) => true,
      });

      messageHistory.current = useMemo(() =>
      messageHistory.current.concat(lastMessage),[lastMessage]);
  
    const handleClickChangeSocketUrl = useCallback(() =>
      setSocketUrl('wss://demos.kaazing.com/echo'), []);
  
    const handleClickSendMessage = useCallback(() =>
      sendMessage('Hello'), []);
    // ws.on('open', function open() {
    //     ws.send('something');
    //   });
    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
      }[readyState];



    return (
        <div>This is the WSController component.</div>
    )
}
export default WSController