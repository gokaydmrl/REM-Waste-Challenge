import "./allowance.css";
export const Allowances = ({
  allowance,
  text,
}: {
  allowance: boolean;
  text: string;
}) => {
  return (
    <p
      className={`infoText infoHead textRight ${
        allowance ? "allowed" : "notAllowed"
      }`}
    >
      {text}{" "}
    </p>
  );
};
