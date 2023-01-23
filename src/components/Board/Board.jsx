import { useState } from 'react';
import Square from '../Square/Square';

const Board = () => {
	const [boardArr, setBoardArr] = useState(new Array(3).fill().map(() => new Array(3).fill()));

	const [currentActivePlayer, setCurrentActivePlayer] = useState('x');

	const handleUserInput = () => {};

	return (
		<div className='board'>
			{boardArr.map((boardArrRow, rowIndex) => (
				<div id={`boardRow_${rowIndex}`} key={`boardRow_1`} className='board-row'>
					{boardArrRow.map((colValue, colIndex) => (
						<Square clickHandler={() => handleUserInput(rowIndex, colIndex)} value={colValue} />
					))}
				</div>
			))}
		</div>
	);
};
