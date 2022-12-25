const DisorderMapping = (mapping) => {
  return (
    <div>
      {mapping[0].categories.map((dm) => (
        <p>{dm.category}</p>
      ))}
    </div>
  );
};

export default DisorderMapping;
