import React from "react";
// import "./ButtonContainer.scss";

type Props = {
  children: React.ReactNode;
};

const ButtonContainer = ({ children }: Props) => {
  const numberOfButtons = React.Children.count(children);

  const styles = {
    display: "flex", 
    justifyContent: numberOfButtons === 1 ? "flex-end" : "space-between"
  }
  
  return (
    <div className="buttonContainer" style={styles}>
        {children}
    </div>
  );
};

export default ButtonContainer;
