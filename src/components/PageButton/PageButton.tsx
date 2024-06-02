import "./PageButton.scss";

type Props = {
    text: string;
    onClick: () => void;
    disabled?: boolean;
}

const PageButton = ({ text, onClick, disabled }: Props) => {
  return (
    <button 
        onClick={onClick}
        className="pageButton"
        disabled={disabled}
    >
        {text}
    </button>
  )
}

export default PageButton