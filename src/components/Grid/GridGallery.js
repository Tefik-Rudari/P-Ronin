import React, { useContext } from 'react';
import image1 from './img-8.jpg';
import image2 from './img-9.jpg';
// import Link from '@material-ui/core/Link';

import {
  grommet,
  Image,
  Box,
  Card,
  Anchor,
  Grid,
  Grommet,
  ResponsiveContext,
} from 'grommet';

// const preventDefault = (event) => event.preventDefault();

function GridGallery() {
  const size = useContext(ResponsiveContext);
  return (
    <Grommet theme={grommet}>
      <Box pad="medium">
        <Grid columns={size !== 'medium' ? 'medium' : '100%'} gap="small">
          <Card pad="small" >
            <div class="container">
            {/* <Anchor id="decpro" target="blank" href="http://decprojects.net/"> */}
              <Image src={image1} fill="true" />
            {/* </Anchor> */}
            <Anchor id="decpro" target="blank" href="http://decprojects.net/">
            <div class="overlay">
              <div class="text">Decpro</div>
            </div>
            </Anchor>
            </div>
          </Card>
          <Card pad="small">
            <img alt="img" src={image1} />
          </Card>
          <Card pad="small">
            <img alt="img" src={image2} />
          </Card>
          <Card pad="small">
            <img alt="img" src={image2} />
          </Card>
        </Grid>
      </Box>
    </Grommet>
  );
};

export default GridGallery