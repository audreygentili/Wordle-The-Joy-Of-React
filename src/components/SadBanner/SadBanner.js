import Banner from "../Banner";

const SadBanner = ({ answer }) => {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
};

export default SadBanner;
