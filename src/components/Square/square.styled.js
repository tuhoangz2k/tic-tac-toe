import styled from 'styled-components';
export const Cell = styled.div`
    background: #ba8c63;
    width: 30px;
    height: 30px;
    position: relative;
    box-shadow: 6px 6px silver;
    &:before {
        content: '';
        height: 100%;
        width: 2px;
        background: black;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        ${(props) =>
            props.$row === 0 &&
            `
      top: 50%;
    `}
        ${(props) =>
            props.$row === 18 &&
            `
      height: 50%;
    `}
    }
    &:after {
        content: '';
        width: 100%;
        height: 2px;
        background: black;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        ${(props) =>
            props.$col === 0 &&
            `
      left: 50%;
    `}
        ${(props) =>
            props.$col === 18 &&
            `
      width: 50%;
    `}
    }
`;

export const Piece = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    transform: scale(0.8);
    z-index: 1;
    cursor: pointer;
    ${(props) =>
        props.$value === 'black' &&
        `
    background: black;
  `}
    ${(props) =>
        props.$value === 'white' &&
        `
    background: white;
  `}
`;
