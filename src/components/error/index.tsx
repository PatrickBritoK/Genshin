import * as E from "../error/styles"

//usar mais tarde
export const Loader = () => {
    return (
      <E.LoaderWrapper className="loader">
        <E.Circle1 />
        <E.Circle2 />
        <E.Circle3 />
        <E.Circle4 />
      </E.LoaderWrapper>
    );
  };
  