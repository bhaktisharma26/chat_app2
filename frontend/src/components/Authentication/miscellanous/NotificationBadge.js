import React from "react";
import { Badge, useToken } from "@chakra-ui/react";

const NotificationBadge = ({ count, effect }) => {
  const effects = {
    SCALE: "scale(1.2)",
    // Add more effects as needed
  };

  const effectStyle = effects[effect] || "";

  return (
    <Badge
      colorScheme="red"
      borderRadius="full"
      px="2"
      py="1"
      transform={effectStyle}
      transition="transform 0.2s"
    >
      {count}
    </Badge>
  );
};

export default NotificationBadge;
