import React from 'react';
import Sdata from './Sdata';
import Card from './Card';

const Amazon = () =>
{
  return(
    <>
          <Card
              imgsrc={Sdata[5].imgsrc}
              title={Sdata[5].title}
              sname={Sdata[5].sname}
              link={Sdata[5].link}
          />
    </>
  );
}

export default Amazon;