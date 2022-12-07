import "./NoPrint.css";

interface NoPrintProps {
  children: React.ReactNode;
}

export const NoPrint = (props: NoPrintProps) => {
  return <div className="NoPrint">{props.children}</div>;
};
