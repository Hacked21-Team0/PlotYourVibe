import React, {Component} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    Slider,
    Snackbar,
    TextField,
    Typography
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import MoodType from '../MoodType';
import BackendAPI from '../BackendAPI';
import '../styles/dashboard.css'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dialogOpen: false,
            alertOpen: false
        };

    }

    openDialog = () => {
        return this.setState({dialogOpen: true});
    };

    closeDialog = (response) => {
        if (response.status === 201) {
            this.setState({alertOpen: true});
        }

        return this.setState({dialogOpen: false});
    };

    handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        return this.setState({alertOpen: false});
    }

    render() {
        return (

            <div className='bg'>
                <NavBar/>

                <div className='header'>
                    Mood Dashboard
                </div>
                <Barchart/>
                <History/>
                <Button variant="contained" color="primary" onClick={this.openDialog}>
                    Add Mood
                </Button>
                <AddMoodDialog open={this.state.dialogOpen} onClose={this.closeDialog}/>
                <Snackbar open={this.state.alertOpen} autoHideDuration={6000} onClose={this.handleAlertClose}>
                    <Alert onClose={this.handleAlertClose} severity="success">
                        Mood added successfully!
                    </Alert>
                </Snackbar>
            </div>

        );
    }
}

function AddMoodDialog(props) {

    const {onClose, open} = props;
    const [moodType, setMoodType] = React.useState(MoodType.HAPPY);
    const [scale, setScale] = React.useState(0.5);
    const [description, setDescription] = React.useState('');
    const [errorDescription, setErrorDescription] = React.useState(false);

    const resetState = () => {

        setMoodType(MoodType.HAPPY);
        setScale(0.5);
        setDescription('');
        setErrorDescription(false);

    };

    const handleSubmit = () => {
        if (!description) {
            setErrorDescription(true);
            return;
        }

        setErrorDescription(false);

        BackendAPI.createMood(
            'd9f33fb636c489e78fc7f11e84101ab0bd95561b',     // PLACEHOLDER
            moodType,
            scale,
            description,
            '1'     // PLACEHOLDER
        ).then(response => {
            onClose(response);
            resetState();
        });

    };

    const handleChangeMood = (event) => {
        setMoodType(event.target.value);
    };

    const handleChangeScale = (_, value) => {
        setScale(value);
    };

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle id="add-mood-dialog-title">Add Mood</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Fill in the information below to add a mood
                </DialogContentText>
                <InputLabel id="add-mood-mood-label">Mood</InputLabel>
                <Select
                    labelId="add-mood-mood-label"
                    id="add-mood-mood"
                    value={moodType}
                    onChange={handleChangeMood}
                    fullWidth
                >
                    <MenuItem value={MoodType.HAPPY}>{MoodType.properties.H.name}</MenuItem>
                    <MenuItem value={MoodType.EXCITED}>{MoodType.properties.E.name}</MenuItem>
                    <MenuItem value={MoodType.ANGRY}>{MoodType.properties.A.name}</MenuItem>
                    <MenuItem value={MoodType.DEPRESSED}>{MoodType.properties.D.name}</MenuItem>
                    <MenuItem value={MoodType.IRRITATED}>{MoodType.properties.I.name}</MenuItem>
                    <MenuItem value={MoodType.SAD}>{MoodType.properties.S.name}</MenuItem>
                </Select>
                <Typography id="add-mood-scale" gutterBottom>
                    Intensity
                </Typography>
                <Slider
                    defaultValue={0.5}
                    step={0.05}
                    marks
                    min={0.0}
                    max={1.0}
                    valueLabelDisplay="auto"
                    onChangeCommitted={handleChangeScale}
                    valueLabelFormat={(x) => `${(x * 100).toFixed(0)}%`}
                />
                <FormControl error={errorDescription} fullWidth>
                    <TextField
                        error={errorDescription}
                        id="add-mood-description"
                        label="Description"
                        type="text"
                        value={description}
                        onChange={handleChangeDescription}
                        fullWidth
                    />
                    <FormHelperText>
                        {errorDescription ? 'please fill this in.' : ''}
                    </FormHelperText>
                </FormControl>


            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );

}
