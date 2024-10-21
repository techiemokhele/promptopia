import FeedComponent from "@components/FeedComponent";

const HomePage = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Find & Disseminate
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Ideas</span>
      </h1>
      <p className="desc text-center">
        An open-source AI prompting application called Promptopia helps people
        in the modern world find, generate, and distribute original prompts.
      </p>

      <FeedComponent />
    </section>
  );
};

export default HomePage;
