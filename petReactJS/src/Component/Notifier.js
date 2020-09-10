import React, { useState, useEffect } from 'react'
import { AlertList, Alert, AlertContainer } from 'react-bs-notifier';

export default function NotifierGenerator() {
    const [position, setPosition] = React.useState("bottom-right");
    const [alerts, setAlerts] = React.useState([]);
    const [alertTimeout, setAlertTimeout] = React.useState(0);
    const [newMessage, setNewMessage] = React.useState(
        'Đơn hàng đã được tiếp nhận'
    );

    const generate = React.useCallback(
        type => {
            setAlerts(alerts => [
                ...alerts,
                {
                    id: new Date().getTime(),
                    type: type,
                    headline: `Whoa, ${type}!`,
                    message: newMessage
                }
            ]);
        },
        [newMessage]
    );

    const onDismissed = React.useCallback(alert => {
        setAlerts(alerts => {
            const idx = alerts.indexOf(alert);
            if (idx < 0) return alerts;
            return [...alerts.slice(0, idx), ...alerts.slice(idx + 1)];
        });
    }, []);

    return (
        <>
            <AlertList
                position={position}
                alerts={alerts}
                timeout={alertTimeout}
                dismissTitle="Begone!"
                onDismiss={onDismissed}
            />
        </>
        
    );
}