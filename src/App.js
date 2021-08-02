import "./App.css";
import Header from "./Component/Header";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Textfield from "./Component/FormsUI/Textfield";
import Select from "./Component/FormsUI/Select";
import countries from "./data/countries.json";
import DateTimePicker from "./Component/FormsUI/DateTimePicker";
import Checkbox from './Component/FormsUI/Checkbox'
import Button from './Component/FormsUI/Button'
const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),

  },
}));

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  fatherName: "",
  motherName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  birthDate:"",
  termsOfService: false,
};
const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required."),
  lastName: Yup.string().required("Required."),
  fatherName: Yup.string().required("Required."),
  motherName: Yup.string().required("Required."),
  email: Yup.string().email("Invalid Email.").required("Required."),
  phone: Yup.number()
    .integer()
    .typeError("Please Enter a valid phone number.")
    .required("Required"),
  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required."),
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  birthDate:Yup.date()
  .required('Required'),
  termsOfService: Yup.boolean()
  .oneOf([true],"The Terms and Condition must be accepted.")
  .required("The Terms and Condition must be accepted."),
});

function App() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={12}>
        <Container maxWidth="md">
          <Grid item xs={12}>
            <div className={classes.formWrapper}>
              <h2 className="Title">Personal Data</h2>
            </div>
          </Grid>
        </Container>

        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
                alert(JSON.stringify(values, null, 2));
              }}
            >
              <Form >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your Details</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="firstName" label="First Name" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="lastName" label="Last Name" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="fatherName" label="Father Name" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="motherName" label="Mother Name" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="email" label="Email" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="phone" label="Phone" />
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker name="birthDate" label="Birth Date"/>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Address</Typography>
                  </Grid>
                  
                  

                  <Grid item xs={6}>
                    <Textfield name="addressLine1" label="Address Line 1" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="addressLine2" label="Address Line 2" />
                  </Grid>

                  <Grid item xs={3}>
                    <Textfield name="city" label="City" />
                  </Grid>

                  <Grid item xs={3}>
                    <Textfield name="state" label="State" />
                  </Grid>

                  <Grid item xs={3}>
                    <Select
                      name="country"
                      label="Country"
                      options={countries}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Checkbox name="termsOfService" legend="Terms Of Service"  label="I agree"/>
                  </Grid>

                  <Grid item xs={3}>
                    <Button> Submit Form</Button>
                  </Grid>
                  




                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
