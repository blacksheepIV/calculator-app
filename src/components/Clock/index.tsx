import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

type ClockProps = {
  className?: string;
};
const Clock: React.FC<ClockProps> = ({ className }) => {
  const [clockState, setClockState] = useState<string>(
    dayjs(new Date()).format("HH:mm")
  );

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(dayjs(date).format("HH:mm"));
    }, 1000);
  }, []);

  return <div className={className}>{clockState}</div>;
};

export default Clock;
