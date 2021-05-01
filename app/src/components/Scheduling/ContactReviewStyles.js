import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '1rem',
  },
  input: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  formSpace: {
    marginBottom: '1.5rem',
  },
  letterSpacing: {
    letterSpacing: '1px',
  },
  editButton: {
    width: '37px',
    height: '22px',
    position: 'absolute',
    right: '0',
    left: '16rem',
    textTransform: 'capitalize',
    letterSpacing: '1px',

  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: '1rem',
  },
  inputWidth: {
    width: '65%',
  },
  required: {
    color: 'red',
  },
  disabled: {
    color: '#2F2F2F',
  },
})

export { useStyles };