import React from 'react';
import { Grommet, grommet, Tab, Tabs, Box } from 'grommet';
import { deepMerge } from 'grommet/utils';
import './servicesinfo.css';
import hook from './webhook.png';
import page from './webpage.png';
import service from './webservice.png';


const myTheme = deepMerge(grommet, {
  global: {
    colors: {
      // Overriding existing colors
      brand: '#4D4CDB',
      'accent-1': '#00FFFF',
      'accent-2': '#7FFFB0',
      'accent-3': '#8FFFB0',
      'accent-4': '#9FFFB0',
      'neutral-1': '#10873D',
      'neutral-2': '#20873D',
      'neutral-3': '#30873D',
      'neutral-4': '#40873D',
      focus: '#000',
      // Setting new colors
      blue: '#00C8FF',
      green: '#17EBA0',
      teal: '#82FFF2',
      purple: '#F740FF',
      red: '#FC6161',
      orange: '#FFBC44',
      yellow: '#FFEB59',
      // you can also point to existing grommet colors
      brightGreen: 'accent-1',
      deepGreen: 'neutral-2',
      // Changing default text color,
      // all colors could be either a string or a dark and light object
      text: {
        dark: 'teal',
        light: 'purple',
      },
    },
  },
  tabs: {
    header: {
      border: {
        side: 'bottom',
        color: 'white',
        size: 'small',
      },
      hover: {
        background:'blue',
      }
    },
  },
  tab: {
    border: {
      side: 'bottom',
      color: 'grey',
      "disabled": {},
      "hover": {
        color: 'blue',
        background: 'blue',
      }
      
    },
    active: {
      background: 'white',
      color: 'blue',
    },
    pad: 'large',
    margin: {
      vertical: '-2px',
      horizontal: 'none',
    },
    hover: {
      color: 'blue'
    },

  },
});


function ServicesDetails() {
  return (
    <div className="SherbimetTona">

      <Grommet theme={myTheme}>
        <Tabs>
          <Tab title="WEB SERVICES & PRODUCTS">
            <Box pad="medium">
              <div className='box'>
                <div className='services-content'>
                  <div className='imagess'>
                    <img src={hook} alt="this is car image" />

                  </div>
                  <div className='sherbimet'>
                    <p>The idea that our services might help a business, is the greatest boost we have. We hope that you are our companion during our jurney, and our paths will help each other. </p>

                    <ul>
                      <li>
                        Pronins
                                      </li>
                      <li>
                        Pronins
                                      </li>
                      <li>
                        Pronins
                                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Box>
          </Tab>
          <Tab title="BUSSINESS IDENTITY​">
            <Box pad="medium">
              <div className='box'>
                <div className='services-content'>
                  <div className='imagess'>
                    <img src={page} alt="this is car image" />
                  </div>
                  <div className='sherbimet'>



                    <p>Just like a book needs it's cover, so do businesses need their branding. Our restless team will efficently offer great logos, branding and Social Media related services. </p>
                    <ul>
                      <li>
                        Pronins
                                      </li>
                      <li>
                        Pronins
                                      </li>
                      <li>
                        Pronins
                                      </li>
                    </ul>

                  </div>
                </div>
              </div>
            </Box>
          </Tab>
          <Tab title="WEB RELATED SERVICES">
            <Box pad="medium">
              <div className='box'>
                <div className='services-content'>
                  <div className='imagess'>
                    <img src={service} alt="this is car image" />
                  </div>
                  <div className='sherbimet'>
                    <p>Sometimes a web-site it's not enough, a company needs web related services. Such as SEO, E-mails, maintenece, consulting etc. I am running out of word what to say.</p>
                    <ul>
                      <li>
                        Pronins
                                      </li>
                      <li>
                        Pronins
                                      </li>
                      <li>
                        Pronins
                                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Box>
          </Tab>
        </Tabs>
      </Grommet>
    </div>
  );
}

export default ServicesDetails;



