import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import {connect} from 'react-redux'
import {loginUser} from '../redux/actions/userActions'

const styles = (theme) => ({
    ...theme.spread,
    pageTitle : {
        margin : '20px 0px 20px auto' ,
        fontFamily: 'Bebas Neue',
        fontSize : '27px',
        color : 'white'
    },
    form : {
        textAlign : 'center'
    },
    formMain : {
        backgroundColor : '#303030',
    },
    button : {
        fontFamily: 'Bebas Neue',
        fontSize : '20px',
        marginTop : '10px',
        marginBottom : '5px',
        color : 'white'
    },
    textField : {
        marginBottom : '10px',
        // border: '1px solid white',
        borderRadius: '4px',
    }
})

class login extends Component {

    constructor(){
        super()
        this.state = {
            username : '',
            password : ''     
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newUser = {
            username : this.state.username,
            password : this.state.password
        }
        this.props.loginUser(newUser , this.props.history)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    render() {
        const { classes } = this.props

        return (
            <Grid container spacing={2} className ={classes.form} >
                <Grid item={true} sm /> 
                <Grid item={true} sm  className ={classes.formMain}>
                    <Typography variant="h4" className={classes.pageTitle}>
                        Login to your workspace
                    </Typography>
                    <form noValidate onSubmit ={this.handleSubmit } style={{paddingBottom: '10px'}}>

                        <TextField 
                        id ="username" 
                        name="username" 
                        type="test" 
                        label="Username" 
                        className={classes.textField}
                        variant="outlined"
                        value={this.state.username} 
                        onChange= {this.handleChange} fullWidth 
                        color ='secondary'
                        InputLabelProps={{
                            style: {
                              color: 'white'
                            } }} />

                        <TextField 
                        id ="password" 
                        name="password" 
                        type="password" 
                        label="Password" 
                        className={classes.textField}
                        variant="outlined"
                        value={this.state.password} 
                        onChange= {this.handleChange} fullWidth 
                        color ='secondary'
                        InputLabelProps={{
                            style: {
                              color: 'white'
                            } }} />

                        <Button type="submit" variant="contained" color="secondary" className={classes.button}>
                            Confirm
                        </Button>
                        <br />
                        <small style={{color : '#aeaeae', paddingBottom: '20px'}}>Don't have an account ? Sign up <Link to="/signup" style={{color : '#bf9fdd', textDecoration: 'none'}}>here</Link></small>
                    </form>
                </Grid> 
                <Grid item={true} sm /> 
            </Grid>
        )
    }
}

export default connect(null , {loginUser})(withStyles(styles)(login))
