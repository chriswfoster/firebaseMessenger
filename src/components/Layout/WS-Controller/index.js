import React, {useState, useCallback, useRef, useMemo, useEffect} from 'react';
// import ws from '../../../core/ws-socket';
import socket from '../../../core/socket-io';

 
const WSController = () => {

    useEffect(() => {
        console.log('eyyyy')
        socket.on("test", (data) => {
            console.log("test happened: ", data)
        });
    }, []);

    return (
        <div>This is the WSController component.</div>
    )
}
export default WSController