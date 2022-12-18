import { memo } from 'react';
import { Cell, Piece } from './square.styled';

const Square = ({ row, col, value, onClick }) => {
    const handleSquareClick = () => {
        onClick(row, col, value);
    };
    return (
        <Cell $row={row} $col={col} onClick={handleSquareClick}>
            <Piece $value={value} />
        </Cell>
    );
};

export default memo(Square);
