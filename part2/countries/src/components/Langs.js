const Langs = ({ langs }) => {
  return langs.map((elem, i) => {
    return <li key={elem + i}>{elem}</li>;
  });
};

export default Langs;
