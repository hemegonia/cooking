import { useRouter } from 'next/router';

type Props = {
  className?: string;
};

const Component = (props: Props) => {
  const router = useRouter();
  return (
    <div
      className={`flex flex-col items-center justify-center ${props.className}`}
    >
      <div className={`flex flex-col items-center`}>
        <img
          src={`${router.basePath}/assets/images/ing_placeholder.svg`}
          alt="Ingredients Place Holder Image"
        />
        <h4 className="mt-4 text-center text-slate-500">
          Your ingredients will <br></br> appear here.
        </h4>
      </div>
    </div>
  );
};

export default Component;
