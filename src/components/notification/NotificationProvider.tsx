import React, { useCallback, useRef, useState } from "react";
import { NotificationConfigProps } from "./Notification";

interface NotificationContextProps {
  toggleNotification: (config: NotificationConfigProps) => void;
}

const NotificationContext = React.createContext<NotificationContextProps>({
  toggleNotification(config) {},
});

const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const notificationIdRef = useRef(0);
  const [notifications, setNotifications] = useState<NotificationConfigProps[]>(
    [],
  );

  const toggleNotification = useCallback((config: NotificationConfigProps) => {
    setNotifications((ntfs) => {
      return [
        ...ntfs,
        {
          id: (notificationIdRef.current += 1),
          ...config,
        },
      ];
    });
  }, []);

  const value: NotificationContextProps = {
    toggleNotification,
  };

  return (
    <>
      <NotificationContext.Provider value={value}>
        {children}
      </NotificationContext.Provider>
    </>
  );
};

const useNotification = () =>
  React.useContext(NotificationContext)?.toggleNotification;

export { NotificationContext, NotificationProvider, useNotification };
