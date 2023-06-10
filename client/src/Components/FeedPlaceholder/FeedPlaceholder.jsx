
import React, { useState } from 'react';
// import 'mdb-react/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
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

const FeedPlaceholder = () => {
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
                    <MDBCol md='3' className='ps-5'>  <h6 className="mb-0">Type of Post</h6></MDBCol>
                    <MDBCol md='3' className='ps-5'>    
                <MDBDropdown>
                <MDBDropdownToggle className='dropdown' >
        
        {selectedItem ? selectedItem : 'Select an option'}
     </MDBDropdownToggle>
      <MDBDropdownMenu >
        <MDBDropdownItem onClick={() => handleItemClick('Motivational Post')} >Motivational Post</MDBDropdownItem>
        <MDBDropdownItem onClick={() => handleItemClick('Career Opportunities')}>Career Opportunities </MDBDropdownItem>
        <MDBDropdownItem onClick={() => handleItemClick('Fun fact')}>Fun fact</MDBDropdownItem>
        <MDBDropdownItem onClick={() => handleItemClick('Sessions')}>Sessions</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
   </MDBCol>
                </MDBRow>
                <hr className="mx-n3" />

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Title</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBInput label='Title' size='lg' id='form1' type='text'/>
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

              
              

              <MDBBtn className='my-4' size='lg'>send application</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default FeedPlaceholder;