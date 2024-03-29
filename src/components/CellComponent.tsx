import { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
    return (
        <div
            onClick={() => click(cell)}
            className={[
                "cell",
                cell.color,
                selected && cell.figure ? "selected" : "",
            ].join(" ")}
            style={{ background: cell.available && cell.figure ? "green" : "" }}
        >
            {cell.available && !cell.figure && <div className={"available"} />}
            {cell.figure?.logo && <img src={cell.figure.logo}></img>}
        </div>
    );
};  

export default CellComponent;
