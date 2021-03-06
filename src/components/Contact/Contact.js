import React from "react";
import {useForm, ValidationError} from "@formspree/react";
import {
    Avatar,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    TextareaAutosize,
    TextField,
    Typography,
} from "@material-ui/core";
import {EmailOutlined, MailOutlineRounded} from "@material-ui/icons";

import {makeStyles} from "@material-ui/core/styles";

export default function Contact() {
    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(14),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "5px",
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: "#1E2228",

        },
        form: {
            width: "100%", // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));
    const classes = useStyles();

    const [state, handleSubmit] = useForm("xgerajvk");
    if (state.succeeded) {
        return (

            <Container component="main" maxWidth="xs">
                <p style={{color: "white", textAlign: "left", fontSize: "19px", padding: "21px 21px 0px 21px"}}>
                    Thanks for messaging me. I will reach out to you soon.

                </p>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <MailOutlineRounded/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Get in Touch
                    </Typography>
                    <form onSubmit={handleSubmit} className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    color={"white"}
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    id={"message"}
                                    name={"message"}
                                    style={{width: "100%"}}
                                    aria-label="minimum height"
                                    rowsMin={4}
                                    placeholder="PLEASE ENTER YOUR MESSAGE HERE"
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                    label="I have entered the valid email address."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            style={{backgroundColor: "#1E2228", color: "white"}}
                            type="submit"
                            fullWidth
                            variant="outlined"
                            color="default"
                            className={classes.submit}
                            disabled={state.submitting}
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </Container>
        );
    }


    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <EmailOutlined/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Get in Touch
                </Typography>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                color={"white"}
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize
                                id={"message"}
                                name={"message"}
                                style={{width: "100%"}}
                                aria-label="minimum height"
                                rowsMin={4}
                                placeholder="PLEASE ENTER YOUR MESSAGE HERE"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="I have entered the valid email address."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        style={{backgroundColor: "#1E2228", color: "white"}}
                        type="submit"
                        fullWidth
                        variant="outlined"
                        color="default"
                        className={classes.submit}
                        disabled={state.submitting}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </Container>
    );
}
