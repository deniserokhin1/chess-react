import React, { FC } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
    return (
        <div className="board">
            {board.cells.map((row, id) => (
                <React.Fragment key={id}>
                    {row.map((cell, id) => (
                        <CellComponent cell={cell} key={id}></CellComponent>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};

export default BoardComponent;
