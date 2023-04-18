import React, { FC, useEffect, useState } from "react";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";
import CellComponent from "./CellComponent";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({
    board,
    setBoard,
    currentPlayer,
    swapPlayer,
}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function click(targetCell: Cell) {
        if (
            selectedCell &&
            selectedCell !== targetCell &&
            selectedCell.figure?.canMove(targetCell)
        ) {
            selectedCell.moveFigure(targetCell);
            setSelectedCell(null);
            swapPlayer();
        } else {
            if (targetCell.figure?.color === currentPlayer?.color) {
                setSelectedCell(targetCell);
            }
        }
    }

    function highlightCells() {
        board.highlightsCell(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.copyBoard();
        setBoard(newBoard);
    }

    useEffect(() => {
        highlightCells();
    }, [selectedCell]);

    return (
        <div className="board">
            {board.cells.map((row, id) => (
                <React.Fragment key={id}>
                    {row.map((cell, id) => (
                        <CellComponent
                            selected={
                                cell.x === selectedCell?.x &&
                                cell.y === selectedCell.y
                            }
                            cell={cell}
                            key={id}
                            click={click}
                        ></CellComponent>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};

export default BoardComponent;
