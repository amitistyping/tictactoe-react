import { useState } from 'react';
import Square from '../Square/Square';

const Board = () => {
	const [boardArr, setBoardArr] = useState(new Array(3).fill().map(() => new Array(3).fill()));

	return (
		<div className='board'>
			{boardArr.map((boardArrRow, rowIndex) => (
				<div id={`boardRow_${rowIndex}`} key={`boardRow_1`} className='board-row'>
					{boardArrRow.map((colValue, colIndex) => (
						<Square rowIndex={rowIndex} colIndex={colIndex} value={colValue} />
						// <div
						// 	id={`boardCol_${rowIndex}_${colIndex}`}
						// 	key={`boardCol_${rowIndex}_${colIndex}`}
						// 	className='board-col'
						// >

						// </div>
					))}
				</div>
			))}
			{/* {ticTacToeRowCount.map((row, index) => (
				<div className="board-row" key={}>

                </div>
			))} */}
		</div>
	);
};
