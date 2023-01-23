const Square = (props) => {
	const { colValue } = props;
	const disableButton = () => (colValue ? true : false);
	return <button disabled={disableButton}>{colValue}</button>;
};

export default Square;
