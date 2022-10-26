interface IProps {
  ClientName: string;
}

const Navbar = ({ ClientName }: IProps) => {
  console.log("render");
  return <div>{ClientName}</div>;
};

export default Navbar;
