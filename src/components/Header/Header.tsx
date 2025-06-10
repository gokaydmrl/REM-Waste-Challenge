export const Header = ({ size, text }: { size: number; text: string }) => {
  return <h2 className={`heading${size}`}>{text}</h2>;
};
