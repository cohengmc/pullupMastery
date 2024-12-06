interface BtnProps {
	name: string;
	onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
	onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

const BasicButton = ({ name, onClick, onKeyDown }: BtnProps) => {
	return (
		<div className="basicButton" onClick={onClick} onKeyDown={onKeyDown}>
			{name}
		</div>
	);
};
export default BasicButton;
