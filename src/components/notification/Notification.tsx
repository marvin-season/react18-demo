import React from "react";

export interface NotificationConfigProps {
  id?: number;
  message: string;
}

const Notification: React.FC<NotificationConfigProps> = ({ message }) => {
  return (
    <>
      <div>{message}</div>
    </>
  );
};

export default Notification;
