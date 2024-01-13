import React from "react";
import { useEffect, useState, useRef, useContext } from "react";
import { QuizContext } from '../Helpers/Contexts'
import "./Ans.css";

export default function AnswerTimer ({ duration, onTimeUp} ) {
    //const [counter, setCounter] = useState(0);
    const { counter, setCounter } = useContext(QuizContext);
    const [progressLoaded, setProgressLoaded] = useState(0);
    //const [intervalRef ]= useRef();

    useEffect(() => {
        const IM = setInterval(() => {
            setCounter((cur) => cur + 1);
        }, 1000);
        return () => clearInterval(IM);
    }, []);

    useEffect(() => {
        setProgressLoaded(100 * (counter / duration));

        if(counter === duration) {
            clearInterval()
            setTimeout(() => {
                onTimeUp();
            }, 1000);
        }
    }, [counter]);

    return (
        <div className="answer-timer-container" >
            <div
                style={{
                    width: `${progressLoaded}%`,
                    backgroundColor: `${
                        progressLoaded < 40
                            ? "lightgreen"
                            : progressLoaded < 70
                            ? "orange"
                            : "red"
                    } `,
                }}
            className="progress"></div>
        </div>
    );
}