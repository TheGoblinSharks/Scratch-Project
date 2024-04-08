// Box.jsx
const Box = ({ isActive }) => {
  const activeClass = isActive ? 'box active' : 'box';
  return (
    <div className={activeClass}></div>
  );
};

export default Box;
