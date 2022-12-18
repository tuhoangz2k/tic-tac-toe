import React from 'react';
import {
    Board,
    Button,
    Container,
    Info,
    Message,
    Row,
    Title,
    Wrapper,
} from './Board.styled';
import useBoard from '../../hooks/useBoard';
import Square from '../Square';

export const BoardComp = () => {
    const { board, winner, handlePieceClick, playAgain } = useBoard();

    return (
        <Container>
            <Info>
                <Title>Gomoku</Title>
                {winner && <Message>The Winner is: {winner}!</Message>}
                <Button onClick={playAgain}>Play again</Button>
            </Info>
            <Wrapper>
                <Board>
                    {board.map((row, rowIndex) => {
                        return (
                            <Row key={rowIndex}>
                                {row.map((col, colIndex) => {
                                    return (
                                        <Square
                                            key={colIndex}
                                            value={board[rowIndex][colIndex]}
                                            row={rowIndex}
                                            col={colIndex}
                                            onClick={handlePieceClick}
                                        />
                                    );
                                })}
                            </Row>
                        );
                    })}
                </Board>
            </Wrapper>
        </Container>
    );
};
