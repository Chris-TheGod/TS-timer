import Container from './UI/Container.tsx';
import { type Timer as TimerProps } from '../store/timers-context.tsx';
import { useState } from 'react';

export default function Timer({ name, duration }: TimerProps) {
  const [remainingState, setRemainingTime] = useState(duration * 1000);

  setInterval(function () {
    setRemainingTime((prevTime) => prevTime - 50);
  }, 50);

  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingState} />
      </p>
      <p>{duration}</p>
    </Container>
  );
}
