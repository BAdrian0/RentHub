import React, {useState} from 'react';
import {
    MDBBtn,
    MDBCheckbox,
    MDBContainer,
    MDBInput,
    MDBTabs,
    MDBTabsContent,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsPane
} from 'mdb-react-ui-kit';

export default function UserLoginRegisterForm() {

    const [justifyActive, setJustifyActive] = useState('tab1');
    ;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    return (

        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">


            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                        Login
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                        Register
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>

                <MDBTabsPane show={justifyActive === 'tab1'}>


                    <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
                    <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

                    <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me'/>
                        <a href="!#">Forgot password?</a>
                    </div>

                    <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
                    <p className="text-center">Not a member? <a
                        href="src/components/UserLoginRegisterForm#!">Register</a></p>

                </MDBTabsPane>

                <MDBTabsPane show={justifyActive === 'tab2'}>


                    <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
                    <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
                    <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                    <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

                    <div className='d-flex justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms'/>
                    </div>

                    <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

                </MDBTabsPane>

            </MDBTabsContent>

        </MDBContainer>
    );
}