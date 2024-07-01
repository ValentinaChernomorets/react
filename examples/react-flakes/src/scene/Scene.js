import './Scene.css';

import {Flake} from '../flake/Flake';
import {randomCoordinate} from '../utils/coords'
import {randomDelay} from '../utils/time'
import {randomSize} from '../utils/size'

import {useState, useEffect} from 'react';
const maxFlakes = 100
const delay = 25
const overallSpeed = 0.05
const startTop = -15

function Scene() {
  // HW1: using maxFlakes and loops or Array methods - fill this array
  let [flakeData, setFlakeData] = useState(
    Array.from({ length: maxFlakes }, () => ({
      top: startTop,
      left: randomCoordinate(),
      initialDelay: randomDelay(),
      size: randomSize(),
    }))
);

// HW2: add new flakes if there are less than maxFlakes
  useEffect(() => {
    const updateFlakes = () => {
      setFlakeData(prevFlakeData => {
        const updatedFlakes = prevFlakeData
          .map(flake => ({
            ...flake,
            top: flake.top + overallSpeed * flake.size,
          }))
          .filter(flake => flake.top <= 100);
        while (updatedFlakes.length < maxFlakes) {
          updatedFlakes.push({
            top: startTop,
            left: randomCoordinate(),
            initialDelay: randomDelay(),
            size: randomSize(),
          });
        }
        return updatedFlakes;
      });
      setTimeout(updateFlakes, delay);
    };
    updateFlakes(); // Running a recursive update
    return () => clearTimeout(updateFlakes); // Clearing timer
  }, []);

  return (
    <div className="scene">
      {flakeData.map(flake => <Flake {...flake} /> )}
    </div>
  );
}

export default Scene;