import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import { Button, Card, CardHeader, CardTitle, Form } from 'reactstrap';
import Step1 from "./Components/Steps/Step1";
import Step2 from './Components/Steps/Step2';
import Step3 from "./Components/Steps/Step3";
import Step4 from './Components/Steps/Step4';
import Step5 from './Components/Steps/Step5';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                value: 'select',
                currentStep: 1,
                user: {
                    id: null,
                    firstName: '',
                    lastName: '',
                    email: '',
                    age: '',
                    eduction: '',
                    current: '',
                    password: ''
                },
                error: ''
            }
        }

        this.validate = this.validate.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    validate() {
        let currentStep = this.state.data.currentStep;

        if(currentStep === 1) {

            let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			var isValidEmail = regex.test(this.state.data.user.email);

            if(!isValidEmail){
                let error="Please enter a valid email";
                this.setState({data: {...this.state.data, error}});
                return false;
            }

        }

		else if(currentStep === 2){

			let regex = /^[a-zA-Z]+$/;
            var isValidFirst = regex.test(this.state.data.user.firstName);
            var isValidLast = regex.test(this.state.data.user.lastName);
            var isValidAge = (this.state.data.user.age !== 'select');

			if(!isValidFirst || !isValidLast){
                let error = "Please enter a valid name. Name can only contain A-Z.";
                this.setState({data: {...this.state.data, error}});
                return false;
			}

            if(!isValidAge) {
                let error = "Please enter a valid Age";
                this.setState({data: {...this.state.data, error}});
                return false;
            }
      
		}
        
        else if(currentStep === 3) {
            if(this.state.data.user.eduction === 'select' || ( 
                !(this.state.data.user.eduction === 'Graduate' || this.state.data.user.eduction === 'Masters' || this.state.data.user.eduction === 'Higher') && this.state.data.user.current !== 'Student')) {
                var error="Please enter valid details";
                this.setState({data: {...this.state.data,  error}});
                return false;
            }
        
        }

        else if(currentStep === 4) {
            let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;

            var isValidPass = regex.test(this.state.data.user.password);
            if(!isValidPass) {
                let error = "Please enter Strong password";
                this.setState({data: {...this.state.data,  error}});
                return false;
            }
            if(this.state.data.user.password.length < 8) {
                let error="Password should have 8 Characters";
                this.setState({data: {...this.state.data,  error}});
                return false;
            }
        }
        
        else {
            console.log('success');
		}
        
        return true;
    }

    handleClick(e){
        e.preventDefault();
        let currentStep = this.state.data.currentStep;

        if(e.target.value==='Prev') {
            if(currentStep >= 2) {
                currentStep--;
            } else {
                currentStep = 1;
            }
            this.setState({data: {...this.state.data, currentStep}});

        } 

        else if (e.target.value==='Next') {
            
            if(this.validate()) {

                if(currentStep < 5) {
                    currentStep++;
                } else {
                    currentStep = 5;
                }
                var error="";
                this.setState({data: {...this.state.data, ...{currentStep,error}}});
            }
        }
    }

    handleChange(e) {
        let obj = { [e.target.id] : e.target.value};
        let user = {...this.state.data.user, ...obj};
        this.setState({data: {...this.state.data, ...{user:user}}});
    };

    render() {

        const data = this.state.data;
        
        return (
            <div className="App">
                <Header />
                <div className="App-body">
                    <Card className="col-6">
                        <CardHeader>Step {data.currentStep}</CardHeader>
                        <CardTitle className="text-danger mt-3"><h4>{data.error}</h4></CardTitle>

                        <Form>
                            <Step1 data={data} handleChange={(e) => this.handleChange(e)} />
                            <Step2 data={data} handleChange={(e) => this.handleChange(e)} />
                            <Step3 data={data} handleChange={(e) => this.handleChange(e)} />
                            <Step4 data={data} handleChange={(e) => this.handleChange(e)} />
                            <Step5 data={data} handleChange={(e) => this.handleChange(e)} />

                            <Button type="button" color="primary" value="Prev" onClick={(e) => this.handleClick(e)} disabled={(data.currentStep > 1)? '':'disabled'}> <i className="fas fa-angle-left"></i> Prev </Button>
                            <Button type="button" color="primary" value="Next" onClick={(e) => this.handleClick(e)} disabled={(data.currentStep < 5)? '':'disabled'}> Next <i className="fas fa-angle-right"></i></Button>
                        </Form>
                    </Card>
                </div>
            </div>
        )
    }
}


export default App;