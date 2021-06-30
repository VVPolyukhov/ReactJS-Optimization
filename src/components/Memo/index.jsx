import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
const RENDER_NUMBER = 10000;
const FREQUENCY = 10000;

const Child = ({ index }) => {
  // const [state] = useState(0);
  // const ref = useRef();
  // const memoValue = useMemo(() => 2, []);
  // useEffect(() => {}, []);
  return <div>I'm Child</div>
  // return (
  //   <>
  //     <div className="header">
  //       <div className="header__item">
  //         <h3>{state}</h3>
  //         <p>{memoValue}</p>
  //       </div>
  //       <div className="header__item">
  //         <h3>{state}</h3>
  //         <p>{memoValue}</p>
  //       </div>
  //       <div className="header__item">
  //         <h3>{state}</h3>
  //         <p>{memoValue}</p>
  //       </div>
  //       <div className="header__item">
  //         <h3>{state}</h3>
  //         <p>{memoValue}</p>
  //       </div>
  //       <div className="header__item">
  //         <h3>{state}</h3>
  //         <p>{memoValue}</p>
  //       </div>
  //     </div>
  //     <button>Кнопка</button>
  //     <input ref={ref} />
  //     <input type="checkbox" />
  //     <img alt="Котик" />
  //   </>
  // );
};
const MemoChild = React.memo(Child);
// const MemoChild = Child;

////////////////////////////////////

const Parent = ({ array, finishHandler }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter <= RENDER_NUMBER) {
      setCounter((value) => value + 1);
    } else {
      finishHandler();
    }
  }, [counter]);

  return <MemoChild index={array[counter]} />;
};
const MemoParent = Parent;

////////////////////////////////////

let startTime;
const Memo = () => {
  const [isExperiment, setExperimentStatus] = useState(false);
  const [array, setArray] = useState([]);

  useEffect(() => {
    fillArray();
  }, []);

  const fillArray = () => {
    let lol = [];
    for (let index = 0, frequencyIndex = 1; index < RENDER_NUMBER; index++) {
      if (frequencyIndex === FREQUENCY) {
        lol.push(index - 1);
        frequencyIndex = 1;
      } else {
        lol.push(index);
        frequencyIndex++;
      }
    }
    setArray(lol);
  };

  const startExperiment = () => {
    setExperimentStatus(true);
  };

  const finishHandler = useCallback(() => {
    const finishTime = performance.now();
    console.log(
      `Время выполнения ${RENDER_NUMBER} рендеров: ${finishTime - startTime}`
    );
    setExperimentStatus(false);
  }, []);

  if (isExperiment) {
    startTime = performance.now();
  }

  return (
    <>
      {!isExperiment && array.length && (
        <button onClick={startExperiment}>Начать эксперимент</button>
      )}
      {isExperiment && array.length && (
        <MemoParent array={array} finishHandler={finishHandler} />
      )}
    </>
  );
};

export default Memo;
