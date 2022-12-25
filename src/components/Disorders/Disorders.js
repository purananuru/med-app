import DisorderMapping from "./DisorderMapping";

const DisorderMappings = (disorders) => {
  return (
    <>
      {disorders[0].disorders[0].map((mapping) => (
        <>
          <h3>mapping.disorder</h3>
          <DisorderMapping dm={mapping} />
        </>
      ))}
    </>
  );
};

export default DisorderMappings;
