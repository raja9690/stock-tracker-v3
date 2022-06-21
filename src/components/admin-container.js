import * as React from 'react';
import Button from '@mui/material/Button';
import FormApiUrl from './forms/api-url'
import FormEndPoint from './forms/end-point'
import FormAction from './forms/action'
import FormHeader from './forms/header'
import FormParams from './forms/params'
import FormSymbol from './forms/symbol'
import FormAlert from './forms/alert'
import service from "../api/invoke-function-service"

const defaultPayload = {
  method: '',
  url: '',
  endPoint: '',
  headers: {},
  params: {}
};

const formatData = date => date.toISOString().slice(0, 10);

const AdminCofig = props => {
  const [apiConfigPayload, setApiConfigPayload] = React.useState(defaultPayload);
  const [apiCofigStatus, setApiConfigStatus] = React.useState('default');

  const handleCallback = (inputType,inputData) =>{
    if (inputType && inputData) {
      const inputPayload = { ...apiConfigPayload };
      switch (inputType) {
        case 'apiUrl':
          inputPayload.url = inputData.url;
          inputPayload.headers = inputData.headers;
          break;
        case 'endPoint':
          inputPayload.endPoint = inputData.endPoint;
          break;
        case 'action':
          inputPayload.method = inputData.action;
          break;
        case 'symbol':
          inputPayload.params.Symbol = inputData.symbol
          break;
        case 'startDate':
          inputPayload.params.StartDateInclusive = formatData(inputData)
          break;
        case 'endDate':
          inputPayload.params.EndDateInclusive = formatData(inputData)
          break;
        case 'orderBy':
          inputPayload.params.OrderBy = inputData.order
          break;
        default:
          break;
      }
      setApiConfigPayload({ ...inputPayload });
    }
  }

  const submitConfig = () => {
    delete apiConfigPayload.endPoint;
    if (apiConfigPayload.url === "") {
      setApiConfigStatus('incorrect');
    }
    else {
      service.post(apiConfigPayload).then((response) => {
        setApiConfigStatus('success');
        console.log(response);
      }).catch((e) => {
        setApiConfigStatus('error');
        console.log('An API error occurred', e);
      })
    }
  }

  return (
    <div className='admin-body-container'>
        <div className='banner-text-small'>
          <h3>A simple application to configure <b>Stock tracking</b></h3>
        </div>
        <FormAlert apiCofigStatus={apiCofigStatus} />
        <div className='admin-panel'>
          <div className='admin-form-panel'>
            <h3>Config API</h3>
            <FormAction onEventHandler = {handleCallback} />
            <FormApiUrl onEventHandler = {handleCallback} />
            <FormEndPoint onEventHandler = {handleCallback} />
            <FormSymbol onEventHandler = {handleCallback} />
            <FormParams onEventHandler = {handleCallback} />
          </div>
          <div className='review-submit-panel'>
            <FormHeader onEventHandler = {handleCallback} headerData={apiConfigPayload} />
            <Button variant="contained" onClick={submitConfig}>
              Submit
            </Button>
          </div>
        </div>
      </div>
  );
}

export default AdminCofig
