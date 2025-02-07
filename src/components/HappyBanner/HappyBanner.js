import Banner from "../Banner";

const HappyBanner = ({ guessCount }) => {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {" "}
          {guessCount} guess{guessCount > 1 ? "es" : ""}
        </strong>
        .
      </p>
    </Banner>
  );
};

export default HappyBanner;
