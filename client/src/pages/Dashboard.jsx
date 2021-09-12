import React, {Component} from 'react'
import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@material-ui/core";
import MoodType from "../MoodType";

export default class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dialogOpen: false
        };

    }

    openDialog = () => {
        return this.setState({dialogOpen: true})
    }

    closeDialog = () => {
        return this.setState({dialogOpen: false})
    }


    render() {
        return (
            <div className='dash_container'>
                <Button variant="contained" color="primary" onClick={event => this.openDialog()}>
                    Add Mood
                </Button>
                <AddMoodDialog open={this.state.dialogOpen} onClose={value => this.closeDialog()}/>
            </div>
        )
    }
}

function AddMoodDialog(props) {

    const {onClose, open} = props;
    const [moodType, setMoodType] = React.useState('');

    const handleChange = (event) => {
        setMoodType(event.target.value);
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
                    onChange={handleChange}
                    fullWidth
                >
                    <MenuItem value={MoodType.HAPPY}>{MoodType.properties.H.name}</MenuItem>
                    <MenuItem value={MoodType.EXCITED}>{MoodType.properties.E.name}</MenuItem>
                    <MenuItem value={MoodType.ANGRY}>{MoodType.properties.A.name}</MenuItem>
                    <MenuItem value={MoodType.DEPRESSED}>{MoodType.properties.D.name}</MenuItem>
                    <MenuItem value={MoodType.IRRITATED}>{MoodType.properties.I.name}</MenuItem>
                    <MenuItem value={MoodType.SAD}>{MoodType.properties.S.name}</MenuItem>
                </Select>
                <TextField
                    autoFocus
                    id="add-mood-description"
                    label="Description"
                    type="text"
                    fullWidth
                />


            </DialogContent>
        </Dialog>
    )

    // mood
    // scale
    // description
    // timestamp
    // user

}
