import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    MDBSwitch,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBTextArea,
    MDBFile,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem
}
    from 'mdb-react-ui-kit';

const RequestPlaceholder = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center'>
                <MDBCol lg='9' className='my-5'>

                    <h1 class="text-white mb-4">Upload</h1>

                    <MDBCard>
                        <MDBCardBody className='px-4'>
                            <MDBRow className='align-items-center pt-4 pb-3'>
                                <MDBCol md='3' className='ps-5'>  <h6 className="mb-0">Issue :</h6></MDBCol>
                                <MDBCol md='3' className='ps-5'>
                                    <MDBDropdown>
                                        <MDBDropdownToggle className='dropdown' >
                                            {selectedItem ? selectedItem : 'Select an option'}
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu >
                                            <MDBDropdownItem onClick={() => handleItemClick('Health')} >Health</MDBDropdownItem>
                                            <MDBDropdownItem onClick={() => handleItemClick('Education')}>Education </MDBDropdownItem>
                                            <MDBDropdownItem onClick={() => handleItemClick('Employment')}>Employment</MDBDropdownItem>

                                            <MDBDropdownItem onClick={() => handleItemClick('Other')}>Other</MDBDropdownItem>

                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                    <hr className="mx-n3" />
                                    <div className="align-items-right">
                                        <MDBSwitch defaultChecked id='flexSwitchCheckChecked' label='Emergency' />
                                    </div>
                                </MDBCol>

                            </MDBRow>


                            <hr className="mx-n3" />



                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Title</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <MDBInput label='Title' size='lg' id='form1' type='text' />
                                </MDBCol>

                            </MDBRow>

                            <hr className="mx-n3" />

                            {/* <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Description</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBInput label='example@example.com' size='lg' id='form2' type='email'/>
                </MDBCol>

              </MDBRow> */}



                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Description</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <MDBTextArea label='Message' id='textAreaExample' rows={3} />
                                </MDBCol>



                            </MDBRow>

                            <hr className="mx-n3" />
                            <div>
                                <MDBFile label='Add Documents' id='customFile' />
                            </div>
                            <hr className="mx-n3" />

                            <MDBRow className='align-items-center pt-4 pb-3'>

                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Funds Required</h6>
                                </MDBCol>

                                <MDBCol md='9' className='pe-5'>
                                    <MDBTextArea label='Enter Amount' id='textAreaExample' rows={3} />
                                </MDBCol>



                            </MDBRow>

                            







                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default RequestPlaceholder;