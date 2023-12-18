import { Box } from '../Blocks';
import { DefaultLayoutComponentProps } from './types';

const DefaultLayoutComponent = (props: DefaultLayoutComponentProps) => {
  const { children } = props;
  return (
    <>
      {/* Add Navbar  */}
      <Box width="100%">{children}</Box>
      {/* Add Footer  */}
    </>
  );
};

export default DefaultLayoutComponent;
