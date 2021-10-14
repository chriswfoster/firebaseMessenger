import React from 'react';
import { Button, notification } from 'antd';

 
const TestButton = () => {


    return (
        <Button
            type="primary"
            onClick={e => {
                notification.open({
                    message: 'Test Notification',
                    description:
                      'This is a test notification to see if I can get push notifications to work',
                    onClick: () => {
                      console.log('Does nothing');
                    },
                  });
            }}
        >
            Click to Test
        </Button>
    )
}
export default TestButton