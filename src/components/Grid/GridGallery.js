import React, { useContext } from 'react';
import image1 from './decpro.PNG';
import image2 from './img-9.jpg';
import image3 from './ipu.PNG';
// import Link from '@material-ui/core/Link';

import {
  Image,
  Box,
  Card,
  Anchor,
  Grid,
  Grommet,
  ResponsiveContext,
} from 'grommet';

const customTheme = {
  global: {
    colors: {
      focus: null
    }
  }
};
// const preventDefault = (event) => event.preventDefault();

function GridGallery() {
  const size = useContext(ResponsiveContext);
  return (
    <Grommet className="container" theme={customTheme}>
      <Box pad="medium">
        <Grid columns={size !== 'medium' ? 'medium' : '100%'} gap="small">
          <Card pad="small" >
            <div className="kont">
              {/* <Anchor className="kontinier" id="decpro" target="blank" href="http://decprojects.net/"> */}
                <Image className="foto" src={image1} fill="true" />
              {/* </Anchor> */}
              <Anchor id="decpro" target="blank" href="http://decprojects.net/">
                <div className="overlay">
                  <div className="text">DECPRO</div>
                </div>
              </Anchor>
            </div>
          </Card>
          <Card pad="small">
            <Anchor id="decpro" target="blank" href="http://decprojects.net/">
              <Image className="foto" src={image1} fill="true" />
            </Anchor>
          </Card>
          <Card pad="small" >
            <div className="kont">
              {/* <Anchor className="kontinier" id="decpro" target="blank" href="http://decprojects.net/"> */}
                <Image className="foto" src={image1} fill="true" />
              {/* </Anchor> */}
              <Anchor id="decpro" target="blank" href="http://ipu-ks.ddns.net/">
                <div className="overlay">
                  <div className="text">IPU</div>
                </div>
              </Anchor>
            </div>
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
