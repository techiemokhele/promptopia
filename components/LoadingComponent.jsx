import Image from "next/image";

const LoadingComponent = () => {
  return (
    <div>
      <Image
        src="/assets/icons/loader.svg"
        width={50}
        height={50}
        alt="loader"
        className="object-contain"
      />
    </div>
  );
};

export default LoadingComponent;
