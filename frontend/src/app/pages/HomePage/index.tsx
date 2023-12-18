import { theme } from 'styles/theme';
import {
  Flex,
  Button,
  Input,
  Selector,
  CheckboxInput,
  CheckboxWrapper,
  Box,
  Grid,
  Card,
  Table,
} from 'app/components/Blocks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { gridTemplateColumns } from 'styled-system';

const notify = () => {
  toast.success('button clicked!', {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

const HomePage = () => {
  return (
    <>
      <Flex>
        <Button onClick={notify} variant="outline">
          Button 1
        </Button>
        <ToastContainer />
      </Flex>
      <h1>INPUT</h1>
      <Flex>
        <Input
          width={['200px', '400px', '600px']}
          padding="10px"
          background={theme.colors.white}
          color={theme.colors.black}
          fontSize="large"
          borderRadius="10px"
          border="2px solid"
          borderColor={theme.colors.primary}
        />
      </Flex>
      <h1>SELECTOR</h1>
      <Flex>
        <Selector
          width="50%"
          padding="10px"
          background={theme.colors.white}
          color={theme.colors.black}
          fontSize="large"
          borderRadius="10px"
          border="2px solid"
          borderColor={theme.colors.primary}
          mb="40px"
        >
          <option>1</option>
          <option value="opt1">2</option>
          <option value="opt2">3</option>
          <option value="opt3">4</option>
          <option value="opt3">5</option>
        </Selector>
      </Flex>
      <h1>CheckBox</h1>
      <Flex>
        <CheckboxWrapper htmlFor="Apple">
          <CheckboxInput
            width="15px"
            height="15px"
            style={{ border: `1px solid ${theme.colors.black}` }}
            borderRadius={theme.radii[5]}
            name="Apple"
            type="checkbox"
            mr="10px"
          />
          Apple
        </CheckboxWrapper>
        <CheckboxWrapper htmlFor="Orange">
          <CheckboxInput
            width="15px"
            height="15px"
            style={{ border: `1px solid ${theme.colors.black}` }}
            borderRadius={theme.radii[5]}
            name="Orange"
            type="checkbox"
            mr="10px"
          />
          Orange
        </CheckboxWrapper>
      </Flex>
      <h1>Card</h1>
      <Grid
        gridGap="1.5rem"
        gridTemplateColumns={['1fr 1fr 1fr', '1rf 1rf', '1rf']}
      >
        <Card
          padding={theme.space[2]}
          border={theme.borders[1]}
          borderRadius={theme.radii[1]}
          background={theme.colors.primary}
        >
          <h1>Card Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            voluptatem, non placeat ipsam facere doloribus explicabo, neque sint
            modi excepturi dolore quos distinctio saepe doloremque cumque
            nostrum magnam vitae? Expedita.
          </p>
        </Card>
        <Card
          padding={theme.space[2]}
          border={theme.borders[1]}
          borderRadius={theme.radii[1]}
          background={theme.colors.secondary}
        >
          <h1>Card Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            voluptatem, non placeat ipsam facere doloribus explicabo, neque sint
            modi excepturi dolore quos distinctio saepe doloremque cumque
            nostrum magnam vitae? Expedita.
          </p>
        </Card>
        <Card
          padding={theme.space[2]}
          border={theme.borders[1]}
          borderRadius={theme.radii[1]}
          background={theme.colors.teritary}
        >
          <h1>Card Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            voluptatem, non placeat ipsam facere doloribus explicabo, neque sint
            modi excepturi dolore quos distinctio saepe doloremque cumque
            nostrum magnam vitae? Expedita.
          </p>
        </Card>
        <Card
          gridColumn="span 2"
          padding={theme.space[2]}
          border={theme.borders[1]}
          borderRadius={theme.radii[1]}
          background={theme.colors.black}
        >
          <h1>Card Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            voluptatem, non placeat ipsam facere doloribus explicabo, neque sint
            modi excepturi dolore quos distinctio saepe doloremque cumque
            nostrum magnam vitae? Expedita.
          </p>
        </Card>
        <Card
          padding={theme.space[2]}
          border={theme.borders[1]}
          borderRadius={theme.radii[1]}
          background={theme.colors.success}
        >
          <h1>Card Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            voluptatem, non placeat ipsam facere doloribus explicabo, neque sint
            modi excepturi dolore quos distinctio saepe doloremque cumque
            nostrum magnam vitae? Expedita. lor
          </p>
        </Card>
      </Grid>
      <Box>
        <Table />
      </Box>
    </>
  );
};

export default HomePage;
