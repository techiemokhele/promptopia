import PromptCardComponent from "./PromptCardComponent";

const PromptCardListComponent = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCardComponent
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

export default PromptCardListComponent;
