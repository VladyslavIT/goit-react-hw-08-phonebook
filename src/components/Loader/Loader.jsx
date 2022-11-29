import { Oval } from 'react-loader-spinner';

import { LoaderThumb } from './Loader.styled';

const Loader = () => {
  return (
    <Oval
      height={40}
      width={40}
      color="red"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="black"
      strokeWidth={3}
      strokeWidthSecondary={3}
    />
  );
};

const LoaderDelete = () => {
  return (
      <LoaderThumb>
    <Oval
      height={15}
      width={20}
      color="red"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="black"
      strokeWidth={3}
      strokeWidthSecondary={3}
      />
      </LoaderThumb>
  );
}
export { Loader, LoaderDelete };
