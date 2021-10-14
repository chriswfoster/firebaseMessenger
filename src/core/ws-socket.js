// const [socketUrl, setSocketUrl] = useState('ws://localhost:8080');
// const messageHistory = useRef([]);
import useWebSocket, { ReadyState } from 'react-use-websocket';



const socketUrl = "ws://localhost:8080";
const {
    sendMessage,
    sendJsonMessage,
    lastMessage,
    lastJsonMessage,
    readyState,
    getWebSocket
  } = useWebSocket(socketUrl, {
    onOpen: () => console.log('Socket opened, connected to serer!'),
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => {
        console.log("Event closed for some reason: ", closeEvent)
        return true
    },
  });

  messageHistory.current = useMemo(() =>
  messageHistory.current.concat(lastMessage),[lastMessage]);

// const handleClickChangeSocketUrl = useCallback(() =>
//   setSocketUrl('wss://demos.kaazing.com/echo'), []);

// const handleClickSendMessage = useCallback(() =>
//   sendMessage('Hello'), []);
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

export default WebSocket;