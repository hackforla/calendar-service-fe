import React from 'react';
import classes from './SuccessScreenTwo.module.scss';
import { Button } from '../../store/index';
import { CheckCircleOutlineIcon, Typography } from '../../store/index';

export default function SuccessScreenTwo() {
  return (
    <div className={classes.main}>
      <CheckCircleOutlineIcon style={{ height: '5rem', width: '5rem' }} />
      <div className={classes.SuccessScreenTwoHeading}>
        <Typography variant='h5'>Success!</Typography>
      </div>
      <div className={classes.SuccessScreenTwoText}>
        <Typography className='body-text'>
          Your meeting preferences for TRAINING have been set. Please continue
          set up and manage your preferences by visisting your dashboard.
        </Typography>
      </div>
      <div className={classes.SuccessScreenTwoButton}>
        <Button variant='contained' color='primary'>
          Complete Setup
        </Button>
      </div>
    </div>
  );
}
