import React from 'react'
import {Card, CardContent, Grid, TextField, Button, Typography} from '@material-ui/core';

const ContactForm = () => {
  return (
    <div className="contact_form d-flex align-items-center">
      <Card style={{ maxWidth: 600, margin: "0 auto", padding: "20px 5px"}}>
        <CardContent>
          <Typography variant="h5" style={{textAlign: "center", marginBottom: "25px"}}>Contact Us</Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder="Enter your first name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  placeholder="Enter your last name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="How can we help you?"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  style={{
                    backgroundColor: "#6886C5",
                    fontSize: "18px",
                  }}
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="primary"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;