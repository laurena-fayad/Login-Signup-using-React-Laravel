import emailjs from '@emailjs/browser';
import React, {useState} from 'react'
import {Card, CardContent, Grid, TextField, Button, Typography} from '@material-ui/core';

emailjs.init("cqDsxAUbvcZ7YixNw");

const ContactForm = () => {
  const [first_name, setFName] = useState("");
  const [last_name, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const submit = (e) => {
    e.preventDefault();

     emailjs.send("service_ishf20s","template_m09eo0h",{
      first_name: first_name,
      last_name: last_name,
      email: email,
      message: message,
      }).then(
        (result) => {
          if(result.text == "OK"){
            setStatus({ type: 'success' });
            e.target.reset();
          }
        },
        (error) => {
          setStatus({type: 'error', error});
          e.target.reset();
        }
      );
  };

  return (
    <div className="contact_form d-flex align-items-center">
      <Card
        onSubmit={submit}
        style={{ maxWidth: 600, margin: "0 auto", padding: "20px 5px" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            style={{ textAlign: "center", marginBottom: "25px" }}
          >
            Contact Us
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder="Enter your first name"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => setFName(e.target.value)}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  placeholder="Enter your last name"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => setLName(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setMessage(e.target.value)}
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
                <>
                {status?.type === 'success' && <p className='register text-center my-3'>Message successfully sent!</p>}
                {status?.type === 'error' && (
                  <p className='status_msg'>Error - Message not sent.</p>
                )}
              </>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default ContactForm;