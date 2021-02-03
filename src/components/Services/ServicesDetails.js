import React from 'react';
import { Grommet, grommet, Tab, Tabs, Box } from 'grommet';
import { deepMerge } from 'grommet/utils';
import './servicesinfo.css';


const myTheme = deepMerge(grommet, {
    global: {
        colors: {
          // Overriding existing colors
          brand: '#4D4CDB',
          'accent-1': '#584B4B',
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
          color: 'blue',
          size: 'small',
          focus: 'blue',
          plain: 'false'
          
        },
      },
    },
    tab: {
      border: {
        side: 'bottom',
        color: 'grey',        
      },
      active: {
        background: 'white',
        color: 'black',
      },    
      pad: 'large',
      margin: {
        vertical: '-2px',
        horizontal: 'none',
      },
    },
  });


function ServicesDetails() {
    return (
        <Grommet theme={myTheme}>
            <Tabs>
                <Tab title="WEB SERVICES & PRODUCTS">
                    <Box pad="medium">
                        <div className='box'>
                            <div className='services-content'>
                                <div className='image'>
                                </div>
                                <h1>WEB SERVICES & PRODUCTS</h1>
                                <div className='sherbimet'>


                                    <p>The idea that our services might help a business, is the greatest boost we have. We hope that you are our companion during our jurney, and our paths will help each other. </p>

                                </div>
                            </div>
                        </div>
                    </Box>
                </Tab>
                <Tab title="BUSSINESS IDENTITY​">
                    <Box pad="medium">
                        <div className='box'>
                            <div className='services-content'>
                                <div className='image'>
                                </div>
                                <h1>BUSSINESS IDENTITY​</h1>
                                <div className='sherbimet'>


                                    <p>Just like a book needs it's cover, so do businesses need their branding. Our restless team will efficently offer great logos, branding and Social Media related services. </p>


                                </div>
                            </div>
                        </div>
                    </Box>
                </Tab>
                <Tab title="WEB RELATED SERVICES">
                    <Box pad="medium">
                        <div className='box'>
                            <div className='services-content'>
                                <div className='image'>
                                </div>
                                <h1>WEB RELATED SERVICES</h1>
                                <div className='sherbimet'>
                                    <p>Sometimes a web-site it's not enough, a company needs web related services. Such as SEO, E-mails, maintenece, consulting etc.</p>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Tab>
            </Tabs>
        </Grommet>
    );
}

export default ServicesDetails;



