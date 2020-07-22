//Title -> Caroulsel -> Date -> Date -> Description -> button for 350 view
import React from 'react';
import { Typography } from '@material-ui/core';
import DateDescription from './date-description';
import Button360 from './button-360';

function Portfolio() {
  return (
    <div className="viewport">
      {/* //Title */}
      <Typography variant="h2">Title</Typography>

      {/* //Date and Description */}
      <DateDescription />

      {/* //360 Button  */}
      <Button360 />

      {/* //Mobile Structure  */}

      {/* //1 Image Structure  */}

      {/* //2 Image Structure */}

      {/* //3 Image Structure  */}

      {/* //4 Image Structure  */}

      {/* //5 Image Structure */}
    </div>
  );
}

export default Portfolio;
