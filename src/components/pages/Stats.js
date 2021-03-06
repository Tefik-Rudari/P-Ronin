import React from 'react';
import { Container } from 'react-bootstrap'
import { Row, Col, Image } from 'react-bootstrap'
import { Grommet, Box, Meter, Stack, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import "./stats.css"


export const Stats = () => {
  const Value = 5;
  const Value2 = 0;
  const Value3 = 25;
  const Value4 = 10;
  const Value5 = 0;
  const biznes = 20;



  return (
    
    <Grommet theme={grommet}>
        <Container fluid="true">
        <Row id="Stats">

          <Col md="12">
            <div className='titleofstats'>

              <h2>Case Study of </h2> <h2 className='biznesi'> {biznes}</h2><h2> businesses per field with web-application.</h2>
              
            </div>
          </Col>
          </Row>
          </Container>
          <Container fluid="true">
        <Row className="rreshtistats">

          <Col md="4">



            <div className='box'>
              <Box align="center" pad="large">
                <h4 className='titulliboksit'>Shfaqjet artistike</h4>
                <Stack anchor="center">
                  <Meter
                    type="circle"
                    background="light-2"
                    values={[{ value: Value }]}
                    size="xsmall"
                    thickness="small"
                    stroke="#74C9C8"
                    color="#74C9C8"
                  />
                  <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
                    <Text size="xlarge" weight="bold">
                      {Value}
                    </Text>
                    <Text size="small">%</Text>
                  </Box>
                </Stack>
              </Box>
            </div>
          </Col>
          <Col md="4">

            <div className='box'>

              <Box align="center" pad="large">
                <h4 className='titulliboksit'>Përpunimi i të dhënave dhe hostimin e informacionit.</h4>
                <Stack anchor="center">
                  <Meter
                    type="circle"
                    background="light-2"
                    values={[{ value: Value3 }]}
                    size="xsmall"
                    thickness="small"
                  />
                  <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
                    <Text size="xlarge" weight="bold">
                      {Value3}
                    </Text>
                    <Text size="small">%</Text>
                  </Box>
                </Stack>
              </Box>

            </div>
          </Col>
          <Col md="4">

            <div className='box'>
              <Box align="center" pad="large">

                <h4 className='titulliboksit'>Kultivimi I dritherave​</h4>
                <Stack anchor="center">
                  <Meter
                    type="circle"
                    background="light-2"
                    values={[{ value: Value2 }]}
                    size="xsmall"
                    thickness="small"
                  />
                  <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
                    <Text size="xlarge" weight="bold">
                      {Value2}
                    </Text>
                    <Text size="small">%</Text>
                  </Box>
                </Stack>

              </Box>

            </div>
          </Col>
        </Row>
        <Row>
          <Col md="6">


            <div className='box'>

              <Box align="center" pad="large">
                <h4 className='titulliboksit'>Libra & publikimi I librave​</h4>
                <Stack anchor="center">
                  <Meter
                    type="circle"
                    background="light-2"
                    values={[{ value: Value4 }]}
                    size="xsmall"
                    thickness="small"
                  />
                  <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
                    <Text size="xlarge" weight="bold">
                      {Value4}
                    </Text>
                    <Text size="small">%</Text>
                  </Box>
                </Stack>
              </Box>

            </div>
          </Col>
          <Col md="6">

            <div className='box'>

              <Box align="center" pad="large">
                <h4 className='titulliboksit'>Kompanite filmike</h4>
                <Stack anchor="center">
                  <Meter
                    type="circle"
                    background="light-2"
                    values={[{ value: Value5 }]}
                    size="xsmall"
                    thickness="small"
                  />
                  <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
                    <Text size="xlarge" weight="bold">
                      {Value5}
                    </Text>
                    <Text size="small">%</Text>
                  </Box>
                </Stack>
              </Box>
            </div>
          </Col>
        </Row>
    </Container>
      </Grommet>
  );
};

export default Stats